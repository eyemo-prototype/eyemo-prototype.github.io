(this.webpackJsonpeyemo=this.webpackJsonpeyemo||[]).push([[0],{119:function(e,t,n){e.exports=n(154)},124:function(e,t,n){},125:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a,r,i,o=n(0),c=n.n(o),l=n(14),u=n.n(l),s=(n(124),n(125),n(26)),m=n(42),d=n(68),p=n(52),f=n(53),h=n(38),C=(n(126),n(10)),y=n(84),v=n.n(y);Object(C.h)({enforceActions:"never"});var g=v()(window.location.href,!0),T=null;if(g.query.story){var E=decodeURIComponent(g.query.story);T=E.split(",").map((function(e){var t=e.split(":");return{startTime:parseFloat(t[0]),endTime:parseFloat(t[1])}}))}var b=new(a=function(){function e(){Object(p.a)(this,e),Object(d.a)(this,"url",r,this),Object(d.a)(this,"cuts",i,this),Object(C.n)(this)}return Object(f.a)(e,[{key:"addCut",value:function(e){this.cuts.push(e)}},{key:"removeCut",value:function(e){this.cuts=this.cuts.filter((function(t){return t!==e}))}},{key:"shareUrl",get:function(){var e=window.location.href.split("?")[0];return"".concat(e,"?video=").concat(encodeURIComponent(this.url),"&story=").concat(encodeURIComponent(this.cuts.map((function(e){return[e.startTime,e.endTime].join(":")})).join(",")))}},{key:"trailerLength",get:function(){return this.cuts.reduce((function(e,t){return e+t.endTime-t.startTime}),0)}}]),e}(),r=Object(h.a)(a.prototype,"url",[C.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return g.query.video?decodeURIComponent(g.query.video):"https://www.youtube.com/watch?v=jrOxsjdeccw"}}),i=Object(h.a)(a.prototype,"cuts",[C.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return T||[{startTime:900,endTime:905},{startTime:1900,endTime:1915}]}}),Object(h.a)(a.prototype,"shareUrl",[C.g],Object.getOwnPropertyDescriptor(a.prototype,"shareUrl"),a.prototype),Object(h.a)(a.prototype,"trailerLength",[C.g],Object.getOwnPropertyDescriptor(a.prototype,"trailerLength"),a.prototype),Object(h.a)(a.prototype,"addCut",[C.f],Object.getOwnPropertyDescriptor(a.prototype,"addCut"),a.prototype),Object(h.a)(a.prototype,"removeCut",[C.f],Object.getOwnPropertyDescriptor(a.prototype,"removeCut"),a.prototype),a),_=n(85),k=n.n(_);function O(e){return e<10?"0".concat(e):e}function j(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return"00:00:00.0";var n=Math.floor(e/60/60),a=Math.floor(e/60%60),r=Math.floor(e%60),i=Math.floor(10*(e-Math.floor(e))),o="".concat(O(n),":").concat(O(a),":").concat(O(r));return t&&(o="".concat(o,".").concat(i)),o}var w=n(190),x=n(199),P=n(191),S=n(46),I=n.n(S),N=n(69),L=n.n(N),U=n(86),M=new(function(){function e(){var t=this;Object(p.a)(this,e),this.control=null,this.playingStory=null,this.currentCutIdx=0,this.currentCutSeekDone=!1,this.trackingTimer=null,this.checkTiming=function(){var e;t.playingStory&&(null===(e=t.currentCut)||void 0===e?void 0:e.endTime)&&(t.currentCutSeekDone?t.currentTime<t.currentCut.endTime||(console.log("---\x3e checkTiming <---",t.currentTime,t.currentCut.endTime),t.currentCutIdx++,t.currentCut?t.playCurrentCut():t.stop()):t.currentTime<t.currentCut.endTime&&t.currentTime>=t.currentCut.startTime&&(t.currentCutSeekDone=!0,console.log("--\x3e got into current cut")))}}return Object(f.a)(e,[{key:"setPlayer",value:function(e){this.control=e,console.log("--\x3e player set",e)}},{key:"playStory",value:function(e){this.control&&(console.log("---\x3e playStory <---",JSON.stringify(e)),this.playingStory=e,this.currentCutIdx=0,this.playCurrentCut())}},{key:"getPlayerState",value:function(){var e,t=null===(e=this.control)||void 0===e?void 0:e.player.getInternalPlayer();return null===t||void 0===t?void 0:t.getPlayerState()}},{key:"playCurrentCut",value:function(){var e=Object(U.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.playingStory&&this.control&&this.currentCut){e.next=2;break}return e.abrupt("return");case 2:this.currentCutSeekDone=!1,console.log("---\x3e playCurrentCut <---",JSON.stringify(this.currentCut)),this.control.player.seekTo(this.currentCut.startTime),this.control.start(),this.startTracking();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stop",value:function(){var e;console.log("---\x3e stop <---"),null===(e=this.control)||void 0===e||e.stop(),this.stopTracking()}},{key:"startTracking",value:function(){this.trackingTimer||(this.trackingTimer=setInterval(this.checkTiming,20))}},{key:"stopTracking",value:function(){this.trackingTimer&&(clearInterval(this.trackingTimer),this.trackingTimer=null)}},{key:"ready",get:function(){return!!this.control}},{key:"currentCut",get:function(){var e;return(null===(e=this.playingStory)||void 0===e?void 0:e[this.currentCutIdx])||null}},{key:"currentTime",get:function(){return this.control?this.control.player.getCurrentTime():0}}]),e}());function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var H=c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M45.3237 37.4146C47.6541 33.6649 49 29.2396 49 24.5C49 10.969 38.031 0 24.5 0C10.969 0 0 10.969 0 24.5C0 38.031 10.969 49 24.5 49C30.7748 49 36.4987 46.6411 40.8332 42.7617L38.759 37.5H41.1243L38.759 31.5H42.983L45.3237 37.4146Z",fill:"#4D6DDF"}),R=c.a.createElement("ellipse",{cx:92,cy:37,rx:2,ry:3,fill:"#4D6DDF"}),A=c.a.createElement("path",{d:"M34.728 38.248C34.56 38.752 33.168 40.264 31.104 40.264C29.856 40.264 28.872 39.52 28.44 38.536L37.272 36.928C37.296 36.832 37.272 36.736 37.272 36.616C37.152 33.304 34.44 30.664 31.104 30.664C27.672 30.664 24.912 33.424 24.912 36.856C24.912 37.624 25.056 38.392 25.344 39.088C26.28 41.512 28.704 43.048 31.104 43.048C35.28 43.048 37.08 39.616 37.296 39.064L34.728 38.248ZM28.08 35.824C28.344 34.528 29.448 33.496 30.72 33.4C31.968 33.28 33.216 34.024 33.792 35.176L28.008 36.208L28.08 35.824ZM45.981 31L43.437 37.792L40.749 31H37.677L41.925 41.776L39.741 47.584H42.813L49.053 31H45.981ZM59.2436 38.248C59.0756 38.752 57.6836 40.264 55.6196 40.264C54.3716 40.264 53.3876 39.52 52.9556 38.536L61.7876 36.928C61.8116 36.832 61.7876 36.736 61.7876 36.616C61.6676 33.304 58.9556 30.664 55.6196 30.664C52.1876 30.664 49.4276 33.424 49.4276 36.856C49.4276 37.624 49.5716 38.392 49.8596 39.088C50.7956 41.512 53.2196 43.048 55.6196 43.048C59.7956 43.048 61.5956 39.616 61.8116 39.064L59.2436 38.248ZM52.5956 35.824C52.8596 34.528 53.9636 33.496 55.2356 33.4C56.4836 33.28 57.7316 34.024 58.3076 35.176L52.5236 36.208L52.5956 35.824ZM77.9706 30.808C76.0026 30.808 74.5386 31.576 73.6746 32.752C72.8106 31.552 71.4666 30.808 69.8106 30.808C68.6106 30.808 67.4346 31.336 66.5706 32.2V31H63.4986V43H66.5706V36.4C66.5706 34.792 67.6266 33.64 69.0906 33.64C70.5546 33.64 71.6106 34.768 71.6106 36.376V43H74.7306V36.4C74.7306 34.792 75.7866 33.64 77.2506 33.64C78.7146 33.64 79.7466 34.768 79.7466 36.376V43H82.8906V36.304C82.8906 33.184 80.8986 30.808 77.9706 30.808ZM90.8462 43.192C94.2782 43.192 97.0382 40.408 97.0382 37C97.0382 33.592 94.2782 30.808 90.8462 30.808C87.4382 30.808 84.6542 33.592 84.6542 37C84.6542 40.408 87.4382 43.192 90.8462 43.192ZM90.9662 40.312C89.1422 40.312 87.8462 38.92 87.8462 37C87.8462 35.08 89.1422 33.688 90.9662 33.688C92.7662 33.688 94.0862 35.08 94.0862 37C94.0862 38.92 92.7662 40.312 90.9662 40.312Z",fill:"#252525"}),V=function(e){var t=e.svgRef,n=e.title,a=D(e,["svgRef","title"]);return c.a.createElement("svg",B({width:98,height:50,viewBox:"0 0 98 50",fill:"none",ref:t},a),n?c.a.createElement("title",null,n):null,H,R,A)},q=c.a.forwardRef((function(e,t){return c.a.createElement(V,B({svgRef:t},e))})),F=(n.p,n(198)),Z=n(183),z=n(187),J=n(92),W=n(90),Q=n.n(W),Y=n(91),K=n.n(Y),X=n(70),G=n.n(X),$=n(93),ee=n(188),te=n(94),ne=n(189);function ae(e){var t=e.onClick,n=e.position;return c.a.createElement(Z.a,{position:n},c.a.createElement(z.a,{edge:n,onClick:t,className:G.a.changeButton},"start"===n?c.a.createElement(Q.a,{style:{fontSize:12}}):c.a.createElement(K.a,{style:{fontSize:12}})))}function re(e){var t,n=Object(J.a)(new Date(2e3,1,1),{seconds:null!==(t=e.value)&&void 0!==t?t:void 0});function a(){e.value&&e.onChange(e.value-1)}function r(){e.value&&e.onChange(e.value+1)}return c.a.createElement(F.a,{disableOpenPicker:!0,ampm:!1,value:n,onChange:function(t){if(t){var n=3600*Object($.a)(t)+60*Object(ee.a)(t)+Object(te.a)(t)+Object(ne.a)(t)/1e3;e.onChange(n),console.log("--\x3e ",n)}},inputFormat:"HH:mm:ss.S",mask:"__:__:__._",views:["hours","minutes","seconds"],renderInput:function(e){return c.a.createElement(x.a,Object.assign({},e,{className:G.a.timeInput,size:"small",helperText:null,variant:"outlined",InputProps:{startAdornment:c.a.createElement(ae,{position:"start",onClick:a}),endAdornment:c.a.createElement(ae,{position:"end",onClick:r})}}))}})}var ie=Object(m.a)((function(){var e=Object(o.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(!1),i=Object(s.a)(r,2),l=i[0],u=i[1],m=Object(o.useState)(null),d=Object(s.a)(m,2),p=d[0],f=d[1],h=Object(o.useCallback)((function(e){M.setPlayer({player:e,start:function(){return u(!0)},stop:function(){return u(!1)}})}),[]);return Object(o.useEffect)((function(){var e=!1;return requestAnimationFrame((function t(){!e&&M.ready&&(f(M.currentTime),requestAnimationFrame(t))})),function(){e=!0}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a,{className:I.a.header,container:!0,alignContent:"center"},c.a.createElement(q,null)),c.a.createElement(w.a,{className:I.a.searchLine,container:!0,direction:"column",justify:"flex-end"},c.a.createElement(x.a,{fullWidth:!0,placeholder:"Copy YouTube url",value:b.url,onChange:function(e){return b.url=e.target.value}})),c.a.createElement(w.a,{className:"padded"},c.a.createElement(k.a,{ref:h,playing:l,url:b.url,onPlay:function(){return u(!0)},onPause:function(){return u(!1)},controls:!0,config:{youtube:{playerVars:{}}}})),c.a.createElement(w.a,{justify:"center",container:!0},j(p,!0)),c.a.createElement(w.a,{container:!0},c.a.createElement(w.a,{className:"padded",item:!0,lg:!0},c.a.createElement(P.a,{variant:"contained",disableElevation:!0,fullWidth:!0,onClick:function(){var e=M.currentTime,t={startTime:(null===n||void 0===n?void 0:n.startTime)||0,endTime:(null===n||void 0===n?void 0:n.endTime)||0};t.startTime=e,t.endTime<e&&(t.endTime=e+5),a(t)},color:"primary"},"Start of frame")),c.a.createElement(w.a,{className:"padded",item:!0,lg:!0},c.a.createElement(P.a,{variant:"contained",disableElevation:!0,onClick:function(){var e=M.currentTime,t={startTime:(null===n||void 0===n?void 0:n.startTime)||0,endTime:(null===n||void 0===n?void 0:n.endTime)||0};t.endTime=e,t.startTime>e&&(t.startTime=e-5),a(t)},fullWidth:!0,color:"primary"},"End of frame"))),n&&c.a.createElement(w.a,{container:!0,justify:"center",className:I.a.timeRow,alignContent:"flex-end"},c.a.createElement(w.a,{item:!0,lg:!0},c.a.createElement(re,{value:n.startTime,label:"Start time",onChange:function(e){a({startTime:e,endTime:Math.max(n.endTime,e+1)})}})),c.a.createElement(w.a,{item:!0,lg:!0},c.a.createElement(re,{value:null===n||void 0===n?void 0:n.endTime,label:"End time",onChange:function(e){a({startTime:Math.min(n.startTime,e-1),endTime:e})}})),c.a.createElement(w.a,{item:!0,className:I.a.buttons,xs:!0,justify:"flex-end",alignContent:"center",container:!0,wrap:"nowrap"},c.a.createElement(P.a,{variant:"outlined",disableElevation:!0,onClick:function(){n&&M.playStory([n])}},"Play"),c.a.createElement(P.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){n&&(b.addCut(n),a({startTime:0,endTime:0}))}},"Add"),c.a.createElement(P.a,{variant:"contained",disableElevation:!0,onClick:function(){a(null)}},"Clear"))))})),oe=n(97),ce=n(35),le=n.n(ce),ue=n(36),se=n.n(ue),me=n(98),de=n.n(me),pe=n(99),fe=n.n(pe);var he=Object(m.a)((function(e){return c.a.createElement(w.a,{container:!0,className:se.a.container},c.a.createElement(w.a,{item:!0,className:se.a.idx},e.idx+1),c.a.createElement(w.a,{className:se.a.block,container:!0,item:!0,lg:!0},c.a.createElement(w.a,{item:!0},c.a.createElement(P.a,{className:se.a.play,onClick:function(){M.playStory([e.cut])}},c.a.createElement(de.a,null))),c.a.createElement(w.a,{item:!0,lg:!0},c.a.createElement(re,{value:e.cut.startTime,label:"Start time",onChange:function(t){return function(t){e.cut.startTime=t,e.cut.endTime<e.cut.startTime+1&&(e.cut.endTime=e.cut.startTime+1)}(t)}})),c.a.createElement(w.a,{item:!0,lg:!0},c.a.createElement(re,{value:e.cut.endTime,label:"Start time",onChange:function(t){return function(t){e.cut.endTime=t,e.cut.startTime>e.cut.endTime-1&&(e.cut.startTime=e.cut.endTime-1)}(t)}})),c.a.createElement(w.a,{item:!0,className:se.a.rightBlock},c.a.createElement(fe.a,{className:se.a.remove,fontSize:"small",onClick:function(){b.removeCut(e.cut)}}),c.a.createElement("div",{className:se.a.timeTotal},j(e.cut.endTime-e.cut.startTime)))))})),Ce=n(100),ye=n.n(Ce),ve=n(102),ge=n.n(ve),Te=n(101),Ee=n.n(Te);var be=Object(m.a)((function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a,{className:le.a.header}),c.a.createElement(w.a,{container:!0,direction:"column"},b.cuts.map((function(e,t){return c.a.createElement(he,{key:t,idx:t,cut:e})}))),c.a.createElement(w.a,{container:!0,className:le.a.infoLine,item:!0},c.a.createElement(w.a,{item:!0,lg:!0},"Trailer duration: ",j(b.trailerLength)),c.a.createElement(w.a,{item:!0,lg:!0},"Number of frames: ",b.cuts.length)),c.a.createElement(w.a,null,c.a.createElement(P.a,{variant:"contained",disableElevation:!0,onClick:function(){M.playStory(b.cuts)},fullWidth:!0,color:"primary"},"Play all")),c.a.createElement(w.a,{className:le.a.shareUrlBlock},c.a.createElement("div",{className:le.a.shareUrl},c.a.createElement("span",{className:le.a.shareUrlText},b.shareUrl),c.a.createElement(ye.a,{text:b.shareUrl,onCopy:function(){a(!0),setTimeout((function(){return a(!1)}),3e3)}},c.a.createElement(ge.a,null)),c.a.createElement("div",{className:Ee()(le.a.copiedText,Object(oe.a)({},le.a.copiedTextShown,n))},"Copied"))))})),_e=n(71),ke=n.n(_e),Oe=n(105),je=n(196),we=n(197),xe=n(104),Pe=n(41),Se=Object(Oe.a)({palette:{primary:{main:"#4d6ddf"},secondary:{main:"#314eb7"}}});var Ie=function(){return c.a.createElement(je.a,{theme:Se},c.a.createElement(Pe.b,{dateAdapter:xe.a},c.a.createElement(we.a,{className:ke.a.container},c.a.createElement(w.a,{container:!0,wrap:"nowrap"},c.a.createElement(w.a,{item:!0},c.a.createElement(ie,null)),c.a.createElement(w.a,{item:!0,className:ke.a.rightCol},c.a.createElement(be,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){e.exports={timeInput:"CutsPanel_timeInput__2Qrs0",input:"CutsPanel_input__2-BNw",stepBtn:"CutsPanel_stepBtn__2UpLP",infoLine:"CutsPanel_infoLine__H7V1j",header:"CutsPanel_header__1Yli3",shareUrlBlock:"CutsPanel_shareUrlBlock__37_Bd",shareUrl:"CutsPanel_shareUrl__VqaQP",shareUrlText:"CutsPanel_shareUrlText__1Kg2U",copiedText:"CutsPanel_copiedText__1e3OD",copiedTextShown:"CutsPanel_copiedTextShown__23BhM"}},36:function(e,t,n){e.exports={container:"CutItem_container__2rPPd",block:"CutItem_block__109Jg",idx:"CutItem_idx__AiXXt",play:"CutItem_play__3Lhqn",rightBlock:"CutItem_rightBlock__1BaAB",remove:"CutItem_remove__OqVCk",timeTotal:"CutItem_timeTotal__HHslm"}},46:function(e,t,n){e.exports={searchLine:"PlayerPanel_searchLine__lHiKN",header:"PlayerPanel_header__3Ofwm",timeRow:"PlayerPanel_timeRow__2JdIQ",buttons:"PlayerPanel_buttons__2k6lM"}},70:function(e,t,n){e.exports={timeInput:"TimeInput_timeInput__33xoy",changeButton:"TimeInput_changeButton__Q4fU1"}},71:function(e,t,n){e.exports={rightCol:"App_rightCol__2GgY6",container:"App_container__1MQN3"}}},[[119,1,2]]]);
//# sourceMappingURL=main.7fefddb8.chunk.js.map