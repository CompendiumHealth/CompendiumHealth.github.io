import{c,b as y,e as u,bG as m,bn as f,bh as b,y as k,M as d,w as _,bK as F,b$ as v,c0 as C,b7 as q,c1 as n}from"./chunks/theme.DAWdUpF4.js";import{J as x,p as w,u as T,m as B,c as P,L as l,s as h,a6 as o,o as S}from"./chunks/framework.Bev6ATEH.js";const A=o("",3),O=o("",4),I=o("",3),V=o("",3),W=o("",3),j=o("",4),J=JSON.parse('{"title":"What is Plot?","description":"","frontmatter":{},"headers":[],"relativePath":"what-is-plot.md","filePath":"what-is-plot.md"}'),N={name:"what-is-plot.md"},z=Object.assign(N,{setup(R){const i=x([{weight:31,height:1.21,sex:"female"},{weight:170,height:2.21,sex:"male"}]);w(()=>{c("./data/athletes.csv",y).then(s=>i.value=s)});const{site:{value:{themeConfig:{sidebar:E}}}}=T(),p=B(()=>{const s=[];return function r(a,t){if(s.push({path:t,link:a.link&&`.${a.link}`}),a.items)for(const e of a.items)r(e,(t==="/"?t:t+"/")+e.text)}({items:E},"/Plot"),s});function g(s){const r=v().nodeSize([1,1])(C().path(e=>e.path)(s)),[a,t]=q(r,e=>e.x);return t-a}return(s,r)=>(S(),P("div",null,[A,l(h(n),{defer:"",mark:u(i.value,{x:"weight",y:"height",stroke:"sex"}),options:{color:{legend:!0}}},null,8,["mark"]),O,l(h(n),{defer:"",mark:m(i.value,f({fillOpacity:"count"},{x:"weight",y:"height",fill:"sex",inset:0})),options:{}},null,8,["mark"]),I,l(h(n),{defer:"",mark:b(i.value,{x:"weight",y:"height",stroke:"sex"}),options:{}},null,8,["mark"]),V,l(h(n),{defer:"",mark:k(i.value,d({y:"count"},{x:"weight",fill:"sex"})),options:{}},null,8,["mark"]),W,l(h(n),{defer:"",options:{grid:!0,marks:[k(i.value,d({y:"count"},{x:"weight",fill:"sex",fy:"sex"})),_([0])]}},null,8,["options"]),j,l(h(n),{options:{axis:null,height:g(p.value)*12,marginTop:4,marginRight:120,marginBottom:4,marginLeft:24,marks:[F(p.value,{path:"path",textStroke:"var(--vp-c-bg)",channels:{href:{value:"link",filter:null}},treeSort:null})]}},null,8,["options"])]))}});export{J as __pageData,z as default};
