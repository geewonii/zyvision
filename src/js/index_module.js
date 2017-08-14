/**
 * 
 */
import '../css/swiper.min.css';
var $ = require('jquery');
window.$ = $;
window.jQuery = $;
// export default $;
import * as THREE from 'THREE';
require('amazeui-lazyload');
require('./jquery.mousewheel.js');
require('./RequestAnimationFrame.js');
require('./swiper.jquery.min.js');

var scale = null,resizeEvent = null,scrolls = 0,opactiy = 1,ons = false;
const requireContext = require.context("../images", true, /^\.\/.*$/);
const images = requireContext.keys().map(requireContext);
// console.log(images);
 
export default function() {
	this.init = function(){
var body_data = `<header>
			  		<div class="flej tl">
			  			<a href="">
				  			<h1 id="logo" class="flec">
					  			<img class="" src="${images[18]}" title="logo"/>
					  			<div class="flec">卓阳视觉</div>
					  		</h1>
				  		</a>
			  			<div class="fled head_tab active"><div>
				  				<b>Homepage</b><p>首页</p>
				  		</div></div>
			  			<div class="fled head_tab"><div>
				  				<b>Case Demonstration</b><p>案例展示</p>
				  		</div></div>
			  			<div class="fled head_tab"><div>
				  				<b>Business Presentation</b><p>业务介绍</p>
				  		</div></div>
			  			<div class="fled head_tab"><div>
				  				<b>Competitive Edge</b><p>竞争优势</p>
				  		</div></div>
			  			<div class="fled head_tab"><div>
				  				<b>Contact Us</b><p>联系我们</p>
				  		</div></div>
			  		</div>
			  	</header>
			  	
			  	<section class="wrap_line">
			  		<section class="Homepage flec maodian">
			  			<div>
			  				<div class="section_en">
					  			<p>Pro</p>
					  			<p>fession</p>
					  			<p>designer</p>
					  		</div>
					  		<div class="section_zh">
					  			您的专业设计管家
					  		</div>
			  			</div>
				  	</section>
			  	</section>
			  	
			  	<section class="wrap_line">
				  	<section class="Demonstration tc maodian">
				  		<div class="head_title">Case Demonstration</div>
				  		<div class="slash"></div>
				  		<div class="head_cont">案例展示</div>
				  		<!-- Swiper -->
				  		<div class="swiper">
						    <div class="swiper-container">
						        <div class="swiper-wrapper">
						            <div class="swiper-slide flej">
						            	<div class="swiper_child">
											<img class="" src="${images[8]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>01</h2>
							            		<h3>VI(LOGO)</h3>
							            		<p>是徽标或者商标的外语缩写，是LOGOtype的缩写，起到对徽标拥有公司的识别和推广的作用，通过形象的徽标可以让消费者记住公司主体和品牌文化</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
											<img class="" src="${images[4]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>02</h2>
							            		<h3>海报</h3>
							            		<p>上海的人通常把职业性的戏剧演出称为“海”，而把从事职业性戏剧的表演称为“下海”。作为剧目演出信息的具有宣传性的招徕顾客性的张贴物，也许是因为这个，人们便把它叫做“海报”</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
											<img class="" src="${images[10]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>03</h2>
							            		<h3>折页手册</h3>
							            		<p>折页就是将印张按照页码顺序折叠成书刊开本尺寸的书贴，或将大幅面印张按照要求折成一定规格幅面的工作过程。</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
											<img class="" src="${images[6]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>04</h2>
							            		<h3>请柬</h3>
							            		<p>请柬，又称为请帖、简帖。为了邀请客人参加某项活动而发的礼仪性书信</p>
							            	</div>
						            	</div>
						            </div>
						            <div class="swiper-slide flej">
						            	<div class="swiper_child">
											<img class="" src="${images[9]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>05</h2>
							            		<h3>网页</h3>
							            		<p>网页是构成网站的基本元素，是承载各种网站应用的平台。通俗地说，您的网站就是由网页组成的，如果您只有域名和虚拟主机而没有制作任何网页的话，您的客户仍旧无法访问您的网站。</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
							            	<img class="" src="${images[3]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>06</h2>
							            		<h3>H5界面</h3>
							            		<p>H5是一系列制作网页互动效果的技术集合，即H5就是移动端的web页面。</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
							            	<img class="" src="${images[0]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>07</h2>
							            		<h3>APP</h3>
							            		<p>主要指安装在智能手机上的软件，完善原始系统的不足与个性化。是手机完善其功能，为用户提供更丰富的使用体验的主要手段。</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
							            	<img class="" src="${images[7]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>08</h2>
							            		<h3>淘宝店铺</h3>
							            		<p>淘宝网店是中国杭州阿里巴巴集团旗下淘宝网商务平台所经营的互联网虚拟商店的总称，是目前中国最大的网络实体店铺和各类零售供货商的汇集地</p>
							            	</div>
						            	</div>
						            </div>
						            <div class="swiper-slide flej">
						            	<div class="swiper_child">
							            	<img class="" src="${images[2]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>09</h2>
							            		<h3>产品详情页</h3>
							            		<p>利用图文接合形式介绍一个具体产品</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
							            	<img class="" src="${images[5]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>10</h2>
							            		<h3>产品精修</h3>
							            		<p>通过后期制作精细修正产品图片</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
							            	<img class="" src="${images[1]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>11</h2>
							            		<h3>产品包装设计</h3>
							            		<p>通过产品准确定位，平面设计与结构设计的有机结合，进行外在的包装设计</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
											<img class="" src="${images[8]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>12</h2>
							            		<h3>VI(LOGO)</h3>
							            		<p>是徽标或者商标的外语缩写，是LOGOtype的缩写，起到对徽标拥有公司的识别和推广的作用，通过形象的徽标可以让消费者记住公司主体和品牌文化</p>
							            	</div>
						            	</div>
						            </div>
						            <div class="swiper-slide flej">
						            	<div class="swiper_child">
											<img class="" src="${images[4]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>13</h2>
							            		<h3>海报</h3>
							            		<p>上海的人通常把职业性的戏剧演出称为“海”，而把从事职业性戏剧的表演称为“下海”。作为剧目演出信息的具有宣传性的招徕顾客性的张贴物，也许是因为这个，人们便把它叫做“海报”</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
											<img class="" src="${images[10]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>14</h2>
							            		<h3>折页手册</h3>
							            		<p>折页就是将印张按照页码顺序折叠成书刊开本尺寸的书贴，或将大幅面印张按照要求折成一定规格幅面的工作过程。</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
											<img class="" src="${images[6]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>15</h2>
							            		<h3>请柬</h3>
							            		<p>请柬，又称为请帖、简帖。为了邀请客人参加某项活动而发的礼仪性书信</p>
							            	</div>
						            	</div>
						            	<div class="swiper_child">
											<img class="" src="${images[9]}"/>
							            	<div class="mask"></div>
							            	<div class="project_child">
							            		<h2>16</h2>
							            		<h3>网页</h3>
							            		<p>网页是构成网站的基本元素，是承载各种网站应用的平台。通俗地说，您的网站就是由网页组成的，如果您只有域名和虚拟主机而没有制作任何网页的话，您的客户仍旧无法访问您的网站。</p>
							            	</div>
						            	</div>
						            </div>
						        </div>
						    </div>

						    <div class="swiper-pagination"></div>
						    <div class="swiper-button-prev"></div>
				        	<div class="swiper-button-next"></div>
						 </div>   
			  		</section>
			  	</section>
			  	
			  	<section class="wrap_line">
				  	<section class="Presentation tc maodian">
				  		<div class="head_title">Business Presentation</div>
				  		<div class="slash"></div>
				  		<div class="head_cont">业务介绍</div>
				  		
				  		<div class="pre_up tl flex">
				  			<div class="pre_child">
				  				<h3>To</h3>
				  				<h3>undertake</h3>
				  				<div>
				  					<p>主营包月设计</p>
				  					<p>承接网页设计、H5设计、UI设计、广告设计、VI设计等</p>
				  					<div class="slash"></div>
				  				</div>
					  		</div>
					  		<div class="pre_cont">
				  				<img class="pre_img_p lazy" data-original="${images[15]}"/>
				  				<h4>HTML5 Design</h4>
				  				<div>
				  					<p>H5设计</p>
				  				</div>
				  			</div>
				  		</div>
				  		<div class="pre_down tl flej">
				  			<div class="pre_cont">
				  				<img class="pre_img_left lazy" data-original="${images[24]}"/>
				  				<h4>Visual Identity</h4>
				  				<div>
				  					<p>专业VI视觉设计</p>
				  				</div>
				  			</div>
				  			<div class="pre_cont">
				  				<img class="pre_img_center lazy" data-original="${images[23]}"/>
				  				<h4>User Interface</h4>
				  				<div>
				  					<p>用户界面</p>
				  				</div>
				  			</div>
				  			<div class="pre_cont">
				  				<img class="pre_img_right lazy" data-original="${images[25]}"/>
				  				<h4>Web Design</h4>
				  				<div>
				  					<p>网页设计</p>
				  				</div>
				  			</div>
				  		</div>
			  		</section>
			  	</section>
			  	
			  	<section class="wrap_line">
				  	<section class="Edge tc maodian">
				  		<div class="head_title">Competitive Edge</div>
				  		<div class="slash"></div>
				  		<div class="head_cont">竞争优势</div>
				  		
				  		<div class="edge_wrap flej">
				  			<div class="edge_child">
					  			<img class="lazy clip-path" data-original="${images[19]}"/>
					  			<div class="edge_cont">
					  				<h3>Marketing</h3>
					  				<div>
					  					<p>高效的营销团队</p>
					  					<p>为您提供迎合市场</p>
					  					<p>需求的设计方案</p>
					  				</div>
					  			</div>
					  		</div>
					  		<div class="edge_child">
					  			<img class="lazy clip-path" data-original="${images[12]}"/>
					  			<div class="edge_cont">
					  				<h3>Desigin</h3>
					  				<div>
					  					<p>高效的营销团队</p>
					  					<p>为您提供迎合市场</p>
					  					<p>需求的设计方案</p>
					  				</div>
					  			</div>
					  		</div>
					  		<div class="edge_child">
					  			<img class="lazy clip-path" data-original="${images[20]}"/>
					  			<div class="edge_cont">
					  				<h3>No Rest</h3>
					  				<div>
					  					<p>高效的营销团队</p>
					  					<p>为您提供迎合市场</p>
					  					<p>需求的设计方案</p>
					  				</div>
					  			</div>
					  		</div>
				  		</div>
			  		</section>
			  	</section>
			  	
			  	<footer>
			  		<section class="Us tc maodian">
				  		<div class="head_title">Contact Us</div>
				  		<div class="slash"></div>
				  		<div class="head_cont">联系我们</div>
				  		
				  		<div class="flej">
				  			<div class="us_left tl">
					  			<div class="left_up">
					  				<p>Hi</p>
						  			<p>are</p>
						  			<p>you</p>
						  			<p>ready?</p>
					  			</div>
					  			<div class="left_down">
					  				<p>准备好开始了吗？</p>
					  				<p>那就与我们取得联系吧！</p>
					  			</div>
					  		</div>
					  		<div class="us_center tl">
					  			<div class="left_s"></div>
					  			<h4 class="center_title">广州卓阳视觉设计有限公司</h4>
					  			<p>
									<a target=_blank href="http://apis.map.qq.com/uri/v1/streetview?&pano=26041055150602100058100&heading=65.9&pitch=-5.5">
										公司地址：佛山市南海区地铁金融城
									</a>
					  			</p>
					  			<p>客服微信：zyvision_</p>
					  			<p>联系电话：18825190729</p>
					  			<p>
					  				<a target=_blank href="javascript:;">
										合作邮箱：zyvision@163.com
									</a>
					  			</p>
					  			<div class="right_d"></div>
					  		</div>
					  		<div class="us_right">
					  			<div id="container"></div>
					  			<img class="ewm lazy" data-original="${images[14]}"/>
					  		</div>
				  		</div>
			  		</section>
			  	</footer>`;

		$("body").append(body_data);

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
		browserRedirect(); 
			
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
				if(!document.getElementById('rootsize')){
				document.getElementsByTagName("head")[0].appendChild(rootItem);
				rootItem.id='rootsize';
				}
				if(rootItem.styleSheet){
				rootItem.styleSheet.disabled||(rootItem.styleSheet.cssText=rootStyle)
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
 *页面逻辑
 */
	this.control = function(){
		//懒加载
		$("img.lazy").lazyload({
			effect: "fadeIn",
			threshold: 100
		});

		//轮播图
		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        slidesPerView: 1,
	        loop: true,
	        spaceBetween: 0
	   	});
		
		//header tab
		$(".head_tab").click(function(){
			var idx = $(this).index()-1;
			var maodian =  $(".maodian").eq(idx).offset().top;
			$("html,body").animate({scrollTop:maodian}, 500);
			$(this).addClass("active").siblings(".head_tab").removeClass("active");
			!!opactiy?opactiy: $("header").css("opacity");
			var opt = setInterval(function(){
				opactiy -= 0.1;
				opactiy<=0?clearInterval(opt): opactiy = opactiy;
				$("header").css({"opacity":opactiy});
				opactiy<=0?$("header").addClass("hidden"): $("header").removeClass("hidden");
			},35);
		});

		//滚动锚点
		$(document).on("scroll",function(){
			if(!ons){
				var top = $(this).scrollTop();
				if(top > scrolls){
					opactiy-=0.1;
					opactiy<=0?opactiy =0: opactiy = opactiy;
				}else{
					opactiy+=0.1;
					opactiy>=1?opactiy =1: opactiy = opactiy;
				}
				scrolls = top;
				$("header").css({"opacity":opactiy});
				opactiy<=0?$("header").addClass("hidden"): $("header").removeClass("hidden");
			}
		});

		//轮播contral
		$(".swiper_child").hover(function(){
			if(!!$(this).hasClass("hover")){
				$(this).removeClass("hover").find(".mask").removeClass("hover");
			}else{
				$(".swiper_child").removeClass("hover");
				$(this).addClass("hover").find(".mask").addClass("hover");
			}
		});

		//webGl转动
		var renderer = null,
		scene = null, 
		camera = null,
		cube = null,
		animating = true;
		onLoad();
		function onLoad(){
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

		function run(){
			renderer.render( scene, camera );
			if (animating){
				cube.rotation.x -= 0.02;
				cube.rotation.y -= 0.02;
			}
	    	requestAnimationFrame(run);	
		}
	
		function addMouseHandler(){
			var dom = renderer.domElement;
			dom.addEventListener( 'mouseup', onMouseUp, false);
		}
		
		function onMouseUp(event){
		    event.preventDefault();
		    animating = !animating;
		}
		
	}
}