"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[477],{1477:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),s=e(2791),i=e(6871),o=e(8565),p="Cast_item__a0CDL",f=e(184);function h(t){var n=t.cast;return(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Cast"}),(0,f.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.profile_path,r=t.name;return(0,f.jsxs)("li",{className:p,children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e),alt:r,width:"100px"}),r]},n)}))})]})}function l(){var t=(0,i.UO)().movieId,n=(0,s.useState)(null),e=(0,a.Z)(n,2),c=e[0],p=e[1],l=(0,s.useState)(null),d=(0,a.Z)(l,2),v=d[0],m=d[1];return(0,s.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.jf)(t);case 3:e=n.sent,p(e.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),m(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,f.jsxs)("div",{children:[v&&(0,f.jsxs)("p",{children:["An error occurred: ",v.message]}),c&&(0,f.jsx)(h,{cast:c})]})}},8565:function(t,n,e){e.d(n,{Tg:function(){return o},hG:function(){return l},jf:function(){return v},oV:function(){return x},qF:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var i="a44bb9523e0650c67fadd4918a95b1b0";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=477.c8dccde9.chunk.js.map