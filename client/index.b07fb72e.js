import{S as s,i as t,s as o,e,t as r,c as n,b as a,d as h,f as l,g as c,h as p,j as f,u,a as i,n as g,B as v}from"./chunk.fee82572.js";function m(s,t,o){const e=Object.create(s);return e.post=t[o],e}function d(s){var t,o,i,g,v=s.post.title;return{c(){t=e("li"),o=e("a"),i=r(v),this.h()},l(s){t=n(s,"LI",{},!1);var e=a(t);o=n(e,"A",{rel:!0,href:!0},!1);var r=a(o);i=h(r,v),r.forEach(l),e.forEach(l),this.h()},h(){c(o,"rel","prefetch"),c(o,"href",g="blog/"+s.post.slug)},m(s,e){p(s,t,e),f(t,o),f(o,i)},p(s,t){s.posts&&v!==(v=t.post.title)&&u(i,v),s.posts&&g!==(g="blog/"+t.post.slug)&&c(o,"href",g)},d(s){s&&l(t)}}}function b(s){for(var t,o,u,b,j,E=s.posts,x=[],B=0;B<E.length;B+=1)x[B]=d(m(s,E,B));return{c(){t=i(),o=e("h1"),u=r("Recent posts"),b=i(),j=e("ul");for(var s=0;s<x.length;s+=1)x[s].c();this.h()},l(s){t=h(s,"\r\n\r\n"),o=n(s,"H1",{},!1);var e=a(o);u=h(e,"Recent posts"),e.forEach(l),b=h(s,"\r\n\r\n"),j=n(s,"UL",{class:!0},!1);for(var r=a(j),c=0;c<x.length;c+=1)x[c].l(r);r.forEach(l),this.h()},h(){document.title="Blog",c(j,"class","svelte-1she90c")},m(s,e){p(s,t,e),p(s,o,e),f(o,u),p(s,b,e),p(s,j,e);for(var r=0;r<x.length;r+=1)x[r].m(j,null)},p(s,t){if(s.posts){E=t.posts;for(var o=0;o<E.length;o+=1){const e=m(t,E,o);x[o]?x[o].p(s,e):(x[o]=d(e),x[o].c(),x[o].m(j,null))}for(;o<x.length;o+=1)x[o].d(1);x.length=E.length}},i:g,o:g,d(s){s&&(l(t),l(o),l(b),l(j)),v(x,s)}}}function j({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function E(s,t,o){let{posts:e}=t;return s.$set=(s=>{"posts"in s&&o("posts",e=s.posts)}),{posts:e}}export default class extends s{constructor(s){super(),t(this,s,E,b,o,["posts"])}}export{j as preload};
//# sourceMappingURL=index.b07fb72e.js.map
