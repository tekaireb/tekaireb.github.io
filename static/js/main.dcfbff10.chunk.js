(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],[,,,,function(e,t,n){},,function(e){e.exports=JSON.parse('[{"title":"IoT & Cloud Researcher","company":"RACELab","location":"Santa Barbara, CA","start_date":"July 1, 2020","end_date":""},{"title":"Processor Design Researcher","company":"CS Early Research Scholars Program","location":"Santa Barbara, CA","start_date":"September 1, 2019","end_date":"June 1, 2020"}]')},function(e){e.exports=JSON.parse('[{"title":"Nimblex Dictionary","company":"","start_date":"March 1, 2021","end_date":"","link":"https://github.com/tekaireb/nimblex_dictionary","description":["Blazing fast C++ dictionary for the Terminal:","\u2022 Trie (prefix tree) representation for fast search and autocomplete.","\u2022 Fuzzy search using Levenshtein distance with dynamic programming.","\u2022 Interactive GUI using ncurses library."],"show":true,"tags":["C++","ncurses"]},{"title":"Nimblex Dictionary","company":"","start_date":"March 1, 2021","end_date":"","link":"https://github.com/tekaireb/nimblex_dictionary","description":["Blazing fast C++ dictionary for the Terminal:","\u2022 Trie (prefix tree) representation for fast search and autocomplete.","\u2022 Fuzzy search using Levenshtein distance with dynamic programming.","\u2022 Interactive GUI using ncurses library."],"show":true,"tags":["C++","ncurses"]},{"title":"Nimblex Dictionary","company":"","start_date":"March 1, 2021","end_date":"","link":"https://github.com/tekaireb/nimblex_dictionary","description":["Blazing fast C++ dictionary for the Terminal:","\u2022 Trie (prefix tree) representation for fast search and autocomplete.","\u2022 Fuzzy search using Levenshtein distance with dynamic programming.","\u2022 Interactive GUI using ncurses library."],"show":true,"tags":["C++","ncurses"]},{"title":"Nimblex Dictionary","company":"","start_date":"March 1, 2021","end_date":"","link":"https://github.com/tekaireb/nimblex_dictionary","description":["Blazing fast C++ dictionary for the Terminal:","\u2022 Trie (prefix tree) representation for fast search and autocomplete.","\u2022 Fuzzy search using Levenshtein distance with dynamic programming.","\u2022 Interactive GUI using ncurses library."],"show":true,"tags":["C++","ncurses"]},{"title":"Nimblex Dictionary","company":"","start_date":"March 1, 2021","end_date":"","link":"https://github.com/tekaireb/nimblex_dictionary","description":["Blazing fast C++ dictionary for the Terminal:","\u2022 Trie (prefix tree) representation for fast search and autocomplete.","\u2022 Fuzzy search using Levenshtein distance with dynamic programming.","\u2022 Interactive GUI using ncurses library."],"show":true,"tags":["C++","ncurses"]},{"title":"Paxos Decentralized Database","company":"","start_date":"Feb 1, 2021","end_date":"March 1, 2021","link":"https://github.com/tekaireb/paxos-database","description":["\u2022 Created distributed key-value database in Python with full replication across nodes.","\u2022 Used Multi-Paxos algorithm to reach consensus, backed by private blockchain and disk backup to prevent tampering and ensure fault-tolerance.","\u2022 Made separate server and client nodes so users can interact with the database without hosting data."],"show":true,"tags":["Python","Paxos","Distributed Systems","Fault Tolerance"]}]')},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(5),i=n.n(s),c=(n(12),n(13),n(6)),o=n(7),l=n(3),d=(n(14),n(0));function u(e){var t=Object(a.useState)("Tyler Ekaireb"),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(!1),c=Object(l.a)(i,2),o=c[0],u=c[1],b=["Tyler Ekaireb","an engineer","a programmer","a tinkerer","a learner","a smoothie-maker"],h=0,j=12;function m(){j<=b[h].length?(o||u(!0),s(b[h].substring(0,j++)),setTimeout(m,200)):(u(!1),setTimeout(p,5e3))}function p(){j>0?(o||u(!0),s(b[h].substring(0,--j)),setTimeout(p,100)):(u(!1),++h>=b.length&&(h=0),setTimeout(m,1200))}return Object(a.useEffect)((function(){b.length&&setTimeout(p,4e3)}),[]),Object(d.jsxs)("div",{className:"intro",children:[Object(d.jsx)("p",{className:"greeting",children:"Hello"}),Object(d.jsx)("div",{class:"typewriter",children:Object(d.jsxs)("p",{children:["I'm ",Object(d.jsx)("span",{class:"typed_text",children:r}),Object(d.jsx)("span",{class:"cursor "+(o?"typing":""),children:"\xa0"})]})}),Object(d.jsx)("div",{className:"down_button",onClick:function(){return document.querySelectorAll(".projects")[0].scrollIntoView()},children:"\u2193"})]})}n(16);function b(e){return Object(d.jsxs)("div",{className:"project",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"project_header",children:e.project.title}),Object(d.jsx)("p",{className:"project_description",children:e.project.description.map((function(e){return Object(d.jsxs)("span",{children:[e,Object(d.jsx)("br",{})]})}))})]}),Object(d.jsx)("div",{className:"project_tags",children:e.project.tags.map((function(e){return Object(d.jsx)("span",{className:"project_tag",children:e})}))})]})}n(17);function h(e){return Object(d.jsxs)("div",{class:"projects",children:[Object(d.jsx)("h1",{children:"Projects"}),Object(d.jsx)("h3",{class:"projects_subheader",children:"view more on GitHub"}),Object(d.jsx)("div",{className:"projects_grid",children:e.projects.map((function(e){return Object(d.jsx)(b,{project:e})}))})]})}n(4);function j(e){var t,n,a=e.jobs[e.jobs.length-1],r=e.jobs[0],s=new Date(a.start_date),i=""!==r.end_date?new Date(r.end_date):new Date,c=(n=i,(t=s).getMonth()-n.getMonth()+12*(t.getFullYear()-n.getFullYear())),o=Array(Math.abs(c)+1).fill().map((function(e,t){return{m:(t+s.getMonth())%12,y:s.getFullYear()+(t+s.getMonth())/12}}));return console.log(o),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"timeline_event"}),Object(d.jsx)("div",{className:"axis",children:o.map((function(e,t){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"line",style:{left:10*t,width:e.m?1:2,bottom:e.m?30:25,background:e.m?"rgb(180, 245, 240, 0.1)":"rgb(180, 245, 240, 0.3)"}}),0===e.m&&Object(d.jsx)("div",{className:"year",style:{left:10*t-15},children:e.y})]})}))})]})}function m(e){return Object(d.jsxs)("div",{class:"jobs",children:[Object(d.jsx)("h1",{children:"Jobs"}),Object(d.jsx)("div",{className:"jobs_container",children:Object(d.jsxs)("div",{className:"jobs_timeline",children:[Object(d.jsx)("div",{className:"events"}),Object(d.jsx)(j,{jobs:e.jobs})]})})]})}var p=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{}),Object(d.jsx)(m,{jobs:c}),Object(d.jsx)(h,{projects:o})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.dcfbff10.chunk.js.map