(self.webpackChunkCnblogs_Theme_SimpleMemory=self.webpackChunkCnblogs_Theme_SimpleMemory||[]).push([[3258],{7987:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return d}});var o=e(9004),n=e.n(o);var s=e(8601),a=e(1242),r=e(2270),c=e(9233);function l(t,i){"function"==typeof t.__config.hooks.dayNightControl&&t.__config.hooks.dayNightControl(t,i)}function d(t){!function(t){const i=$("#footer"),e=i.text();let o=' <div class="footer-image" id="footerStyle1" style="display:none"></div> <footer id="footerStyle2" style="display:none"> <footer-background> <figure class="clouds"></figure> <figure class="background"></figure> <figure class="foreground"></figure> </footer-background> </footer> <div class="footer-box"> <div class="footer-text" style="display:##textShow##"> [ ##textLeft## <span class="footer-text-icon"> <span class="iconfont ##iconFont##" style="color:##iconColor##;font-size:##iconSize##"></span> </span> ##textRight## ] </div> <div> <span id="blogRunTimeSpan"></span> <span class="my-face">ღゝ◡╹)ノ♡</span> </div> <div id="linksHtml" style="display:##linkShow##">##linksHtml##</div> <div id="cnzzInfo" style="display:none"> <div id="cnzzProtocol" style="display:none"> <span class="id_cnzz_stat_icon" id="cnzz_stat_icon_##cnzzId##"></span> <script src="https://v1.cnzz.com/z_stat.php?id=##cnzzId##&online=1&show=line"><\/script> </div> ##cnzzHtml## </div> <div>##footerText##</div> </div>',n=t.__config.footer;o=t.__tools.tempReplacement(o,"footerText",e),(()=>{if(n.text.left||n.text.right){let i=[["textLeft",n.text.left],["iconFont",n.text.iconFont.icon],["iconColor",n.text.iconFont.color],["iconSize",n.text.iconFont.fontSize],["textRight",n.text.right],["textShow","block"]];o=t.__tools.batchTempReplacement(o,i)}else o=t.__tools.tempReplacement(o,"textShow","none")})(),(()=>{if(t.__config.links.footer.length>0){let i="友情链接：";for(let e=0;e<t.__config.links.footer.length;e++)i+='<a href="'+t.__config.links.footer[e][1]+'" target="_blank">'+t.__config.links.footer[e][0]+"</a>",e<t.__config.links.footer.length-1&&(i+='<span style="margin: 0 3px;">/</span>');o=t.__tools.batchTempReplacement(o,[["linksHtml",i],["linkShow","block"]])}else o=t.__tools.tempReplacement(o,"linkShow","none")})(),t.__config.cnzz&&(o=t.__tools.tempReplacement(o,"cnzzId",t.__config.cnzz)),i.html(o),(()=>{switch(parseInt(n.style)){case 1:$("#footer").addClass("footer-t1").find("#footerStyle1").show().css("background","url('"+s+"')  no-repeat 50%");break;case 2:default:$("#footer .footer-text").css({"padding-bottom":"0","border-bottom":"none","margin-bottom":"0"});let t=$("#footerStyle2");t.show().find(".clouds").css("background","url('"+r+"')  repeat-x"),t.find(".background").css("background","url('"+a+"')  repeat-x"),t.find(".foreground").css("background","url('"+c+"')  repeat-x")}})(),window.setInterval((()=>{let i=t.__tools.getRunDate(t.__config.info.startDate?t.__config.info.startDate:"2021-01-01");$("#blogRunTimeSpan").text("This blog has running : "+i.daysold+" d "+i.hrsold+" h "+i.minsold+" m "+i.seconds+" s")}),500),t.__config.cnzz&&(t.__timeIds.cnzzTId=window.setInterval((()=>{let i=$(".id_cnzz_stat_icon a");if(i.length>0){let e=[],o=$(i[1]).text().split("|");$.each(o,(t=>{let i=$.trim(o[t]);""!==i&&(i=i.replace("今日","Today").replace("昨日","Yesterday").replace("[",":").replace("]",""),e.push(i))})),e.push($(i[2]).text().replace("当前在线","Online").replace("[",":").replace("]","")),$("#cnzzInfo").text(e.join(" | ")).show(),t.__tools.clearIntervalTimeId(t.__timeIds.cnzzTId)}}),1e3))}(t),function(t){$("#blog-news").prepend('<div id="rightMenu"> <div id="rtaDirectory" class="rightMenuItem" style="display:none"> <span class="rightMenuSpan rtaDirectorySpan"> 文章目录 </span> <i banmv class="iconfont icon-mulu"></i> </div> <div id="rightMenuHome" class="rightMenuItem" style="display:none" clickflg="true"> <span class="rightMenuSpan"> 访问主页 </span> <i class="iconfont icon-home"></i> </div> <span class="hideRightMenu"> <div id="rightDiggit" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightDiggitSpan"></span> <i class="iconfont icon-zan1"></i> </div> <div id="rightBuryit" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightBuryitSpan"></span> <i class="iconfont icon-buzan"></i> </div> <div id="rightDashang" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightDanshanSpan"> <div class="ds-pay"> <div class="ds-alipay" style="display:none"> <img \\> <span>Alipay</span> </div> <div class="ds-wecat" style="display:none"> <img \\> <span>WeChat</span> </div> </div> </span> <i class="iconfont icon-dashang2"></i> </div> <div id="rightGzh" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightGzhSpan"> <div class="ds-pay"> <div class="ds-gzh"> <img/><span>qrCode</span> </div> </div> </span> <i class="iconfont icon-erweima4"></i> </div> <div id="attention" class="rightMenuItem" clickflg="true"> <span class="rightMenuSpan attentionSpan"> 已关注 </span> <i class="iconfont icon-dianzan1"></i> </div> </span> <div id="rightMenuSite" class="rightMenuItem" clickflg="true"> <span class="rightMenuSpan"> 点击开启 </span> <i banmv class="iconfont icon-shezhi3"></i> </div> <div id="toUpDown" class="rightMenuItem" data="up"> <span class="rightMenuSpan toUpDownSpan"> 返回顶部 </span> <div id="toUpDownI"> <i banmv class="iconfont icon-zhiding"></i> </div> </div> </div>');const i=$("#rightMenu");i.find("i").on({mouseover:function(){void 0===$(this).attr("banmv")&&$(this).rotate({animateTo:-60,duration:250,callback:function(){$(this).rotate({animateTo:60,duration:250,callback:function(){$(this).rotate({animateTo:-30,duration:150,callback:function(){$(this).rotate({animateTo:30,duration:150,callback:function(){$(this).rotate({animateTo:0,duration:100})}})}})}})}})}}),i.find(".rightMenuItem").on({mouseover:function(){$(this).find(".rightMenuSpan").stop().fadeIn(300)},mouseout:function(){$(this).find(".rightMenuSpan").stop().fadeOut(300)}}),$("#toUpDown").click((function(){if("down"===$(this).attr("data")){let i;i=t.__config.rtMenu.downScrollDom&&$(t.__config.rtMenu.downScrollDom).length>0?$(t.__config.rtMenu.downScrollDom).offset().top+10:$(document).height()-$(window).height(),t.__tools.actScroll(i,900)}else t.__tools.actScroll(0,900)})),t.__event.scroll.handle.push((()=>{let i=$("#toUpDown"),e=$("#toUpDownI"),o=$(".toUpDownSpan");t.__event.scroll.docScroll=$(document).scrollTop(),t.__event.scroll.homeScroll=$("#home").offset().top-40,t.__event.scroll.homeScroll<=t.__event.scroll.docScroll?(e.rotate({animateTo:0}),i.attr("data","up"),o.text("返回顶部")):(e.rotate({animateTo:-180}),i.attr("data","down"),o.text("跳至底部"))})),(()=>{let t=0;setInterval((function(){t+=7,$("#rightMenuSite i").rotate(t)}),30),$("#rightMenuSite").click((function(){"true"===$(this).attr("clickflg")?($("#rightMenuSite .rightMenuSpan").text("点击关闭"),$(this).attr("clickflg","false")):($("#rightMenuSite .rightMenuSpan").text("点击开启"),$(this).attr("clickflg","true")),$("#rightMenu .hideRightMenu").slideToggle(350)}))})(),t.__timeIds.followTId=window.setInterval((()=>{let i=$("#p_b_follow");if(i.length>0){let e=""!==i.text()?$("#p_b_follow a").attr("onclick"):"";if(e&&!!e.indexOf("unfollow")>0){let t=$("#attention");t.attr("onclick",e.replace("unfollow","follow")).attr("clickflg","false"),t.find(".rightMenuSpan").text("关注"),t.find("i").removeClass("icon-dianzan1").addClass("icon-dianzan")}t.__tools.clearIntervalTimeId(t.__timeIds.followTId)}}),1e3),t.__config.rtMenu.qrCode&&$("#rightGzh").show().find(".ds-gzh img").attr("src",t.__config.rtMenu.qrCode),(t.__config.rtMenu.reward.alipay||t.__config.rtMenu.reward.wechatpay)&&($("#rightDashang").show(),t.__config.rtMenu.reward.alipay&&$("#rightDashang .ds-alipay").show().find("img").attr("src",t.__config.rtMenu.reward.alipay),t.__config.rtMenu.reward.wechatpay&&$("#rightDashang .ds-wecat").show().find("img").attr("src",t.__config.rtMenu.reward.wechatpay)),(()=>{function i(t,i,e){"false"===t.attr("clickflg")&&(t.attr("clickflg","true"),i.text("提交中."),setTimeout((()=>{i.text("提交中..")}),300),setTimeout((()=>{i.text("提交中...")}),600),setTimeout((()=>{i.text("更新中.")}),900),setTimeout((()=>{i.text("更新中..")}),1200),setTimeout((()=>{i.text("更新中...")}),1500),setTimeout((()=>{i.text(e),t.attr("clickflg","false")}),1800))}t.__timeIds.diggitTId=window.setInterval((()=>{let e=$(".diggit");if(e.length>0){e.prepend('<i class="iconfont icon-zan1"></i>');let o=$("#rightDiggit"),n=o.find(".rightMenuSpan");o.attr("onclick",e.attr("onclick")),n.text($("#digg_count").text()),o.show().click((function(){i($(this),n,$("#digg_count").text())})),t.__tools.clearIntervalTimeId(t.__timeIds.diggitTId)}}),1e3),t.__timeIds.buryitTId=window.setInterval((()=>{let e=$(".buryit");if(e.length>0){e.prepend('<i class="iconfont icon-buzan"></i>');let o=$("#rightBuryit"),n=o.find(".rightMenuSpan");o.attr("onclick",e.attr("onclick")),n.text($("#bury_count").text()),o.show().click((function(){i($(this),n,$("#bury_count").text())})),t.__tools.clearIntervalTimeId(t.__timeIds.buryitTId)}}),1e3)})(),(()=>{if("home"!==t.__status.pageType){let t=$("#rtaDirectory");t.show(),t.click((function(){let t=$("#articleDirectory");t.length&&(t.is(":hidden")?t.fadeIn(300):t.fadeOut(300))}))}})(),(()=>{if("home"!==t.__status.pageType){let i=$("#rightMenuHome");i.show(),i.click((function(){window.location.href=t.__status.homeUrl}))}})()}(t),function(t){if(!t.__config.switchDayNight.enable)return!0;let i,o=parseInt((new Date).getHours()),n="cnblogs_config_isNight";function s(){t.__status.dayNightCssHref?$("head").append('<link type="text/css" id="baseDarkCss" rel="stylesheet" href="'+t.__status.dayNightCssHref+'">'):(e.e(1480).then(e.bind(e,5438)),setTimeout((function(){let i=$("head link");for(let e=i.length-1;e>0;e--){let o=$(i[e]),n=o.attr("href");if(/^.*\/dayNight\.[a-z0-9]{8}\.css$/.test(n)){t.__status.dayNightCssHref=n,o.attr("id","baseDarkCss");break}}}),500))}t.__status.dayNightCssHref="",(()=>{switch(t.__tools.getCookie(n)){case"day":i="daySwitch";break;case"night":i="";break;default:i=t.__config.switchDayNight.auto.enable?o>=t.__config.switchDayNight.auto.nightHour?"":o>=t.__config.switchDayNight.auto.dayHour?"daySwitch":"":"daySwitch"}})(),t.__config.switchDayNight.nightMode&&(i=""),$("body").prepend(t.__tools.tempReplacement('<div id="dayNightSwitch" class="generalWrapper"> <div class="onOff ##daySwitch##"> <div class="star star1"></div> <div class="star star2"></div> <div class="star star3"></div> <div class="star star4"></div> <div class="star star5"></div> <div class="star sky"></div> <div class="sunMoon"> <div class="crater crater1"></div> <div class="crater crater2"></div> <div class="crater crater3"></div> <div class="cloud part1"></div> <div class="cloud part2"></div> </div> </div> </div>',"daySwitch",i)),i||s(),$("#dayNightSwitch .onOff").click((function(){$(this).hasClass("daySwitch")?(t.__tools.setCookie(n,"night",14400),$(this).removeClass("daySwitch"),s(),l(t,"night")):(t.__tools.setCookie(n,"day",14400),$(this).addClass("daySwitch"),$("head link#baseDarkCss").remove(),l(t,"day"))}))}(t),function(t){$("#blog-news").prepend('<div id="progressBar"></div>');let i=n()&&new window.ToProgress(t.__config.progressBar,"#progressBar");t.__event.scroll.handle.push((()=>{i.setProgress(t.__tools.getScrollPercent())}))}(t),t.__config.animate.background.enable&&e.e(8265).then(e.t.bind(e,5478,23)).then((i=>{new Ribbons(t.__config.animate.background.options)})),t.__config.animate.backgroundMouse.enable&&e.e(8132).then(e.bind(e,3003)).then((i=>{(0,i.default)(t)})),t.__config.animate.mouse.enable&&Promise.all([e.e(1606),e.e(3449)]).then(e.bind(e,2352)).then((i=>{(0,i.default)(t)})),function(t){if(t.__config.info.blogIcon){let i=$('link[rel="shortcut icon"]');if(i.length)i.attr("href",t.__config.info.blogIcon);else{let i=document.createElement("link");i.rel="shortcut icon",i.href=t.__config.info.blogIcon,document.getElementsByTagName("head")[0].appendChild(i)}}}(t),function(t){let i,e,o,n=document.title,s=t.__config.title.onblur,a=t.__config.title.onblurTime,r=t.__config.title.focus,c=t.__config.title.focusTime;void 0!==document.hidden?(i="hidden",e="visibilitychange"):void 0!==document.mozHidden?(i="mozHidden",e="mozvisibilitychange"):void 0!==document.webkitHidden&&(i="webkitHidden",e="webkitvisibilitychange");let l=()=>{o&&clearTimeout(o),document[i]?a>=0&&(o=setTimeout((()=>{document.title=s+" - "+n.split(" - ")[0]}),a)):c>=0?(document.title=r,o=setTimeout((()=>{document.title=n}),c)):document.title=n};void 0===document.addEventListener&&void 0===document[i]||document.addEventListener(e,l,!1)}(t),function(t){window.console.log.apply(console,["\n %c %c %c CnblogsTheme-GitHub %c  %c github.com/BNDong/Cnblogs-Theme-SimpleMemory %c \n\n","background: #fadfa3; padding:5px 0;","background: #fadfa3; padding:5px 0;","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;","background: #FCEDC9; color:#030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"]),window.console.log.apply(console,["\n %c %c %c CnblogsTheme-Gitee %c  %c gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory %c \n\n","background: #fadfa3; padding:5px 0;","background: #fadfa3; padding:5px 0;","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;","background: #FCEDC9; color:#030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"]),t.__config.consoleList.length&&$.each(t.__config.consoleList,(function(i){let e=t.__config.consoleList[i];console.log("\n %c "+e[0]+" %c "+e[1]+" \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; color:#000;padding:5px 0;")}))}(t)}},9004:function(){var t,i;t=window,i=function(){var t,i=document.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==i.style[t])return e[t]}(),t.ToProgress=function(t,i){if(this.progress=0,this.options={id:"top-progress-bar",color:"#F44336",height:"2px",duration:.2},t&&"object"==typeof t)for(var e in t)this.options[e]=t[e];if(this.options.opacityDuration=3*this.options.duration,this.progressBar=document.createElement("div"),this.progressBar.id=this.options.id,this.progressBar.setCSS=function(t){for(var i in t)this.style[i]=t[i]},this.progressBar.setCSS({position:i?"relative":"fixed",top:"0",left:"0",right:"0","background-color":this.options.color,height:this.options.height,width:"0%",transition:"width "+this.options.duration+"s, opacity "+this.options.opacityDuration+"s","-moz-transition":"width "+this.options.duration+"s, opacity "+this.options.opacityDuration+"s","-webkit-transition":"width "+this.options.duration+"s, opacity "+this.options.opacityDuration+"s"}),i){var o=document.querySelector(i);o&&(o.hasChildNodes()?o.insertBefore(this.progressBar,o.firstChild):o.appendChild(this.progressBar))}else document.body.appendChild(this.progressBar)},ToProgress.prototype.transit=function(){this.progressBar.style.width=this.progress+"%"},ToProgress.prototype.getProgress=function(){return this.progress},ToProgress.prototype.setProgress=function(t,i){this.show(),this.progress=t>100?100:0>t?0:t,this.transit(),i&&i()},ToProgress.prototype.increase=function(t,i){this.show(),this.setProgress(this.progress+t,i)},ToProgress.prototype.decrease=function(t,i){this.show(),this.setProgress(this.progress-t,i)},ToProgress.prototype.finish=function(t){var e=this;this.setProgress(100,t),this.hide(),i&&this.progressBar.addEventListener(i,(function(t){e.reset(),e.progressBar.removeEventListener(t.type,arguments.callee)}))},ToProgress.prototype.reset=function(t){this.progress=0,this.transit(),t&&t()},ToProgress.prototype.hide=function(){this.progressBar.style.opacity="0"},ToProgress.prototype.show=function(){this.progressBar.style.opacity="1"}},1242:function(t,i,e){"use strict";t.exports=e.p+"images/af2701cbb4196bedb254.webp"},2270:function(t,i,e){"use strict";t.exports=e.p+"images/0ff63a3006d8a2821be2.webp"},8601:function(t,i,e){"use strict";t.exports=e.p+"images/80dd61a4addbd2f96448.webp"},9233:function(t,i,e){"use strict";t.exports=e.p+"images/30b4f3f93333bef2cf56.webp"}}]);