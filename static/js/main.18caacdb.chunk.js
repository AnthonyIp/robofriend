(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{27:function(e,t,n){e.exports=n(56)},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n.n(a),c=n(6),s=n(2),l=n(24),u=n(25),d=n(4),h=n(5),f=n(8),b=n(7),g=n(26),p=n.n(g),E=function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow",id:t},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,r)))},m=function(e){var t=e.robots;return o.a.createElement("div",{className:"card-list"},t.map((function(e){return o.a.createElement(E,{key:e.id,id:e.id,name:e.name,email:e.email})})))},v=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e,r){var o;return Object(d.a)(this,n),(o=t.call(this,e,r)).state={hasError:!1},o}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooops thats not good"):this.props.children}}]),n}(r.Component),O=function(e){e.searchfield;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",onChange:t}))},w=(n(54),function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,i=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",null,"RoboFriends"),o.a.createElement(O,{searchChange:n}),o.a.createElement(v,null,o.a.createElement(m,{robots:i})))}}]),n}(r.Component)),R=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),p.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){return e.data})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(w),S=(n(55),n(12)),y={searchField:""},j={isPending:!1,robots:[],error:""},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=Object(l.createLogger)(),T=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(S.a)(Object(S.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(s.d)(T,Object(s.a)(u.a,_));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{store:N},o.a.createElement(R,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriend","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.18caacdb.chunk.js.map