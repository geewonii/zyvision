/**
 * Main
 */
import { html, images } from "../common/common";
import * as THREE from 'THREE';
var $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('amazeui-lazyload');
require('../plugins/three.js/jquery.mousewheel.js');
require('../plugins/three.js/RequestAnimationFrame.js');
require('../plugins/swiper.js/swiper-3.4.2.jquery.min.js');
require ('../plugins/swiper.js/swiper-3.4.2.min.css');

var scale = null,
	resizeEvent = null,
	scrolls = 0,
	opactiy = 1,
	ons = false;
 
export default function() {
	/*
	* 初始化
	*/	
	this.init = function() {
		$("body").append(html);

		function browserRedirect() {
			var sUserAgent = navigator.userAgent.toLowerCase();  
			var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
			var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
			var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
			var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
			var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
			var bIsAndroid = sUserAgent.match(/android/i) == "android";  
			var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
			var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
			if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){  
			//侦听浏览器窗口
					$(window).resize(function () {
						$(this).animate({
							opactiy: 0
						},300,function(){
							window.location.reload();
						})
					})
			} else {  
				//mobile
			}  
		}
		// browserRedirect();
			
		//rem自适应
		(function(designWidth, maxWidth) {
			var doc = document,
				win = window,
				docEl = doc.documentElement,
				tid,rootItem,rootStyle;

			function refreshRem() {
				var width = docEl.getBoundingClientRect().width;
				if (!maxWidth) {
					maxWidth = 750;
				};
				if (width > maxWidth) {
					width = maxWidth;
				}
				var rem = width * 100 / designWidth;
				//兼容UC开始
				rootStyle="html{font-size:"+rem+'px !important}';
				rootItem = document.getElementById('rootsize') || document.createElement("style");
				if(!document.getElementById('rootsize')) {
					document.getElementsByTagName("head")[0].appendChild(rootItem);
					rootItem.id='rootsize';
				}
				if(rootItem.styleSheet){
					rootItem.styleSheet.disabled || (rootItem.styleSheet.cssText=rootStyle)
				}else{
					try{rootItem.innerHTML=rootStyle}catch(f){rootItem.innerText=rootStyle}
				}
					//兼容UC结束
					docEl.style.fontSize = rem + "px";
				};
				refreshRem();

				win.addEventListener("resize", function() {
					clearTimeout(tid); //防止执行两次
					tid = setTimeout(refreshRem, 300);
				}, false);

				win.addEventListener("pageshow", function(e) {
					if (e.persisted) { // 浏览器后退的时候重新计算
						clearTimeout(tid);
						tid = setTimeout(refreshRem, 300);
					}
				}, false);

				if (doc.readyState === "complete") {
					doc.body.style.fontSize = "16px";
				} else {
					doc.addEventListener("DOMContentLoaded", function(e) {
						doc.body.style.fontSize = "16px";
					}, false);
				}
		})(1920, 1920);
	};

	/*
	* 页面逻辑
	*/
	this.control = function() {
		//懒加载
		$("img.lazy").lazyload({
			effect: "fadeIn",
			threshold: 100
		});

		//轮播图
		new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        slidesPerView: 1,
	        loop: true,
	        spaceBetween: 0
	   	});
		
		//header tab
		$(".head_tab").click(function() {
			var idx = $(this).index()-1;
			var maodian =  $(".maodian").eq(idx).offset().top;

			$("html,body").animate({scrollTop: maodian}, 500);

			$(this).addClass("active").siblings(".head_tab").removeClass("active");
			!!opactiy ? opactiy : $("header").css("opacity");

			var opt = setInterval(function() {
				opactiy -= 0.1;
				opactiy <= 0 ? clearInterval(opt) : opactiy = opactiy;
				$("header").css({"opacity":opactiy});
				opactiy<=0?$("header").addClass("hidden"): $("header").removeClass("hidden");
			}, 35);
		});

		//滚动锚点
		$(document).on("scroll",function() {
			if(!ons){
				var top = $(this).scrollTop();
				if(top > scrolls) {
					opactiy -= 0.1;
					opactiy <= 0 ? opactiy = 0 : opactiy = opactiy;
				}else{
					opactiy += 0.1;
					opactiy >= 1 ? opactiy = 1 : opactiy = opactiy;
				}
				scrolls = top;
				$("header").css({"opacity": opactiy});
				opactiy <=0 ? $("header").addClass("hidden") : $("header").removeClass("hidden");
			}
		});

		//轮播contral
		$(".swiper_child").hover(function() {
			if ( !!$(this).hasClass("hover") ) {
				$(this).removeClass("hover").find(".mask").removeClass("hover");
			} else {
				$(".swiper_child").removeClass("hover");
				$(this).addClass("hover").find(".mask").addClass("hover");
			}
		});

		//3d转动
		var renderer = null,
		scene = null, 
		camera = null,
		cube = null,
		animating = true;
		onLoad();
		function onLoad() {
	        var container = document.querySelector("#container");
		    renderer = new THREE.WebGLRenderer( { antialias: true,alpha:true } );
		    renderer.setSize(container.offsetWidth, container.offsetHeight);
		    container.appendChild( renderer.domElement );
		    
		    scene = new THREE.Scene();
	        camera = new THREE.PerspectiveCamera( 25, container.offsetWidth / container.offsetHeight,1, 4000 );
	        camera.position.set( 0, 0, 4 );
			var light = new THREE.DirectionalLight( 0xffffff, 1.5);
			light.position.set(0, 0, 1);
			scene.add( light );
	        var mapUrl = `${images[11]}`;
	        var map = THREE.ImageUtils.loadTexture(mapUrl);
	        var material = new THREE.MeshPhongMaterial({ map: map });
	        var geometry = new THREE.CubeGeometry(1, 1, 1);
	        cube = new THREE.Mesh(geometry, material);
	        cube.rotation.x = Math.PI / 5;
	        cube.rotation.y = Math.PI / 5;
	        scene.add( cube );
	        addMouseHandler();
	        run();
		}

		function run() {
			renderer.render( scene, camera );
			if (animating){
				cube.rotation.x -= 0.02;
				cube.rotation.y -= 0.02;
			}
	    	requestAnimationFrame(run);	
		}
	
		function addMouseHandler() {
			var dom = renderer.domElement;
			dom.addEventListener( 'mouseup', onMouseUp, false);
		}
		
		function onMouseUp(event) {
		    event.preventDefault();
		    animating = !animating;
		}
		
	}
}