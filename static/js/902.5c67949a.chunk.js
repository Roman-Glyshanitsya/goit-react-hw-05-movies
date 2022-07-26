"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[902],{3902:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(5861),a=n(885),c=n(7757),s=n.n(c),i=n(2791),u=n(501),o=n(6871),p=n(8565),l="MovieDetails_container__o8VqJ",d="MovieDetails_imageWrapper__ImpNM",h=n(184);function f(e){var t=e.movie;return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("div",{className:d,children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.poster_path),alt:t.title})}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h1",{children:[t.title," (",t.release_date.slice(0,4),")"]}),(0,h.jsxs)("p",{children:["User Score: ",Math.round(10*t.vote_average),"%"]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:t.overview}),(0,h.jsx)("h2",{children:"Genres"}),t.genres.map((function(e){return e.name+" "}))]})]})}function v(){var e,t,n=(0,o.UO)().movieId,c=(0,o.TH)(),l=(0,i.useState)(null),d=(0,a.Z)(l,2),v=d[0],m=d[1],x=(0,i.useState)(!1),j=(0,a.Z)(x,2),g=j[0],w=j[1],k=(0,i.useState)(null),y=(0,a.Z)(k,2),_=y[0],b=y[1];(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,(0,p.hG)(n);case 4:t=e.sent,m(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b(e.t0);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var U=null!==(e=null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,h.jsxs)("div",{children:[g&&"Loading...",_&&(0,h.jsxs)("p",{children:["An error occured: ",_.message]}),(0,h.jsx)(u.rU,{to:U,children:(0,h.jsx)("button",{children:"Go back"})}),v&&(0,h.jsx)(f,{movie:v}),(0,h.jsx)("h4",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"/movies/".concat(n,"/cast"),state:{from:U},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"/movies/".concat(n,"/reviews"),state:{from:U},children:"Reviews"})})]}),(0,h.jsx)(i.Suspense,{children:(0,h.jsx)(o.j3,{})})]})}},8565:function(e,t,n){n.d(t,{Tg:function(){return o},hG:function(){return h},jf:function(){return v},oV:function(){return x},qF:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),i=n.n(s);i().defaults.baseURL="https://api.themoviedb.org/3";var u="a44bb9523e0650c67fadd4918a95b1b0";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/trending/movie/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=902.5c67949a.chunk.js.map