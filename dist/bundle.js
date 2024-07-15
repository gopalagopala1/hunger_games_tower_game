!function(t){var e={};function i(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var a={};i.r(a),i.d(a,"getCurrentTime",(function(){return s})),i.d(a,"random",(function(){return r})),i.d(a,"randomPositiveNegative",(function(){return n})),i.d(a,"isFunction",(function(){return o})),i.d(a,"isTouchDevice",(function(){return h})),i.d(a,"requestAnimationFrameTool",(function(){return c})),i.d(a,"arraySwap",(function(){return d}));const s=()=>performance.now(),r=(t,e)=>Math.random()*(e-t)+t,n=()=>Math.random()<.5?-1:1,o=t=>"function"==typeof t,h=()=>"ontouchstart"in window||window.navigator.msMaxTouchPoints,c=(()=>{let t=1e3/60;return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||(e=>{window.setTimeout(()=>{const i=s();e(i);const a=s();t=1e3/60-(a-i)},t)})})(),d=(t,e,i)=>{const a=t[i];t[i]=t[e],t[e]=a};var u={linear:function(t,e,i,a){return i*t/a+e},easeIn:function(t,e,i,a){return i*(t/=a)*t+e},easeOut:function(t,e,i,a){return-i*(t/=a)*(t-2)+e},easeInOut:function(t,e,i,a){return(t/=a/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}};const{requestAnimationFrameTool:l,isFunction:g,isTouchDevice:m}=a;class b{constructor(t={}){if(!document.createElement("canvas").getContext)return void window.alert("HTML5 Canvas is not supported in your browser.");const{canvasId:e,debug:i,width:s,height:r,highResolution:n,loadLimit:o,soundOn:h}=t;let c=s||window.innerWidth,d=r||window.innerHeight;this.canvas=document.getElementById(e),n&&(this.canvas.style.width=c+"px",this.canvas.style.height=d+"px",c*=2,d*=2),this.highResolution=n,this.canvas.width=c,this.canvas.height=d,this.width=this.canvas.width,this.height=this.canvas.height,this.calWidth=.5*this.width,this.calHeight=.5*this.height,this.debug=!!i,this.ctx=this.canvas.getContext("2d"),this.defaultLayer="default",this.layerArr=[this.defaultLayer],this.instancesObj={},this.instancesObj[this.defaultLayer]=[],this.instancesReactionArr=[],this.utils=a,this.customVariable={};const u=this;this.isTouchDevice=m(),this.debugArr=[],this.assetsObj={image:{},audio:{}},this.assetsCount={image:0,audio:0},this.assetsErrorQueue=[],this.assetsErrorCount=0,this.loadLimit=o||3,this.soundOn=!!h,this.fps=0,this.lastTime=0,this.lastPausedAt=0,this.pausedTime=0,this.paused=!1,this.timeMovement={},this.timeMovementStartArr=[],this.timeMovementFinishArr=[],this.keyUpListeners={},this.keyDownListeners={},this.keyPressListeners={},this.startAnimate=()=>{},this.paintUnderInstance=()=>{},this.paintAboveInstance=()=>{},this.endAnimate=()=>{},this.touchStartListener=()=>{},this.touchEndListener=()=>{},this.touchMoveListener=()=>{},document.addEventListener("keyup",t=>{u.keyListener(t,"keyup")},!1),document.addEventListener("keydown",t=>{u.keyListener(t,"keydown")},!1),document.addEventListener("keypress",t=>{u.keyListener(t,"keypress")},!1),this.isTouchDevice?(document.addEventListener("touchstart",t=>{u.touchStartListener(t)},!1),document.addEventListener("touchend",t=>{u.touchEndListener(t)},!1),document.addEventListener("touchmove",t=>{u.touchMoveListener(t)},!1)):(document.addEventListener("mousedown",t=>{u.touchStartListener(t)},!1),document.addEventListener("mouseup",t=>{u.touchEndListener(t)},!1),document.addEventListener("mousemove",t=>{u.touchMoveListener(t)},!1))}triggerReaction(t,e){let i=t,a=e;this.highResolution&&(i*=2,a*=2),this.instancesReactionArr.forEach(t=>{t.visible&&i>=t.x&&i<=t.x+t.width&&a>=t.y&&a<=t.y+t.height&&t.trigger(t,this)})}addAudio(t,e,i=0){if(!this.soundOn)return;i||(this.assetsCount.audio+=1);const a=new window.Audio;a.src=e,this.assetsObj.audio[t]=a,a.addEventListener("error",()=>{this.assetsErrorQueue.push({name:t,src:e,retry:i+1,type:"audio"})},!1),a.load()}getAudio(t){return this.assetsObj.audio[t]}playAudio(t,e=!1){if(!this.soundOn)return;const i=this.getAudio(t);if(i){if(i.play(),!e)return;i.addEventListener("ended",()=>{i.currentTime=0,i.play()},!1)}}pauseAudio(t){const e=this.getAudio(t);e&&e.pause()}setVariable(t,e){this.customVariable[t]=e}getVariable(t,e=null){const i=this.customVariable[t];return i||(null!==e?(this.setVariable(t,e),e):null)}addImg(t,e,i=0){i||(this.assetsCount.image+=1);const a=new window.Image;a.src=e,a.onload=()=>{this.assetsObj.image[t]=a},a.onerror=()=>{this.assetsErrorQueue.push({name:t,src:e,retry:i+1,type:"image"})}}getImg(t){return this.assetsObj.image[t]}animate(t){const e=t-this.pausedTime,i=this;this.paused?setTimeout(()=>{this.animate.call(i,e)},100):(this.tick(e),this.clean(),this.startAnimate(this,e),this.paintUnderInstance(this),this.updateInstances(e),this.paintInstances(),this.paintAboveInstance(),this.endAnimate(this,e),this.tickTimeMovement(),this.debug&&this.showFps(),this.debug&&this.drawDebug(),l(t=>{this.animate.call(i,t)}))}showFps(){this.ctx.save(),this.ctx.fillStyle="red",this.ctx.font=(this.highResolution?32:16)+"px Arial",this.ctx.fillText("FPS: "+this.fps.toFixed(),5,this.highResolution?40:20),this.ctx.restore()}debugLineX(t){this.debugArr.push({type:"lineX",y:t})}debugLineY(t){this.debugArr.push({type:"lineY",x:t})}debugDot(t,e){this.debugArr.push({type:"dot",x:t,y:e})}drawDebug(){this.debugArr.forEach(t=>{const{type:e,x:i,y:a}=t;switch(e){case"dot":this.drawDebugDot(i,a);break;case"lineX":this.drawDebugLine(null,a);break;case"lineY":this.drawDebugLine(i,null)}}),this.instancesReactionArr.forEach(t=>{t.visible&&(this.ctx.strokeStyle="red",this.ctx.beginPath(),this.ctx.rect(t.x,t.y,t.width,t.height),this.ctx.stroke())})}drawDebugLine(t,e){let i=[0,e],a=[this.width,e];t&&(i=[t,0],a=[t,this.height]),this.ctx.save(),this.ctx.strokeStyle="red",this.ctx.beginPath(),this.ctx.moveTo(...i),this.ctx.lineTo(...a),this.ctx.stroke(),this.ctx.restore()}drawDebugDot(t,e){this.ctx.save(),this.ctx.fillStyle="red",this.ctx.beginPath(),this.ctx.arc(t,e,2,0,2*Math.PI,!0),this.ctx.fill(),this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(t,e,1,0,2*Math.PI,!0),this.ctx.fill(),this.ctx.restore()}tick(t){this.updateFps(t),this.lastTime=t}updateFps(t){0===this.lastTime?this.fps=60:this.fps=1e3/(t-this.lastTime)}pixelsPerFrame(t){return t/this.fps}tickTimeMovement(){this.timeMovementStartArr.forEach(t=>{this.timeMovement[t].processing=!0}),this.timeMovementStartArr=[],this.timeMovementFinishArr.forEach(t=>{delete this.timeMovement[t]}),this.timeMovementFinishArr=[]}getTimeMovement(t,e,i,a={}){const{before:s,after:r}=a,n=u[a.easing||"linear"],o=a.name||"default",h=this.timeMovement[t];if(!h)return;h.processing||(this.timeMovementStartArr.push(t),h.store[o]=[],e.forEach(t=>{h.store[o].push({start:parseFloat(t[0]),end:parseFloat(t[1])})}),s&&s());const c=(t=!1)=>{const{duration:e}=h;let a=e;if(!t){const t=this.utils.getCurrentTime(),{startTime:e}=h;a=t-e}const s=h.store[o].map(t=>n(a,t.start,t.end-t.start,e));i.apply(this,s)};this.checkTimeMovement(t)?c():(this.timeMovementFinishArr.push(t),c(!0),r&&r())}checkTimeMovement(t){const e=this.timeMovement[t]||{};return this.utils.getCurrentTime()<=e.endTime}setTimeMovement(t,e){const i=this.utils.getCurrentTime();this.timeMovement[t]={startTime:i,endTime:i+e,duration:e,store:{}}}clean(){this.ctx.clearRect(0,0,this.width,this.height),this.debugArr=[]}addLayer(t){this.layerArr.push(t),this.instancesObj[t]=[]}removeLayer(t){this.layerArr=this.layerArr.filter(e=>e!==t),delete this.instancesObj[t]}swapLayer(t,e){this.utils.arraySwap(this.layerArr,t,e)}addInstance(t,e=this.defaultLayer){this.instancesObj[e].push(t),t.trigger&&this.instancesReactionArr.push(t)}getInstance(t,e=this.defaultLayer){return this.instancesObj[e].filter(e=>e.name===t)[0]}removeInstance(t,e=this.defaultLayer){const i=this.getInstance(t,e);i&&(this.instancesObj[e]=this.instancesObj[e].filter(e=>e.name!==t),i.trigger&&(this.instancesReactionArr=this.instancesReactionArr.filter(e=>e.name!==t)))}updateInstances(t){this.layerArr.forEach(e=>{this.instancesObj[e].forEach(e=>{e.update&&e.update(this,t)})})}paintInstances(){this.layerArr.forEach(t=>{this.instancesObj[t].forEach(t=>{t.paint&&t.paint(this)})})}togglePaused(){const t=this.utils.getCurrentTime();this.paused=!this.paused,this.paused?this.lastPausedAt=t:this.pausedTime+=t-this.lastPausedAt}addKeyUpListener(t,e){this.keyUpListeners[t]=e}addKeyDownListener(t,e){this.keyDownListeners[t]=e}addKeyPressListener(t,e){this.keyPressListeners[t]=e}findKeyListener(t,e){return"keyup"===e?this.keyUpListeners[t]:"keydown"===e?this.keyDownListeners[t]:this.keyPressListeners[t]}keyListener(t,e){let i;switch(t.keyCode){case 13:i="enter";break;case 32:i="space";break;case 37:i="leftArrow";break;case 39:i="rightArrow";break;case 38:i="upArrow";break;case 40:i="downArrow";break;default:i=t.keyCode}const a=this.findKeyListener(i,e);a&&a()}load(t,e){const i=setInterval(()=>{const a=this.assetsCount.image+this.assetsCount.audio,s=Object.keys(this.assetsObj.image).length+Object.keys(this.assetsObj.audio).length;e&&g(e)&&e({success:s,failed:this.assetsErrorCount,total:a}),this.assetsErrorQueue.length>0&&(this.assetsErrorQueue.forEach(t=>{const{retry:e,name:i,src:a,type:s}=t;e>=this.loadLimit?this.assetsErrorCount+=1:"image"===s?this.addImg(i,a,e):this.addAudio(i,a,e)}),this.assetsErrorQueue=[]),s===a&&(t&&g(t)?t():this.init(),clearInterval(i))},200)}init(){const t=this;l(e=>{this.animate.call(t,e)})}}class f{constructor(t={}){const{name:e,painter:i,action:a,trigger:s}=t;this.name=e,this.x=0,this.y=0,this.width=0,this.height=0,this.ax=0,this.ay=0,this.vx=0,this.vy=0,this.visible=!0,this.painter=i||null,this.action=a||null,this.trigger=s||null,this.ready=!1}paint(t){null!==this.painter&&this.visible&&this.painter(this,t)}update(t,e){null!==this.action&&this.action(this,t,e)}updateWidth(t){this.width=t,this.calWidth=t/2}updateHeight(t){this.height=t,this.calHeight=t/2}}var O="LAND",T="OUT",p=function(t){return t.checkTimeMovement("MOVE_DOWN_MOVEMENT")},v=function(t,e){var i=e?e.pixelsPerFrame:t.pixelsPerFrame.bind(t),a=t.getVariable("SUCCESS_COUNT"),s=2*t.getVariable("BLOCK_HEIGHT");return i(a<=4?1.25*s:s)},y=function(t,e){var i,a=t.getVariable("SUCCESS_COUNT"),s=t.getVariable("GAME_SCORE"),r=t.getVariable("GAME_USER_OPTION").hookSpeed;if(r)return r(a,s);switch(!0){case a<1:i=0;break;case a<10:i=1;break;case a<20:i=.8;break;case a<30:i=.7;break;default:i=.74}return t.getVariable("HARD_MODE")&&(i=1.1),Math.sin(e/(200/i))},E=function(t,e){var i=t.getVariable("SUCCESS_COUNT"),a=t.getVariable("GAME_SCORE"),s=t.getVariable("GAME_USER_OPTION").landBlockSpeed;if(s)return s(i,a);var r,n=t.width;switch(!0){case i<5:r=0;break;case i<13:r=.001;break;case i<23:r=.002;break;default:r=.003}return Math.cos(e/200)*r*n},w=function(t){return t.checkTimeMovement("HOOK_DOWN_MOVEMENT")?"HOOK_DOWN":t.checkTimeMovement("HOOK_UP_MOVEMENT")?"HOOK_UP":"HOOK_NORMAL"},_=function(t){if(t.getVariable("GAME_START_NOW")&&!(t.debug&&t.paused||"HOOK_NORMAL"!==w(t))){t.removeInstance("tutorial"),t.removeInstance("tutorial-arrow");var e=t.getInstance("block_".concat(t.getVariable("BLOCK_COUNT")));e&&"SWING"===e.status&&(t.setTimeMovement("HOOK_UP_MOVEMENT",500),e.status="BEFORE_DROP")}},x=function(t){var e=t.getVariable("GAME_USER_OPTION").setGameFailed,i=t.getVariable("FAILED_COUNT")+1;t.setVariable("FAILED_COUNT",i),t.setVariable("PERFECT_COUNT",0),e&&e(i),i>=3&&(t.pauseAudio("bgm"),t.playAudio("game-over"),t.setVariable("GAME_START_NOW",!1))},A=function(t,e){var i=t.getVariable("GAME_USER_OPTION"),a=i.setGameScore,s=i.successScore,r=i.perfectScore,n=t.getVariable("PERFECT_COUNT",0),o=e?n+1:0,h=t.getVariable("GAME_SCORE")+(s||25)+(r||25)*o;t.setVariable("GAME_SCORE",h),t.setVariable("PERFECT_COUNT",o),a&&a(h)},M=function(t,e){var i=e.string,a=e.size,s=e.x,r=e.y,n=e.textAlign,o=e.fontName,h=void 0===o?"wenxue":o,c=e.fontWeight,d=void 0===c?"normal":c,u=t.ctx,l=a,g=.1*l;u.save(),u.beginPath();var m=u.createLinearGradient(0,0,0,r);m.addColorStop(0,"#FAD961"),m.addColorStop(1,"#F76B1C"),u.fillStyle=m,u.lineWidth=g,u.strokeStyle="#FFF",u.textAlign=n||"center",u.font="".concat(d," ").concat(l,"px ").concat(h),u.strokeText(i,s,r),u.fillText(i,s,r),u.restore()},I=function(t){!function(t){var e=t.getImg("background"),i=e.width,a=e.height*t.width/i,s=t.getVariable("BACKGROUND_IMG_OFFSET_HEIGHT",t.height-a);s>t.height||(t.getTimeMovement("MOVE_DOWN_MOVEMENT",[[s,s+v(t,{pixelsPerFrame:function(t){return t/2}})]],(function(t){s=t}),{name:"background"}),t.getTimeMovement("BG_INIT_MOVEMENT",[[s,s+a/4]],(function(t){s=t})),t.setVariable("BACKGROUND_IMG_OFFSET_HEIGHT",s),t.setVariable("LINE_INITIAL_OFFSET",t.height-.394*a),t.ctx.drawImage(e,0,s,t.width,a))}(t)},L=function(t,e,i){var a=t;a.ready||(a.y=e.getVariable("LINE_INITIAL_OFFSET"),a.ready=!0,a.collisionX=e.width-e.getVariable("BLOCK_WIDTH")),e.getTimeMovement("MOVE_DOWN_MOVEMENT",[[t.y,t.y+v(e,{pixelsPerFrame:function(t){return t/2}})]],(function(e){t.y=e}),{name:"line"});var s=E(e,i);t.x+=s,t.collisionX+=s},V=function(t,e){var i=e.ctx;e.debug&&(i.save(),i.beginPath(),i.strokeStyle="red",i.moveTo(t.x,t.y),i.lineTo(t.collisionX,t.y),i.lineWidth=1,i.stroke(),i.restore())},k=function(t,e,i){var a=e.getVariable("ROPE_HEIGHT");t.ready||(t.x=e.width/2,t.y=-1.5*a,t.ready=!0),e.getTimeMovement("HOOK_UP_MOVEMENT",[[t.y,t.y-a]],(function(e){t.y=e}),{after:function(){t.y=-1.5*a}}),e.getTimeMovement("HOOK_DOWN_MOVEMENT",[[t.y,t.y+a]],(function(e){t.y=e}),{name:"hook"});var s=e.getVariable("INITIAL_ANGLE");t.angle=s*y(e,i),t.weightX=t.x+Math.sin(t.angle)*a,t.weightY=t.y+Math.cos(t.angle)*a},N=function(t,e){var i=e.ctx,a=e.getVariable("ROPE_HEIGHT"),s=.1*a,r=e.getImg("hook");i.save(),i.translate(t.x,t.y),i.rotate(2*Math.PI-t.angle),i.translate(-t.x,-t.y),e.ctx.drawImage(r,t.x-s/2,t.y,s,a+5),i.restore()},C=function(t,e,i){var a=e.width,s=e.height,r=t.name;if(!t.ready){t.ready=!0;var n=.2*a;t.updateWidth(n),t.height=.46*n,t.x=e.calWidth-t.calWidth,t.y=.45*s,"tutorial"!==r&&(t.y+=1.2*t.height)}"tutorial"!==r&&(t.y+=Math.cos(i/200)*t.height*.01)},S=function(t,e){if(!e.checkTimeMovement("TUTORIAL_MOVEMENT")&&"HOOK_NORMAL"===w(e)){var i=e.ctx,a=t.name,s=e.getImg(a);i.drawImage(s,t.x,t.y,t.width,t.height)}},R=function(t,e){"ROTATE_LEFT"===t.status?t.y-t.width>=e.height&&(t.visible=!1,t.status=T,x(e)):t.y>=e.height&&(t.visible=!1,t.status=T,x(e))},P=function(t,e,i){var a=t,s=e.getVariable("ROPE_HEIGHT");if(a.visible){a.ready||(a.ready=!0,a.status="SWING",t.updateWidth(e.getVariable("BLOCK_WIDTH")),t.updateHeight(e.getVariable("BLOCK_HEIGHT")),t.x=e.width/2,t.y=-1.5*s);var r=e.getInstance("line");switch(a.status){case"SWING":e.getTimeMovement("HOOK_DOWN_MOVEMENT",[[t.y,t.y+s]],(function(e){t.y=e}),{name:"block"}),function(t,e,i){var a=e.getVariable("ROPE_HEIGHT");if("SWING"===t.status){var s=t,r=e.getVariable("INITIAL_ANGLE");s.angle=r*y(e,i),s.weightX=s.x+Math.sin(s.angle)*a,s.weightY=s.y+Math.cos(s.angle)*a}}(t,e,i);break;case"BEFORE_DROP":a.x=t.weightX-t.calWidth,a.y=t.weightY+.3*t.height,a.rotate=0,a.ay=e.pixelsPerFrame(3e-4*e.height),a.startDropTime=i,a.status="DROP";break;case"DROP":var n=i-a.startDropTime;a.startDropTime=i,a.vy+=a.ay*n,a.y+=a.vy*n+.5*a.ay*Math.pow(n,2);var o=function(t,e){return t.y+t.height>=e.y?t.x<e.x-t.calWidth||t.x>e.collisionX+t.calWidth?1:t.x<e.x?2:t.x>e.collisionX?3:t.x>e.x+.8*t.calWidth&&t.x<e.x+1.2*t.calWidth?5:4:0}(t,r),h=r.y-t.height,c=function(t){t.originOutwardAngle=Math.atan(t.height/t.outwardOffset),t.originHypotenuse=Math.sqrt(Math.pow(t.height,2)+Math.pow(t.outwardOffset,2)),e.playAudio("rotate")};switch(o){case 1:R(t,e);break;case 2:a.status="ROTATE_LEFT",t.y=h,t.outwardOffset=r.x+t.calWidth-t.x,c(t);break;case 3:a.status="ROTATE_RIGHT",t.y=h,t.outwardOffset=r.collisionX+t.calWidth-t.x,c(t);break;case 4:case 5:a.status=O;var d=e.getVariable("SUCCESS_COUNT");!function(t){var e=t.getVariable("GAME_USER_OPTION").setGameSuccess,i=t.getVariable("SUCCESS_COUNT")+1;t.setVariable("SUCCESS_COUNT",i),t.getVariable("HARD_MODE")&&t.setVariable("ROPE_HEIGHT",t.height*t.utils.random(.35,.55)),e&&e(i)}(e),e.setTimeMovement("MOVE_DOWN_MOVEMENT",500),10!==d&&15!==d||e.setTimeMovement("LIGHTNING_MOVEMENT",150),t.y=h,r.y=h,r.x=a.x-a.calWidth,r.collisionX=r.x+a.width;var u=.3*a.width;(a.x>e.width-2*u||a.x<-u)&&e.setVariable("HARD_MODE",!0),5===o?(t.perfect=!0,A(e,!0),e.playAudio("drop-perfect")):(A(e),e.playAudio("drop"))}break;case O:e.getTimeMovement("MOVE_DOWN_MOVEMENT",[[t.y,t.y+v(e,{pixelsPerFrame:function(t){return t/2}})]],(function(i){t.visible&&(t.y=i,t.y>e.height&&(t.visible=!1))}),{name:t.name}),t.x+=E(e,i);break;case"ROTATE_LEFT":case"ROTATE_RIGHT":var l="ROTATE_RIGHT"===a.status,g=e.pixelsPerFrame(4*Math.PI),m=l?1:-1;if(l?t.rotate>1.3:t.rotate<-1.3)t.rotate+=g/8*m,t.y+=e.pixelsPerFrame(.7*e.height),t.x+=e.pixelsPerFrame(.3*e.width)*m;else{var b=(t.calWidth-t.outwardOffset)/t.calWidth;b=b>.5?b:.5,t.rotate+=g*b*m;var f=t.originOutwardAngle+t.rotate,T=l?r.collisionX+t.calWidth:r.x+t.calWidth,p=r.y;t.x=T-Math.cos(f)*t.originHypotenuse,t.y=p-Math.sin(f)*t.originHypotenuse}R(t,e)}}},F=function(t,e){var i=t.perfect,a=e.getImg(i?"block-perfect":"block");e.ctx.drawImage(a,t.x,t.y,t.width,t.height)},D=function(t,e){switch(t.status){case"SWING":!function(t,e){var i=e.getImg("blockRope");e.ctx.drawImage(i,t.weightX-t.calWidth,t.weightY,t.width,1.3*t.height);var a=t.weightX-t.calWidth;e.debugLineY(a)}(t,e);break;case"DROP":case O:F(t,e);break;case"ROTATE_LEFT":case"ROTATE_RIGHT":!function(t,e){var i=e.ctx;i.save(),i.translate(t.x,t.y),i.rotate(t.rotate),i.translate(-t.x,-t.y),F(t,e),i.restore()}(t,e)}},H=function(t,e){var i=t.visible,a=t.ready,s=t.type;if(i){var r=e.getVariable("CLOUD_SIZE");if(!a){var n=function(t,e){var i=t.width,a=t.height,s=t.utils.random,r=t.getVariable("CLOUD_SIZE");return{bottomToTop:{x:i*s(.3,.7),y:a,vx:0,vy:.7*t.pixelsPerFrame(a)*-1},leftToRight:{x:-1*r,y:a*s(.3,.6),vx:.4*t.pixelsPerFrame(i),vy:.1*t.pixelsPerFrame(a)*-1},rightToLeft:{x:i,y:a*s(.2,.5),vx:.4*t.pixelsPerFrame(i)*-1,vy:.1*t.pixelsPerFrame(a)},rightTopToLeft:{x:i,y:0,vx:.6*t.pixelsPerFrame(i)*-1,vy:.5*t.pixelsPerFrame(a)}}[e]}(e,s);t.ready=!0,t.width=r,t.height=r,t.x=n.x,t.y=n.y,t.vx=n.vx,t.vy=n.vy}t.x+=t.vx,t.y+=t.vy,(t.y+r<0||t.y>e.height||t.x+r<0||t.x>e.width)&&(t.visible=!1)}},U=function(t,e){var i=e.ctx,a=e.getImg(t.imgName);i.drawImage(a,t.x,t.y,t.width,t.height)},G=function(t,e,i){if(t.getVariable("FLIGHT_COUNT")!==e){var a=new f({name:"flight_".concat(e),action:H,painter:U});a.imgName="f".concat(e),a.type=i,t.addInstance(a,"FLIGHT_LAYER"),t.setVariable("FLIGHT_COUNT",e)}},W=function(t){if(t.getVariable("GAME_START_NOW")){var e=t.getVariable("SUCCESS_COUNT",0),i=t.getVariable("FAILED_COUNT"),a=t.getVariable("GAME_SCORE",0),s=Number(e)>99?.1*t.width:0;M(t,{string:"floor",size:.06*t.width,x:.24*t.width+s,y:.12*t.width,textAlign:"left",fontName:"Arial",fontWeight:"bold"}),M(t,{string:e,size:.17*t.width,x:.22*t.width+s,y:.2*t.width,textAlign:"right"});var r=t.getImg("score"),n=r.width,o=r.height,h=.35*t.width,c=o*h/n;t.ctx.drawImage(r,.61*t.width,.038*t.width,h,c),M(t,{string:a,size:.06*t.width,x:.9*t.width,y:.11*t.width,textAlign:"right"});for(var d=t.ctx,u=t.getImg("heart"),l=u.width,g=u.height,m=.08*t.width,b=g*m/l,f=1;f<=3;f+=1)d.save(),f<=i&&(d.globalAlpha=.2),d.drawImage(u,.66*t.width+(f-1)*m,.16*t.width,m,b),d.restore()}},K=function(t){if(t.getVariable("GAME_START_NOW")){var e=t.getInstance("block_".concat(t.getVariable("BLOCK_COUNT")));if(!e||[O,T].indexOf(e.status)>-1){if(p(t)&&v(t))return;if(t.checkTimeMovement("HOOK_UP_MOVEMENT"))return;var i=function(t){var e=t.getVariable("SUCCESS_COUNT"),i=t.getVariable("GAME_SCORE"),a=t.getVariable("GAME_USER_OPTION").hookAngle;if(a)return a(e,i);if(t.getVariable("HARD_MODE"))return 90;switch(!0){case e<10:return 30;case e<20:return 60;default:return 80}}(t),a=Math.PI*t.utils.random(i,i+5)*t.utils.randomPositiveNegative()/180;t.setVariable("BLOCK_COUNT",t.getVariable("BLOCK_COUNT")+1),t.setVariable("INITIAL_ANGLE",a),t.setTimeMovement("HOOK_DOWN_MOVEMENT",500);var s=new f({name:"block_".concat(t.getVariable("BLOCK_COUNT")),action:P,painter:D});t.addInstance(s)}switch(Number(t.getVariable("SUCCESS_COUNT",0))){case 2:G(t,1,"leftToRight");break;case 6:G(t,2,"rightToLeft");break;case 8:G(t,3,"leftToRight");break;case 14:G(t,4,"bottomToTop");break;case 18:G(t,5,"bottomToTop");break;case 22:G(t,6,"bottomToTop");break;case 25:G(t,7,"rightTopToLeft")}}};window.TowerGame=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,i=t.height,a=t.canvasId,s=t.soundOn,r=new b({canvasId:a,highResolution:!0,width:e,height:i,soundOn:s}),n=function(t){return"./assets/".concat(t)};r.addImg("background",n("background.png")),r.addImg("hook",n("hook.png")),r.addImg("blockRope",n("block-rope.png")),r.addImg("block",n("block.png")),r.addImg("block-perfect",n("block-perfect.png"));for(var o=1;o<=8;o+=1)r.addImg("c".concat(o),n("c".concat(o,".png")));r.addLayer("FLIGHT_LAYER");for(var h=1;h<=7;h+=1)r.addImg("f".concat(h),n("f".concat(h,".png")));r.swapLayer(0,1),r.addImg("tutorial",n("tutorial.png")),r.addImg("tutorial-arrow",n("tutorial-arrow.png")),r.addImg("heart",n("heart.png")),r.addImg("score",n("score.png")),r.addAudio("drop-perfect",n("drop-perfect.mp3")),r.addAudio("drop",n("drop.mp3")),r.addAudio("game-over",n("game-over.mp3")),r.addAudio("rotate",n("rotate.mp3")),r.addAudio("bgm",n("bgm.mp3")),r.setVariable("BLOCK_WIDTH",.25*r.width),r.setVariable("BLOCK_HEIGHT",.71*r.getVariable("BLOCK_WIDTH")),r.setVariable("CLOUD_SIZE",.3*r.width),r.setVariable("ROPE_HEIGHT",.4*r.height),r.setVariable("BLOCK_COUNT",0),r.setVariable("SUCCESS_COUNT",0),r.setVariable("FAILED_COUNT",0),r.setVariable("GAME_SCORE",0),r.setVariable("HARD_MODE",!1),r.setVariable("GAME_USER_OPTION",t);var c=new f({name:"line",action:L,painter:V});r.addInstance(c);var d=new f({name:"hook",action:k,painter:N});return r.addInstance(d),r.startAnimate=K,r.endAnimate=W,r.paintUnderInstance=I,r.addKeyDownListener("enter",(function(){r.debug&&r.togglePaused()})),r.touchStartListener=function(){_(r)},r.playBgm=function(){r.playAudio("bgm",!0)},r.pauseBgm=function(){r.pauseAudio("bgm")},r.start=function(){var t=new f({name:"tutorial",action:C,painter:S});r.addInstance(t);var e=new f({name:"tutorial-arrow",action:C,painter:S});r.addInstance(e),r.setTimeMovement("BG_INIT_MOVEMENT",500),r.setTimeMovement("TUTORIAL_MOVEMENT",500),r.setVariable("GAME_START_NOW",!0)},r}}]);