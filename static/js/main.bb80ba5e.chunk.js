(this.webpackJsonpeyemo=this.webpackJsonpeyemo||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n,r,l,o,i,c,s,u=a(0),m=a.n(u),d=a(9),p=a.n(d),y=(a(91),a(77)),f=a(156),h=a(158),v=a(154),g=a(76),C=a(157),b=a(16),E=(a(92),a(38)),T=a(39),S=a(80),P=a(78),_=a(155),O=a(40),w=a.n(O),j=a(34),k=a(14),x=(a(93),a(6)),M=a(160),I=a(63),L=a.n(I);Object(x.h)({enforceActions:"never"}),function(e){e.Active="active",e.Inactive="inactive"}(c||(c={})),function(e){e.Create="create",e.PlayOne="playOne",e.PlayAll="playAll",e.Show="show"}(s||(s={}));var N=L()(window.location.href,!0),A=null;if(N.query.story){var B=decodeURIComponent(N.query.story);A=B.split(",").map((function(e){var t=e.split("::");return{id:t[0],index:parseFloat(t[1]),playing:!1,iframeStatus:c.Active,muted:!1,url:t[2],cut:{startTime:parseFloat(t[3]),endTime:parseFloat(t[4])}}}))}var U=N.query.video?decodeURIComponent(N.query.video):null,D=new(n=function(){function e(){Object(E.a)(this,e),Object(j.a)(this,"editMode",r,this),Object(j.a)(this,"url",l,this),Object(j.a)(this,"mode",o,this),Object(j.a)(this,"playersStore",i,this),Object(x.n)(this)}return Object(T.a)(e,[{key:"addCut",value:function(e){this.playersStore.push({id:Object(M.a)(),index:this.playersStore.length,playing:!1,url:this.url,iframeStatus:c.Inactive,muted:!1,cut:{startTime:e.startTime,endTime:e.endTime}})}},{key:"removeCut",value:function(e){this.playersStore=this.playersStore.filter((function(t){return t.index!==e})).map((function(e,t){return e.index=t,e}))}},{key:"changeUrl",value:function(e){this.url=e,this.playersStore=[],this.playersStore.push({id:Object(M.a)(),index:0,playing:!1,url:e,iframeStatus:c.Active,muted:!1}),this.changeModeToCreate()}},{key:"changeModeToCreate",value:function(){this.mode=s.Create,console.log("--\x3e In CREATE mode");for(var e=0;e<this.playersStore.length;e+=1)this.playersStore[e].iframeStatus=0===e?c.Active:c.Inactive;this.playersStore[0].playing=!1}},{key:"changeModeToPlayOne",value:function(e){this.mode=s.PlayOne,console.log("--\x3e In PLAYONE mode");for(var t=0;t<this.playersStore.length;t+=1)this.playersStore[t].iframeStatus=t===e?c.Active:c.Inactive;this.playersStore[e].playing=!0}},{key:"changeModeToPlayAll",value:function(){if(1===this.playersStore.length)return this.changeModeToCreate(),void(this.playersStore[0].playing=!0);this.mode=s.PlayAll,console.log("--\x3e In PLAYALL mode");for(var e=0;e<this.playersStore.length;e+=1)this.playersStore[e].iframeStatus=0===e?c.Inactive:c.Active;this.playersStore[1].playing=!0}},{key:"shareUrl",get:function(){if(!this.url)return null;var e=window.location.href.split("?")[0];return"".concat(e,"?video=").concat(encodeURIComponent(this.url),"&story=").concat(encodeURIComponent(this.playersStore.map((function(e,t){var a,n;return[e.id,e.index,e.url,null===(a=e.cut)||void 0===a?void 0:a.startTime,null===(n=e.cut)||void 0===n?void 0:n.endTime].join("::")})).join(",")))}},{key:"trailerLength",get:function(){return this.playersStore.reduce((function(e,t,a){return 0!==a&&t.cut?e+t.cut.endTime-t.cut.startTime:e}),0)}}]),e}(),r=Object(k.a)(n.prototype,"editMode",[x.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!U}}),l=Object(k.a)(n.prototype,"url",[x.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return U}}),o=Object(k.a)(n.prototype,"mode",[x.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return U?s.Show:s.Create}}),i=Object(k.a)(n.prototype,"playersStore",[x.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return A||[{id:Object(M.a)(),index:0,playing:!1,url:this.url,iframeStatus:c.Active,muted:!1}]}}),Object(k.a)(n.prototype,"shareUrl",[x.g],Object.getOwnPropertyDescriptor(n.prototype,"shareUrl"),n.prototype),Object(k.a)(n.prototype,"trailerLength",[x.g],Object.getOwnPropertyDescriptor(n.prototype,"trailerLength"),n.prototype),Object(k.a)(n.prototype,"addCut",[x.f],Object.getOwnPropertyDescriptor(n.prototype,"addCut"),n.prototype),Object(k.a)(n.prototype,"removeCut",[x.f],Object.getOwnPropertyDescriptor(n.prototype,"removeCut"),n.prototype),Object(k.a)(n.prototype,"changeUrl",[x.f],Object.getOwnPropertyDescriptor(n.prototype,"changeUrl"),n.prototype),Object(k.a)(n.prototype,"changeModeToCreate",[x.f],Object.getOwnPropertyDescriptor(n.prototype,"changeModeToCreate"),n.prototype),Object(k.a)(n.prototype,"changeModeToPlayOne",[x.f],Object.getOwnPropertyDescriptor(n.prototype,"changeModeToPlayOne"),n.prototype),Object(k.a)(n.prototype,"changeModeToPlayAll",[x.f],Object.getOwnPropertyDescriptor(n.prototype,"changeModeToPlayAll"),n.prototype),n);function F(e){return e<10?"0".concat(e):e}function R(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return"00:00:00.0";var a=Math.floor(e/60/60),n=Math.floor(e/60%60),r=Math.floor(e%60),l=Math.floor(10*(e-Math.floor(e))),o="".concat(F(a),":").concat(F(n),":").concat(F(r));return t&&(o="".concat(o,".").concat(l)),o}var V=a(35),H=a.n(V),Z=a(49),z=a(161),W=a(153),Q=a(159),q=a(68),Y=a.n(q),J=a(69),X=a.n(J),K=a(50),G=a.n(K);function $(e){var t=e.onClick,a=e.position;return m.a.createElement(z.a,{position:a},m.a.createElement(W.a,{edge:a,onClick:t,className:G.a.changeButton},"start"===a?m.a.createElement(Y.a,{style:{fontSize:12}}):m.a.createElement(X.a,{style:{fontSize:12}})))}function ee(e){var t=Object(u.useRef)(null);function a(e){e.preventDefault(),e.deltaY>0?r():n()}function n(){if(e.value){var t=e.value-.1;t<0&&(t=0),e.onChange(t)}}function r(){e.onChange(e.value+.1)}Object(u.useEffect)((function(){var e=t.current;return null===e||void 0===e||e.addEventListener("wheel",a),function(){null===e||void 0===e||e.removeEventListener("wheel",a)}}),[e.value]);var l=Object(Z.a)(Object(Z.a)({},e),{},{value:R(e.value,!0)});return m.a.createElement(Q.a,Object.assign({},l,{className:G.a.timeInput,size:"small",helperText:null,variant:"outlined",onChange:function(e){},ref:t,InputProps:{startAdornment:m.a.createElement($,{position:"start",onClick:n}),endAdornment:m.a.createElement($,{position:"end",onClick:r}),readOnly:!0}}))}var te=a(70),ae=a.n(te),ne=a(51),re=a.n(ne),le={active:{isShow:!0},inactive:{isShow:!1}};var oe=Object(b.a)((function(e){var t=e.updatePosition;function a(e,t){console.log("Player ".concat(e," onReady")),D.playersStore[e].instance=t;var a=D.playersStore[e].cut;switch(D.mode){case s.Create:if(!a)return;y(e,t);break;case s.PlayOne:case s.PlayAll:break;case s.Show:if(!a||0===e)return;y(e,t)}}function n(e,a){var n,r;t(a.playedSeconds);var l,o=D.playersStore[e];switch(console.log("Player ".concat(e," onProgress in ").concat(a.playedSeconds," sec (s: ").concat(null===(n=o.cut)||void 0===n?void 0:n.startTime," e: ").concat(null===(r=o.cut)||void 0===r?void 0:r.endTime)),D.mode){case s.Create:break;case s.PlayOne:if(f(o.cut,a.playedSeconds))return;h(e),D.changeModeToCreate();break;case s.PlayAll:if(f(o.cut,a.playedSeconds))return;h(l=e),l===D.playersStore.length-1?(console.log("Last cut is end"),D.changeModeToCreate()):(console.log("Go from ".concat(l," to ").concat(l+1," cut")),D.playersStore[l+1].iframeStatus=c.Active,D.playersStore[l+1].playing=!0);break;case s.Show:}}function r(e){console.log("Player ".concat(e," onBuffer"))}function l(e){var t;switch(console.log("Player ".concat(e," onBufferEnd")),D.mode){case s.Create:if(0===e)return;D.playersStore[e].playing=!1,D.playersStore[e].muted=!1;break;case s.PlayOne:case s.PlayAll:break;case s.Show:if(0===e)return;D.playersStore[e].playing=!1,D.playersStore[e].muted=!1;var a=D.playersStore[e].cut,n=a?a.startTime:0;null===(t=D.playersStore[e].instance)||void 0===t||t.seekTo(n)}}function o(e){console.log("Player ".concat(e," onStart")),D.playersStore[e].playing=!0}function i(e){console.log("Player ".concat(e," onPlay")),D.playersStore[e].playing=!0}function u(e){console.log("Player ".concat(e," onPause")),D.playersStore[e].playing=!1}function d(e){console.log("Player ".concat(e," onEnded")),D.playersStore[e].playing=!1}function p(e,t){console.log("Player ".concat(e," onSeek"))}function y(e,t){console.log("Player ".concat(e," in preload")),D.playersStore[e].muted=!0,D.playersStore[e].playing=!0}function f(e,t){return!!e&&(t>=e.startTime&&t<=e.endTime)}function h(e){var t,a=D.playersStore[e].cut,n=a?a.startTime:0;D.playersStore[e].playing=!1,null===(t=D.playersStore[e].instance)||void 0===t||t.seekTo(n),D.playersStore[e].iframeStatus=c.Inactive}return m.a.createElement("div",null,D.url?D.playersStore.map((function(e,t,c){var s=c.length-1-t,y=c[s],f=le[c[c.length-1-t].iframeStatus].isShow;return m.a.createElement("div",{key:y.id,style:{visibility:f?"visible":"hidden"}},m.a.createElement(ae.a,{playing:y.playing,className:re.a.player,url:y.url,muted:y.muted,width:"100%",height:"100%",onPlay:i.bind(null,s),onProgress:n.bind(null,s),onStart:o.bind(null,s),onPause:u.bind(null,s),onEnded:d.bind(null,s),onReady:a.bind(null,s),onSeek:p.bind(null,s),onBufferEnd:l.bind(null,s),onBuffer:r.bind(null,s),progressInterval:100,controls:!0,config:{youtube:{playerVars:{}}}}))})):m.a.createElement("div",{className:re.a.playerPlaceholder}))})),ie=function(e){Object(S.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state=void 0,n.changeStart=function(e){n.setState({cut:{startTime:e,endTime:Math.max(n.state.cut.endTime,e+1)}})},n.changeEnd=function(e){n.setState({cut:{startTime:Math.min(n.state.cut.startTime,e-1),endTime:e}})},n.play=function(){var e,t=n.state.cut;if(t){D.mode!==s.Create&&D.changeModeToCreate(),null===(e=D.playersStore[0].instance)||void 0===e||e.seekTo(t.startTime),D.playersStore[0].playing=!0;var a=setInterval((function(){var e,t=n.state.cut;if(t){var r=D.playersStore[0].instance?null===(e=D.playersStore[0].instance)||void 0===e?void 0:e.getCurrentTime():0;r>=(null===t||void 0===t?void 0:t.startTime)&&r<=(null===t||void 0===t?void 0:t.endTime)||(clearInterval(a),D.playersStore[0].playing=!1)}}),100)}},n.clear=function(){n.setState({cut:null})},n.onAddCut=function(){var e=n.state.cut;e&&(D.addCut(e),n.setState({startTime:0,endTime:0}))},n.updatePosition=function(e){n.setState({position:e})},n.onStartFrame=function(){var e=n.state,t=e.position,a=e.cut,r={startTime:(null===a||void 0===a?void 0:a.startTime)||0,endTime:(null===a||void 0===a?void 0:a.endTime)||0};r.startTime=t,r.endTime<t&&(r.endTime=t+5),n.setState({cut:r})},n.onEndFrame=function(){var e=n.state,t=e.position,a=e.cut,r={startTime:(null===a||void 0===a?void 0:a.startTime)||0,endTime:(null===a||void 0===a?void 0:a.endTime)||0};r.endTime=t,r.startTime>t&&(r.startTime=t-5),n.setState({cut:r})},n.state={cut:null,playing:!1,position:0},n}return Object(T.a)(a,[{key:"render",value:function(){var e=this.state,t=e.position,a=e.cut;return m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{className:w()("padded",H.a.playerWrapper)},m.a.createElement(oe,{updatePosition:this.updatePosition})),D.editMode&&D.url?m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{justify:"center",container:!0},R(t,!0)),m.a.createElement(v.a,{container:!0},m.a.createElement(v.a,{className:"padded",item:!0,lg:!0},m.a.createElement(_.a,{variant:"contained",disableElevation:!0,fullWidth:!0,onClick:this.onStartFrame,color:"primary"},"Start of frame")),m.a.createElement(v.a,{className:"padded",item:!0,lg:!0},m.a.createElement(_.a,{variant:"contained",disableElevation:!0,onClick:this.onEndFrame,fullWidth:!0,color:"primary"},"End of frame"))),a&&m.a.createElement(v.a,{container:!0,justify:"center",className:H.a.timeRow,alignContent:"flex-end"},m.a.createElement(v.a,{item:!0,lg:!0},m.a.createElement(ee,{value:a.startTime,label:"Start time",onChange:this.changeStart})),m.a.createElement(v.a,{item:!0,lg:!0},m.a.createElement(ee,{value:null===a||void 0===a?void 0:a.endTime,label:"End time",onChange:this.changeEnd})),m.a.createElement(v.a,{item:!0,className:H.a.buttons,xs:!0,justify:"flex-end",alignContent:"center",container:!0,wrap:"nowrap"},m.a.createElement(_.a,{variant:"outlined",disableElevation:!0,onClick:this.play},"Play"),m.a.createElement(_.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:this.onAddCut},"Add"),m.a.createElement(_.a,{variant:"contained",disableElevation:!0,onClick:this.clear},"Clear")))):m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{className:H.a.previewButtons,container:!0},m.a.createElement(_.a,{variant:"contained",size:"large",color:"primary",disableElevation:!0,onClick:function(){return D.changeModeToPlayAll()}},"Play trailer"),m.a.createElement(_.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){return D.editMode=!0}},"Make your own trailer"))))}}]),a}(m.a.Component),ce=Object(b.a)(ie),se=a(41),ue=a(79),me=a(71),de=a.n(me),pe=a(74),ye=a.n(pe),fe=a(19),he=a.n(fe),ve=a(72),ge=a.n(ve),Ce=a(73),be=a.n(Ce),Ee=a(23),Te=a.n(Ee);var Se=Object(b.a)((function(e){return m.a.createElement(v.a,{container:!0,className:Te.a.container},m.a.createElement(v.a,{item:!0,className:Te.a.idx},e.idx),m.a.createElement(v.a,{className:Te.a.block,container:!0,item:!0,lg:!0},m.a.createElement(v.a,{item:!0},m.a.createElement(_.a,{className:Te.a.play,onClick:function(){D.changeModeToPlayOne(e.idx)}},m.a.createElement(ge.a,null))),m.a.createElement(v.a,{item:!0,lg:!0},m.a.createElement(ee,{value:e.cut.startTime,onChange:function(t){return function(t){e.cut.startTime=t,e.cut.endTime<e.cut.startTime+1&&(e.cut.endTime=e.cut.startTime+1),D.playersStore[e.idx].cut={startTime:e.cut.startTime,endTime:e.cut.endTime}}(t)}})),m.a.createElement(v.a,{item:!0,lg:!0},m.a.createElement(ee,{value:e.cut.endTime,onChange:function(t){return function(t){e.cut.endTime=t,e.cut.startTime>e.cut.endTime-1&&(e.cut.startTime=e.cut.endTime-1),D.playersStore[e.idx].cut={startTime:e.cut.startTime,endTime:e.cut.endTime}}(t)}})),m.a.createElement(v.a,{item:!0,className:Te.a.rightBlock},m.a.createElement(be.a,{className:Te.a.remove,fontSize:"small",onClick:function(){D.removeCut(e.idx)}}),m.a.createElement("div",{className:Te.a.timeTotal},R(e.cut.endTime-e.cut.startTime)))))}));var Pe=Object(b.a)((function(){var e=Object(u.useState)(!1),t=Object(ue.a)(e,2),a=t[0],n=t[1];return m.a.createElement(v.a,{className:he.a.cutsPanel},D.url?m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{container:!0,direction:"column"},D.playersStore.map((function(e,t){return 0!==t&&m.a.createElement(Se,{key:t,idx:t,cut:e.cut})}))),m.a.createElement(v.a,{container:!0,className:he.a.infoLine,item:!0},m.a.createElement(v.a,{item:!0,lg:!0},"Trailer duration: ",R(D.trailerLength)),m.a.createElement(v.a,{item:!0,lg:!0},"Number of frames: ",D.playersStore.length-1)),m.a.createElement(v.a,null,m.a.createElement(_.a,{variant:"contained",disableElevation:!0,onClick:function(){D.changeModeToPlayAll()},fullWidth:!0,color:"primary"},"Play all")),m.a.createElement(v.a,{className:he.a.shareUrlBlock},m.a.createElement("div",{className:he.a.shareUrl},m.a.createElement("span",{className:he.a.shareUrlText},D.shareUrl),m.a.createElement(de.a,{text:D.shareUrl||"",onCopy:function(){n(!0),setTimeout((function(){return n(!1)}),3e3),gtag("event","url-copy",{url:D.shareUrl})}},m.a.createElement(ye.a,null)),m.a.createElement("div",{className:w()(he.a.copiedText,Object(se.a)({},he.a.copiedTextShown,a))},"Copied")))):m.a.createElement(v.a,{container:!0,className:he.a.cutsPanelBlank},"Please select video for trailer editing"))}));function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var we=u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M45.3237 37.4146C47.6541 33.6649 49 29.2396 49 24.5C49 10.969 38.031 0 24.5 0C10.969 0 0 10.969 0 24.5C0 38.031 10.969 49 24.5 49C30.7748 49 36.4987 46.6411 40.8332 42.7617L38.759 37.5H41.1243L38.759 31.5H42.983L45.3237 37.4146Z",fill:"#4D6DDF"}),je=u.createElement("ellipse",{cx:92,cy:37,rx:2,ry:3,fill:"#4D6DDF"}),ke=u.createElement("path",{d:"M34.728 38.248C34.56 38.752 33.168 40.264 31.104 40.264C29.856 40.264 28.872 39.52 28.44 38.536L37.272 36.928C37.296 36.832 37.272 36.736 37.272 36.616C37.152 33.304 34.44 30.664 31.104 30.664C27.672 30.664 24.912 33.424 24.912 36.856C24.912 37.624 25.056 38.392 25.344 39.088C26.28 41.512 28.704 43.048 31.104 43.048C35.28 43.048 37.08 39.616 37.296 39.064L34.728 38.248ZM28.08 35.824C28.344 34.528 29.448 33.496 30.72 33.4C31.968 33.28 33.216 34.024 33.792 35.176L28.008 36.208L28.08 35.824ZM45.981 31L43.437 37.792L40.749 31H37.677L41.925 41.776L39.741 47.584H42.813L49.053 31H45.981ZM59.2436 38.248C59.0756 38.752 57.6836 40.264 55.6196 40.264C54.3716 40.264 53.3876 39.52 52.9556 38.536L61.7876 36.928C61.8116 36.832 61.7876 36.736 61.7876 36.616C61.6676 33.304 58.9556 30.664 55.6196 30.664C52.1876 30.664 49.4276 33.424 49.4276 36.856C49.4276 37.624 49.5716 38.392 49.8596 39.088C50.7956 41.512 53.2196 43.048 55.6196 43.048C59.7956 43.048 61.5956 39.616 61.8116 39.064L59.2436 38.248ZM52.5956 35.824C52.8596 34.528 53.9636 33.496 55.2356 33.4C56.4836 33.28 57.7316 34.024 58.3076 35.176L52.5236 36.208L52.5956 35.824ZM77.9706 30.808C76.0026 30.808 74.5386 31.576 73.6746 32.752C72.8106 31.552 71.4666 30.808 69.8106 30.808C68.6106 30.808 67.4346 31.336 66.5706 32.2V31H63.4986V43H66.5706V36.4C66.5706 34.792 67.6266 33.64 69.0906 33.64C70.5546 33.64 71.6106 34.768 71.6106 36.376V43H74.7306V36.4C74.7306 34.792 75.7866 33.64 77.2506 33.64C78.7146 33.64 79.7466 34.768 79.7466 36.376V43H82.8906V36.304C82.8906 33.184 80.8986 30.808 77.9706 30.808ZM90.8462 43.192C94.2782 43.192 97.0382 40.408 97.0382 37C97.0382 33.592 94.2782 30.808 90.8462 30.808C87.4382 30.808 84.6542 33.592 84.6542 37C84.6542 40.408 87.4382 43.192 90.8462 43.192ZM90.9662 40.312C89.1422 40.312 87.8462 38.92 87.8462 37C87.8462 35.08 89.1422 33.688 90.9662 33.688C92.7662 33.688 94.0862 35.08 94.0862 37C94.0862 38.92 92.7662 40.312 90.9662 40.312Z",fill:"#252525"});function xe(e,t){var a=e.title,n=e.titleId,r=Oe(e,["title","titleId"]);return u.createElement("svg",_e({width:98,height:50,viewBox:"0 0 98 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),a?u.createElement("title",{id:n},a):null,we,je,ke)}var Me=u.forwardRef(xe),Ie=(a.p,function(e){var t=e.className;return m.a.createElement("div",{className:t},m.a.createElement(Me,null))}),Le=a(75),Ne=a.n(Le);function Ae(){return m.a.createElement(m.a.Fragment,null,D.editMode&&m.a.createElement(v.a,{className:Ne.a.searchLine,container:!0,direction:"column",justify:"flex-end"},m.a.createElement(Q.a,{fullWidth:!0,placeholder:"Paste a YouTube url",value:D.url||"",onChange:function(e){return D.changeUrl(e.target.value)}})))}var Be=a(36),Ue=a.n(Be),De=Object(y.a)({palette:{primary:{main:"#4d6ddf"},secondary:{main:"#314eb7"}}});var Fe=Object(b.a)((function(){return m.a.createElement(f.a,{theme:De},m.a.createElement(C.a,{dateAdapter:g.a},m.a.createElement(h.a,{className:Ue.a.container},m.a.createElement(v.a,{className:Ue.a.header,container:!0,alignContent:"center"},m.a.createElement(Ie,null)),m.a.createElement(v.a,{container:!0,wrap:"nowrap"},D.editMode&&m.a.createElement(v.a,{item:!0,lg:!0,className:Ue.a.editingPanel},m.a.createElement(Ae,null),m.a.createElement(Pe,null)),m.a.createElement(v.a,{item:!0,className:Ue.a.playerPanel,lg:!0},m.a.createElement(ce,null))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,a){e.exports={cutsPanel:"CutsPanel_cutsPanel__yRaZp",cutsPanelBlank:"CutsPanel_cutsPanelBlank__V7SXQ",timeInput:"CutsPanel_timeInput__2Qrs0",input:"CutsPanel_input__2-BNw",stepBtn:"CutsPanel_stepBtn__2UpLP",infoLine:"CutsPanel_infoLine__H7V1j",shareUrlBlock:"CutsPanel_shareUrlBlock__37_Bd",shareUrl:"CutsPanel_shareUrl__VqaQP",shareUrlText:"CutsPanel_shareUrlText__1Kg2U",copiedText:"CutsPanel_copiedText__1e3OD",copiedTextShown:"CutsPanel_copiedTextShown__23BhM"}},23:function(e,t,a){e.exports={container:"CutItem_container__2rPPd",block:"CutItem_block__109Jg",idx:"CutItem_idx__AiXXt",play:"CutItem_play__3Lhqn",rightBlock:"CutItem_rightBlock__1BaAB",remove:"CutItem_remove__OqVCk",timeTotal:"CutItem_timeTotal__HHslm"}},35:function(e,t,a){e.exports={header:"PlayerPanel_header__3Ofwm",timeRow:"PlayerPanel_timeRow__2JdIQ",buttons:"PlayerPanel_buttons__2k6lM",playerWrapper:"PlayerPanel_playerWrapper__fY2EN",previewButtons:"PlayerPanel_previewButtons__3F-Qp"}},36:function(e,t,a){e.exports={playerPanel:"App_playerPanel__35IVj",editingPanel:"App_editingPanel__3M5CZ",container:"App_container__1MQN3"}},50:function(e,t,a){e.exports={timeInput:"TimeInput_timeInput__33xoy",changeButton:"TimeInput_changeButton__Q4fU1"}},51:function(e,t,a){e.exports={player:"MultiPlayer_player__3BLbd",playerPlaceholder:"MultiPlayer_playerPlaceholder__duL1K"}},75:function(e,t,a){e.exports={searchLine:"UrlInput_searchLine__3gxQh"}},91:function(e,t,a){},92:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.bb80ba5e.chunk.js.map