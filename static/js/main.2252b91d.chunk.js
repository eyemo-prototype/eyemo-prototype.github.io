(this.webpackJsonpeyemo=this.webpackJsonpeyemo||[]).push([[0],{120:function(e,t,n){e.exports={container:"sidebar_container__1TYtp"}},121:function(e,t,n){e.exports={searchLine:"SourcesPanel_searchLine__13oZu"}},215:function(e,t,n){"use strict";n.r(t);var a,r,i,c,o,l,u,s,d,m=n(0),p=n.n(m),y=n(9),h=n.n(y),f=n(125),v=n(246),b=n(19),g=n(64),_=n(65),x=n(128),P=n(126),E=n(244),T=n(245),C=n(38),O=n.n(C),I=n(34),j=n(20),w=n(127),k=n(11),S=(n(143),n(5)),N=n(91),B=n(111),M=n.n(B);Object(S.i)({enforceActions:"never"}),function(e){e.Create="create",e.PlayOne="playOne",e.PlayAll="playAll",e.Show="show"}(d||(d={}));var A=M()(window.location.href,!0),L=null,V=null;if(A.query.story){var D=decodeURIComponent(A.query.story);L=D.split(",").map((function(e){var t=e.split("::");return{id:t[0],index:parseFloat(t[1]),url:t[2],cut:{startTime:parseFloat(t[3]),endTime:parseFloat(t[4])}}}))}if(A.query.video){var F=decodeURIComponent(A.query.video);V=F.split(",").map((function(e){var t=e.split("::");return{id:t[0],index:parseFloat(t[1]),url:t[2]}}))}var z=V&&V.length>0,R=new(a=function(){function e(){var t=this;Object(g.a)(this,e),Object(I.a)(this,"sources",r,this),Object(I.a)(this,"mode",i,this),Object(I.a)(this,"cuts",c,this),Object(I.a)(this,"players",o,this),Object(I.a)(this,"activePlayerIndex",l,this),Object(I.a)(this,"currentCutIndex",u,this),Object(I.a)(this,"currentSourceIndex",s,this),Object(S.o)(this),Object(S.g)((function(){return console.log("--\x3e In ".concat(t.mode.toUpperCase()," mode"))}))}return Object(_.a)(e,[{key:"addCut",value:function(e){this.cuts.push({id:Object(N.a)(),index:this.cuts.length,url:this.sources[this.currentSourceIndex].url,cut:{startTime:e.startTime,endTime:e.endTime}})}},{key:"addSource",value:function(e){this.sources=[].concat(Object(w.a)(this.sources),[{id:Object(N.a)(),index:this.sources.length,url:e}]),this.changeModeToCreate(this.sources.length-1)}},{key:"changeSource",value:function(e){this.currentSourceIndex=e,this.changeModeToCreate(e)}},{key:"removeCut",value:function(e){(!this.players[this.activePlayerIndex].playing||e!==this.currentCutIndex&&e!==this.nextCutIndex)&&(e!==this.currentCutIndex?this.cuts=this.cuts.filter((function(t){return t.index!==e})).map((function(e,t){return e.index=t,e})):this.changeModeToCreate(0))}},{key:"changeModeToCreate",value:function(e){this.mode=d.Create,this.currentSourceIndex=e;for(var t=0;t<this.players.length;t+=1){var n;t===this.activePlayerIndex?(this.players[t]=Object(j.a)(Object(j.a)({},this.players[t]),{},{isVisible:!0,url:this.sources[e].url,playing:!1}),this.currentCutIndex=-1):(this.players[t].isVisible=!1,this.players[t].playing=!1),null===(n=this.players[t].instance)||void 0===n||n.getInternalPlayer().stopVideo()}}},{key:"changeModeToPlayOne",value:function(e){var t=this;this.mode=d.PlayOne,this.players[this.activePlayerIndex]=Object(j.a)(Object(j.a)({},this.players[this.activePlayerIndex]),{},{url:this.cuts[e].url,cutIndex:e,playing:!1}),this.currentCutIndex=e,setTimeout((function(){return t.startPlayingCurrentCut(t.cuts[t.currentCutIndex].cut)}),500)}},{key:"changeModeToPlayAll",value:function(){if(0===this.cuts.length)return this.changeModeToCreate(0),void(this.players[this.activePlayerIndex].playing=!0);this.mode=d.PlayAll,this.setDefaultPlayerState()}},{key:"changeModeToShow",value:function(){this.mode=d.Show,this.setDefaultPlayerState()}},{key:"startPlayingCurrentCut",value:function(e){var t,n=this;e&&(null===(t=this.players[this.activePlayerIndex].instance)||void 0===t||t.seekTo(e.startTime),setTimeout((function(){var t;null===(t=n.players[n.activePlayerIndex].instance)||void 0===t||t.seekTo(e.startTime),n.players[n.activePlayerIndex].playing=!0}),2e3))}},{key:"setDefaultPlayerState",value:function(){var e=this;this.players[this.activePlayerIndex].playing=!1,setTimeout((function(){for(var t=0;t<e.players.length;t+=1){var n;null===(n=e.players[t].instance)||void 0===n||n.getInternalPlayer().stopVideo(),e.players[t]=0===t?{id:e.players[t].id,instance:e.players[t].instance,isVisible:!0,muted:!1,url:e.cuts[0].url,playing:!1,cutIndex:0}:{id:e.players[t].id,instance:e.players[t].instance,isVisible:!1,muted:!1,url:e.cuts[0].url,playing:!1}}e.activePlayerIndex=0,e.currentCutIndex=0,e.startPlayingCurrentCut(e.cuts[e.currentCutIndex].cut)}),1e3)}},{key:"shareUrl",get:function(){if(0===this.sources.length)return null;var e=window.location.href.split("?")[0];return"".concat(e,"?video=").concat(encodeURIComponent(this.sources.map((function(e){return[e.id,e.index,e.url].join("::")})).join(",")),"&story=").concat(encodeURIComponent(this.cuts.map((function(e,t){var n,a;return[e.id,e.index,e.url,null===(n=e.cut)||void 0===n?void 0:n.startTime,null===(a=e.cut)||void 0===a?void 0:a.endTime].join("::")})).join(",")))}},{key:"trailerLength",get:function(){return this.cuts.reduce((function(e,t,n){return t.cut?e+t.cut.endTime-t.cut.startTime:e}),0)}},{key:"nextPlayerIndex",get:function(){return this.activePlayerIndex===this.players.length-1?0:this.activePlayerIndex+1}},{key:"nextCutIndex",get:function(){return this.currentCutIndex===this.cuts.length-1?0:this.currentCutIndex+1}}]),e}(),r=Object(k.a)(a.prototype,"sources",[S.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return V||[]}}),i=Object(k.a)(a.prototype,"mode",[S.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return z?d.Show:d.Create}}),c=Object(k.a)(a.prototype,"cuts",[S.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return L||[]}}),o=Object(k.a)(a.prototype,"players",[S.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return[0,1,2].map((function(t,n){return{id:n,isVisible:0===n,playing:!1,muted:!1,url:e.sources[0]?e.sources[0].url:""}}))}}),l=Object(k.a)(a.prototype,"activePlayerIndex",[S.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),u=Object(k.a)(a.prototype,"currentCutIndex",[S.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.cuts.length>0?0:-1}}),s=Object(k.a)(a.prototype,"currentSourceIndex",[S.p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.sources.length>0?0:-1}}),Object(k.a)(a.prototype,"shareUrl",[S.h],Object.getOwnPropertyDescriptor(a.prototype,"shareUrl"),a.prototype),Object(k.a)(a.prototype,"trailerLength",[S.h],Object.getOwnPropertyDescriptor(a.prototype,"trailerLength"),a.prototype),Object(k.a)(a.prototype,"nextPlayerIndex",[S.h],Object.getOwnPropertyDescriptor(a.prototype,"nextPlayerIndex"),a.prototype),Object(k.a)(a.prototype,"nextCutIndex",[S.h],Object.getOwnPropertyDescriptor(a.prototype,"nextCutIndex"),a.prototype),Object(k.a)(a.prototype,"addCut",[S.f],Object.getOwnPropertyDescriptor(a.prototype,"addCut"),a.prototype),Object(k.a)(a.prototype,"addSource",[S.f],Object.getOwnPropertyDescriptor(a.prototype,"addSource"),a.prototype),Object(k.a)(a.prototype,"changeSource",[S.f],Object.getOwnPropertyDescriptor(a.prototype,"changeSource"),a.prototype),Object(k.a)(a.prototype,"removeCut",[S.f],Object.getOwnPropertyDescriptor(a.prototype,"removeCut"),a.prototype),Object(k.a)(a.prototype,"changeModeToCreate",[S.f],Object.getOwnPropertyDescriptor(a.prototype,"changeModeToCreate"),a.prototype),Object(k.a)(a.prototype,"changeModeToPlayOne",[S.f],Object.getOwnPropertyDescriptor(a.prototype,"changeModeToPlayOne"),a.prototype),Object(k.a)(a.prototype,"changeModeToPlayAll",[S.f],Object.getOwnPropertyDescriptor(a.prototype,"changeModeToPlayAll"),a.prototype),Object(k.a)(a.prototype,"changeModeToShow",[S.f],Object.getOwnPropertyDescriptor(a.prototype,"changeModeToShow"),a.prototype),Object(k.a)(a.prototype,"startPlayingCurrentCut",[S.f],Object.getOwnPropertyDescriptor(a.prototype,"startPlayingCurrentCut"),a.prototype),a);function W(e){return e<10?"0".concat(e):e}function G(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return"00:00:00.0";var n=Math.floor(e/60/60),a=Math.floor(e/60%60),r=Math.floor(e%60),i=Math.floor(10*(e-Math.floor(e))),c="".concat(W(n),":").concat(W(a),":").concat(W(r));return t&&(c="".concat(c,".").concat(i)),c}var U=n(56),q=n.n(U),J=n(252),H=n(243),K=n(247),Y=n(115),Z=n.n(Y),X=n(116),Q=n.n(X),$=n(83),ee=n.n($);function te(e){var t=e.onClick,n=e.position;return p.a.createElement(J.a,{position:n},p.a.createElement(H.a,{edge:n,onClick:t,className:ee.a.changeButton},"start"===n?p.a.createElement(Z.a,{style:{fontSize:12}}):p.a.createElement(Q.a,{style:{fontSize:12}})))}function ne(e){var t=Object(m.useRef)(null);function n(e){e.preventDefault(),e.deltaY>0?r():a()}function a(){if(e.value){var t=e.value-.1;t<0&&(t=0),e.onChange(t)}}function r(){e.onChange(e.value+.1)}Object(m.useEffect)((function(){var e=t.current;return null===e||void 0===e||e.addEventListener("wheel",n),function(){null===e||void 0===e||e.removeEventListener("wheel",n)}}),[e.value]);var i=Object(j.a)(Object(j.a)({},e),{},{value:G(e.value,!0)});return p.a.createElement(K.a,Object.assign({},i,{className:ee.a.timeInput,size:"small",helperText:null,variant:"outlined",onChange:function(e){},ref:t,InputProps:{startAdornment:p.a.createElement(te,{position:"start",onClick:a}),endAdornment:p.a.createElement(te,{position:"end",onClick:r}),readOnly:!0}}))}var ae=n(117),re=n.n(ae),ie=n(84),ce=n.n(ie);var oe,le=Object(b.a)((function(e){var t=e.updatePosition;function n(e,t){console.log("Player ".concat(e," onReady")),R.players[e].instance=t}function a(e,n){if(e===R.activePlayerIndex){var a=R.players[e],r=R.players[e].cutIndex;if(a.isVisible&&t(n.playedSeconds),void 0!==r&&-1!==R.currentCutIndex){var i=R.cuts[r].cut;switch(console.log("Player ".concat(e," onProgress in ").concat(n.playedSeconds," sec (s: ").concat(null===i||void 0===i?void 0:i.startTime," e: ").concat(null===i||void 0===i?void 0:i.endTime)),R.mode){case d.Create:break;case d.PlayOne:if(!a.isVisible||y(i,n.playedSeconds))return;f(e);break;case d.PlayAll:case d.Show:if(!a.isVisible||y(i,n.playedSeconds))return;h(e)}}else console.log("No cut index in player")}}function r(e){console.log("Player ".concat(e," onBuffer"))}function i(e){console.log("Player ".concat(e," onBufferEnd"))}function c(e){console.log("Player ".concat(e," onStart"))}function o(e){if(console.log("Player ".concat(e," onPlay"),R.activePlayerIndex,R.currentCutIndex,R.nextPlayerIndex,R.nextCutIndex),R.players[e].muted=!1,e!==R.activePlayerIndex){var t,n,a=null===(t=R.cuts[R.nextCutIndex].cut)||void 0===t?void 0:t.startTime;null===(n=R.players[R.nextPlayerIndex].instance)||void 0===n||n.seekTo(a||0),R.players[e].playing=!1}else switch(R.mode){case d.Create:case d.PlayOne:break;case d.PlayAll:case d.Show:m()}}function l(e){console.log("Player ".concat(e," onPause"))}function u(e){console.log("Player ".concat(e," onEnded"))}function s(e,t){console.log("Player ".concat(e," onSeek"))}function m(){var e=R.nextPlayerIndex,t=R.nextCutIndex;console.log("Player ".concat(e," START preload")),R.players[e]=Object(j.a)(Object(j.a)({},R.players[e]),{},{cutIndex:R.cuts[t].index,url:R.cuts[t].url,muted:!0,playing:!0})}function y(e,t){return!!e&&(t>=e.startTime&&t<=e.endTime)}function h(e){if(f(e),R.currentCutIndex===R.cuts.length-1)console.log("Last cut is end");else{var t;console.log("Go from ".concat(R.currentCutIndex," to ").concat(R.nextCutIndex," cut")),R.players[R.activePlayerIndex].isVisible=!1,R.players[R.nextPlayerIndex].isVisible=!0,R.players[R.nextPlayerIndex].playing=!0,null===(t=R.players[R.nextPlayerIndex].instance)||void 0===t||t.seekTo(R.cuts[R.nextCutIndex].cut.startTime);var n=R.nextPlayerIndex,a=R.nextCutIndex;R.activePlayerIndex=n,R.currentCutIndex=a}}function f(e){var t;R.players[e].playing=!1,null===(t=R.players[e].instance)||void 0===t||t.getInternalPlayer().stopVideo()}return p.a.createElement("div",null,R.sources.length>0?R.players.map((function(e,t,d){var m=d.length-1-t;return p.a.createElement("div",{key:R.players[m].id,style:{visibility:R.players[m].isVisible?"visible":"hidden"}},p.a.createElement(re.a,{playing:R.players[m].playing,className:ce.a.player,url:R.players[m].url,muted:R.players[m].muted,width:"100%",height:"100%",onPlay:o.bind(null,m),onProgress:a.bind(null,m),onStart:c.bind(null,m),onPause:l.bind(null,m),onEnded:u.bind(null,m),onReady:n.bind(null,m),onSeek:s.bind(null,m),onBufferEnd:i.bind(null,m),onBuffer:r.bind(null,m),progressInterval:100,controls:!0,config:{youtube:{playerVars:{}}}}))})):p.a.createElement("div",{className:ce.a.playerPlaceholder}))})),ue=function(e){Object(x.a)(n,e);var t=Object(P.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state=void 0,a.changeStart=function(e){a.setState({cut:{startTime:e,endTime:Math.max(a.state.cut.endTime,e+1)}})},a.changeEnd=function(e){a.setState({cut:{startTime:Math.min(a.state.cut.startTime,e-1),endTime:e}})},a.play=function(){var e,t=a.state.cut;t&&(R.players[R.activePlayerIndex].playing=!1,null===(e=R.players[R.activePlayerIndex].instance)||void 0===e||e.seekTo(t.startTime),setTimeout((function(){R.players[R.activePlayerIndex].playing=!0;var e=setInterval((function(){var t=a.state.cut;if(t){var n=R.players[R.activePlayerIndex].instance,r=n?n.getCurrentTime():0;r>=(null===t||void 0===t?void 0:t.startTime)&&r<=(null===t||void 0===t?void 0:t.endTime)||(clearInterval(e),R.players[R.activePlayerIndex].playing=!1)}}),100)}),1e3))},a.clear=function(){a.setState({cut:null})},a.onAddCut=function(){var e=a.state.cut;e&&(R.addCut(e),a.setState({startTime:0,endTime:0}))},a.updatePosition=function(e){a.setState({position:e})},a.onStartFrame=function(){var e=a.state,t=e.position,n=e.cut,r={startTime:(null===n||void 0===n?void 0:n.startTime)||0,endTime:(null===n||void 0===n?void 0:n.endTime)||0};r.startTime=t,r.endTime<t&&(r.endTime=t+5),a.setState({cut:r})},a.onEndFrame=function(){var e=a.state,t=e.position,n=e.cut,r={startTime:(null===n||void 0===n?void 0:n.startTime)||0,endTime:(null===n||void 0===n?void 0:n.endTime)||0};r.endTime=t,r.startTime>t&&(r.startTime=t-5),a.setState({cut:r})},a.state={cut:null,playing:!1,position:0},a}return Object(_.a)(n,[{key:"render",value:function(){var e=this.state,t=e.position,n=e.cut;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{style:{fontSize:"10px"}},"Player: ",R.activePlayerIndex,"/",R.players.length-1," Cut: ",R.currentCutIndex,"/",R.cuts.length-1," Source: ",R.currentSourceIndex,"/",R.sources.length-1),p.a.createElement(E.a,{className:O()("padded",q.a.playerWrapper)},p.a.createElement(le,{updatePosition:this.updatePosition})),R.mode!==d.Show&&R.sources.length>0?p.a.createElement(p.a.Fragment,null,p.a.createElement(E.a,{justify:"center",container:!0},G(t,!0)),p.a.createElement(E.a,{container:!0},p.a.createElement(E.a,{className:"padded",item:!0,lg:!0},p.a.createElement(T.a,{variant:"contained",disableElevation:!0,fullWidth:!0,onClick:this.onStartFrame,color:"primary"},"Start of frame")),p.a.createElement(E.a,{className:"padded",item:!0,lg:!0},p.a.createElement(T.a,{variant:"contained",disableElevation:!0,onClick:this.onEndFrame,fullWidth:!0,color:"primary"},"End of frame"))),n&&p.a.createElement(E.a,{container:!0,justify:"center",className:q.a.timeRow,alignContent:"flex-end"},p.a.createElement(E.a,{item:!0,lg:!0},p.a.createElement(ne,{value:n.startTime,label:"Start time",onChange:this.changeStart})),p.a.createElement(E.a,{item:!0,lg:!0},p.a.createElement(ne,{value:null===n||void 0===n?void 0:n.endTime,label:"End time",onChange:this.changeEnd})),p.a.createElement(E.a,{item:!0,className:q.a.buttons,xs:!0,justify:"flex-end",alignContent:"center",container:!0,wrap:"nowrap"},p.a.createElement(T.a,{variant:"outlined",disableElevation:!0,onClick:this.play},"Play"),p.a.createElement(T.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:this.onAddCut},"Add"),p.a.createElement(T.a,{variant:"contained",disableElevation:!0,onClick:this.clear},"Clear")))):p.a.createElement(p.a.Fragment,null,p.a.createElement(E.a,{className:q.a.previewButtons,container:!0},p.a.createElement(T.a,{variant:"contained",size:"large",color:"primary",disableElevation:!0,onClick:function(){return R.changeModeToShow()}},"Play trailer"),p.a.createElement(T.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){return R.changeModeToCreate(0)}},"Make your own trailer"))))}}]),n}(p.a.Component),se=Object(b.a)(ue),de=n(75),me=n.n(de),pe=n(24),ye=n(13),he=n(85),fe=n.n(he),ve=function(e){var t=e.title,n=e.children;return p.a.createElement("div",{className:fe.a.container},p.a.createElement("h2",{className:fe.a.title},t),n)},be=function(){return p.a.createElement(ve,{title:"Add Music"},p.a.createElement("div",null,"\u0411\u043b\u043e\u043a \u0441 \u0430\u0443\u0434\u0438\u043e-\u043a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c"))},ge=n(118),_e=n(51),xe=n(119),Pe=n.n(xe),Ee=n(86),Te=n.n(Ee),Ce=n(46),Oe=n.n(Ce),Ie=n.p+"static/media/copyIcon.65a342f0.svg",je=n.p+"static/media/closeIcon.0b48234f.svg",we=function(e){var t=e.value,n=e.placeholder,a=e.onChange;return p.a.createElement("div",{className:Oe.a.container},p.a.createElement("input",{onChange:function(e){return a(e.target.value)},value:t,placeholder:n,className:Oe.a.input}),t&&p.a.createElement("div",{className:Oe.a.buttonsBlock},p.a.createElement("button",{className:Oe.a.clearButton,onClick:function(){return a("")}},p.a.createElement("img",{src:je})),p.a.createElement("button",{className:Oe.a.copyButton,onClick:function(){navigator.clipboard.writeText(t).then((function(){alert("\u0422\u0435\u043a\u0441\u0442 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430")}))}},p.a.createElement("img",{src:Ie}))))},ke=new _e.GiphyFetch("IPKlChsULe1Qlt19wbrWHlnjDr04SZa8");function Se(e){var t=e.width,n=e.searchText,a=e.fetchType;return p.a.createElement(ge.Grid,{fetchGifs:function(e){return a===oe.Search?ke.search(n,{offset:e,limit:10}):(oe.Trending,ke.trending({offset:e,limit:10}))},width:t,columns:4,gutter:6})}!function(e){e.Trending="trending",e.Search="search"}(oe||(oe={}));var Ne=function(){var e=p.a.createRef(),t=Object(m.useState)(null),n=Object(pe.a)(t,2),a=n[0],r=n[1],i=Object(m.useState)(""),c=Object(pe.a)(i,2),o=c[0],l=c[1],u=Object(m.useState)(!0),s=Object(pe.a)(u,2),d=s[0],y=s[1];return Object(m.useEffect)((function(){e&&r(e.current.offsetWidth)}),[e]),Object(m.useEffect)((function(){var e=setTimeout((function(){y(!0)}),1e3);return function(){return clearTimeout(e)}}),[o]),p.a.createElement(ve,{title:"Add Gif"},p.a.createElement("div",{ref:e,className:Te.a.root},p.a.createElement(we,{placeholder:"Search with GIPHY",value:o,onChange:function(e){y(!1),l(e)}}),a&&p.a.createElement("div",{className:Te.a.gifsPanel},d&&""===o&&p.a.createElement(Se,{width:a,searchText:o,fetchType:oe.Trending}),d&&""!==o&&p.a.createElement(Se,{width:a,searchText:o,fetchType:oe.Search}),p.a.createElement(Pe.a,{onResize:function(e){e.width}}))))},Be=n(57),Me=n.n(Be),Ae=function(e){var t=e.value,n=e.isActive,a=e.icon,r=e.onClick;return p.a.createElement("div",{onClick:function(){return r(t)},className:O()(Me.a.tabItem,Object(ye.a)({},Me.a.active,n))},p.a.createElement("img",{src:a,className:O()(Me.a.icon,Object(ye.a)({},Me.a.activeIcon,n))}))},Le=n(120),Ve=n.n(Le),De=function(e){var t=e.tabs,n=e.activeTab,a=e.handleClick;return p.a.createElement("div",{className:Ve.a.container},t.map((function(e){var t=e.icon,r=e.id;return p.a.createElement(Ae,{icon:t,isActive:r===n,key:r,value:r,onClick:a})})))},Fe=n(121),ze=n.n(Fe),Re="blue",We="red",Ge=n(47),Ue=n.n(Ge),qe=function(e){var t,n=e.children,a=e.disabled,r=e.colorTheme,i=e.withBorder,c=e.onClick;return p.a.createElement("button",{className:O()(Ue.a.button,(t={},Object(ye.a)(t,Ue.a.disabled,a),Object(ye.a)(t,Ue.a.withBorder,i),Object(ye.a)(t,Ue.a.redTheme,r===We),Object(ye.a)(t,Ue.a.blueTheme,r===Re),t)),disabled:a,onClick:c},n)},Je=n(122),He=n.n(Je),Ke=n(249),Ye=n(58),Ze=n.n(Ye),Xe=n(123),Qe=n.n(Xe),$e=n(124),et=n.n($e),tt=n(35),nt=n.n(tt);var at=Object(b.a)((function(e){return p.a.createElement(E.a,{container:!0,className:nt.a.container},p.a.createElement(E.a,{item:!0,className:nt.a.idx},e.idx+1),p.a.createElement(E.a,{className:nt.a.block,container:!0,item:!0,lg:!0},p.a.createElement(E.a,{item:!0},p.a.createElement(T.a,{className:nt.a.play,onClick:function(){R.changeModeToPlayOne(e.idx)}},p.a.createElement(Qe.a,null))),p.a.createElement(E.a,{item:!0,lg:!0},p.a.createElement(ne,{value:e.cut.startTime,onChange:function(t){return function(t){e.cut.startTime=t,e.cut.endTime<e.cut.startTime+1&&(e.cut.endTime=e.cut.startTime+1),R.cuts[e.idx].cut={startTime:e.cut.startTime,endTime:e.cut.endTime}}(t)}})),p.a.createElement(E.a,{item:!0,lg:!0},p.a.createElement(ne,{value:e.cut.endTime,onChange:function(t){return function(t){e.cut.endTime=t,e.cut.startTime>e.cut.endTime-1&&(e.cut.startTime=e.cut.endTime-1),R.cuts[e.idx].cut={startTime:e.cut.startTime,endTime:e.cut.endTime}}(t)}})),p.a.createElement(E.a,{item:!0,className:nt.a.rightBlock},p.a.createElement(et.a,{className:nt.a.remove,fontSize:"small",onClick:function(){R.removeCut(e.idx)}}),p.a.createElement("div",{className:nt.a.timeTotal},G(e.cut.endTime-e.cut.startTime)))))}));var rt,it=Object(b.a)((function(){var e=Object(m.useState)(!1),t=Object(pe.a)(e,2),n=t[0],a=t[1];return p.a.createElement(Ke.a,{className:Ze.a.cutsPanel},R.sources.length>0?p.a.createElement(p.a.Fragment,null,p.a.createElement(E.a,{container:!0,direction:"column"},R.cuts.map((function(e,t){return p.a.createElement(at,{key:e.id,idx:t,cut:e.cut})}))),p.a.createElement(E.a,{container:!0,className:Ze.a.infoLine,item:!0},p.a.createElement(E.a,{item:!0,lg:!0},"Trailer duration: ",G(R.trailerLength)),p.a.createElement(E.a,{item:!0,lg:!0},"Number of frames: ",R.cuts.length)),p.a.createElement(E.a,{className:Ze.a.bottomBtn},p.a.createElement(T.a,{variant:"contained",disableElevation:!0,onClick:function(){R.changeModeToPlayAll()},fullWidth:!0,color:"primary"},"Play all"),p.a.createElement(He.a,{text:R.shareUrl||"",onCopy:function(){a(!0),setTimeout((function(){return a(!1)}),3e3),gtag("event","url-copy",{url:R.shareUrl})}},p.a.createElement(T.a,{variant:"contained",disableElevation:!0,fullWidth:!0},n?"Copied":"Copy link")))):p.a.createElement(E.a,{container:!0,className:Ze.a.cutsPanelBlank},"Please select video for trailer editing"))})),ct=Object(b.a)((function(){var e=Object(m.useState)(""),t=Object(pe.a)(e,2),n=t[0],a=t[1];return p.a.createElement(ve,{title:"All frames"},R.mode!==d.Show&&p.a.createElement(E.a,{container:!0,direction:"column"},p.a.createElement(E.a,{className:ze.a.searchLine,item:!0},p.a.createElement(we,{value:n,onChange:function(e){return a(e)},placeholder:"Paste the video link here"})),p.a.createElement(E.a,{item:!0,container:!0,spacing:2},R.sources.map((function(e){return p.a.createElement(E.a,{key:e.id,item:!0},p.a.createElement(qe,{onClick:function(){return t=e.index,void R.changeSource(t);var t},colorTheme:e.index===R.currentSourceIndex?We:Re},"Source ",e.index+1))})),p.a.createElement(E.a,{item:!0},p.a.createElement(qe,{onClick:function(){R.addSource(n),a("")},withBorder:!0,disabled:""===n},"Add source")))),p.a.createElement(it,null))})),ot=function(){return p.a.createElement(ve,{title:"Add Text"},p.a.createElement("div",null,"\u0411\u043b\u043e\u043a \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u043c \u043d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c"))},lt=n.p+"static/media/frames.7fe1096a.svg",ut=n.p+"static/media/audio.18d70808.svg",st=n.p+"static/media/gif.cd91ed47.svg",dt=n.p+"static/media/text.0504dd60.svg",mt="frames",pt="text",yt="gifs",ht="audio",ft=[{id:mt,icon:lt},{id:pt,icon:dt},{id:yt,icon:st},{id:ht,icon:ut}],vt=n(87),bt=n.n(vt),gt=(rt={},Object(ye.a)(rt,mt,p.a.createElement(ct,null)),Object(ye.a)(rt,yt,p.a.createElement(Ne,null)),Object(ye.a)(rt,pt,p.a.createElement(ot,null)),Object(ye.a)(rt,ht,p.a.createElement(be,null)),rt),_t=function(){var e=Object(m.useState)(mt),t=Object(pe.a)(e,2),n=t[0],a=t[1];return p.a.createElement("div",{className:bt.a.container},p.a.createElement(De,{tabs:ft,handleClick:function(e){a(e)},activeTab:n}),p.a.createElement("div",{className:bt.a.content},gt[n]))};var xt=Object(b.a)((function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(v.a,{dateAdapter:f.a},p.a.createElement("div",{className:me.a.container},p.a.createElement("div",{className:me.a.wrapper},R.mode!==d.Show&&p.a.createElement(_t,null),p.a.createElement("div",{className:me.a.playerPanel},p.a.createElement(se,null))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(p.a.createElement(p.a.StrictMode,null,p.a.createElement(xt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){e.exports={container:"CutItem_container__24UlK",block:"CutItem_block__3Vi1E",idx:"CutItem_idx__Oae0P",play:"CutItem_play__df0ax",rightBlock:"CutItem_rightBlock__1HnCt",remove:"CutItem_remove__2zaIO",timeTotal:"CutItem_timeTotal__1-AT3"}},46:function(e,t,n){e.exports={container:"input_container__23uXm",input:"input_input__2NaO-",buttonsBlock:"input_buttonsBlock__20Mow",clearButton:"input_clearButton__3f2P7",copyButton:"input_copyButton__30Jkc"}},47:function(e,t,n){e.exports={button:"button_button__rhxVg",withBorder:"button_withBorder__37cWq",disabled:"button_disabled__yLx7B",blueTheme:"button_blueTheme__XD1wz"}},56:function(e,t,n){e.exports={header:"PlayerPanel_header__1iGRg",timeRow:"PlayerPanel_timeRow__2nvuF",buttons:"PlayerPanel_buttons__35YWO",playerWrapper:"PlayerPanel_playerWrapper__2b_tL",previewButtons:"PlayerPanel_previewButtons__3LKVm",loadIcon:"PlayerPanel_loadIcon__1Aafn"}},57:function(e,t,n){e.exports={tabItem:"tabItem_tabItem__1OnFe",active:"tabItem_active__2Ilqp",icon:"tabItem_icon__14Ix2",activeIcon:"tabItem_activeIcon__2Giao"}},58:function(e,t,n){e.exports={cutsPanel:"CutsPanel_cutsPanel__2Fqsc",cutsPanelBlank:"CutsPanel_cutsPanelBlank__l4P-6",timeInput:"CutsPanel_timeInput__2SLWn",input:"CutsPanel_input__25q1r",stepBtn:"CutsPanel_stepBtn__1JF4X",infoLine:"CutsPanel_infoLine__1tF2z",loadIcon:"CutsPanel_loadIcon__TH14b",bottomBtn:"CutsPanel_bottomBtn__1edoF"}},75:function(e,t,n){e.exports={playerPanel:"App_playerPanel__3bV36",editingPanel:"App_editingPanel__28fsw",container:"App_container__eSJ6i",wrapper:"App_wrapper__RCHjb"}},83:function(e,t,n){e.exports={timeInput:"TimeInput_timeInput__1OGkV",changeButton:"TimeInput_changeButton__1tKZm"}},84:function(e,t,n){e.exports={player:"MultiPlayer_player__3BLbd",playerPlaceholder:"MultiPlayer_playerPlaceholder__duL1K"}},85:function(e,t,n){e.exports={container:"contentView_container__RRG_Y",title:"contentView_title__1pCuk"}},86:function(e,t,n){e.exports={root:"GifsPanel_root__1ZDy0",searchLine:"GifsPanel_searchLine__3JEx-",gifsPanel:"GifsPanel_gifsPanel__1yNS-"}},87:function(e,t,n){e.exports={container:"contentBlock_container__1pOST",content:"contentBlock_content__1xBTD"}}},[[215,1,2]]]);
//# sourceMappingURL=main.2252b91d.chunk.js.map