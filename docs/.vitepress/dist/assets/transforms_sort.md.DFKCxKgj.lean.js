import{k as c,J as g,m as u,p as b,G as y,c as v,q as s,a as i,w as d,a8 as C,L as p,t as B,aa as _,s as T,a6 as n,o as q}from"./chunks/framework.Bev6ATEH.js";import{c as m,b as P,z as w,B as S,e as A,bq as x,w as I,m as V,az as j,aC as D}from"./chunks/theme.DAWdUpF4.js";import{f as R}from"./chunks/feature.DXDMwmIR.js";import{m as N}from"./chunks/mesh.DUGB6pHu.js";import{c as O}from"./chunks/cars.Do83JJ0T.js";const M=s("h1",{id:"sort-transform",tabindex:"-1"},[i("Sort transform "),s("a",{class:"header-anchor",href:"#sort-transform","aria-label":'Permalink to "Sort transform"'},"​")],-1),z=s("p",null,[i("The "),s("strong",null,"sort transform"),i(" sorts a mark’s index to change the effective order of data. The sort transform affects the order in which a mark’s graphical elements are drawn ("),s("a",{href:"https://en.wikipedia.org/wiki/Z-order",target:"_blank",rel:"noreferrer"},"z-order"),i("), which can have a dramatic effect when these elements overlap. For example, see the bubble map of U.S. county population below; when the null sort order is used for input order, many small dots are hidden underneath larger ones.")],-1),U={class:"label-input"},Y=s("a",{class:"plot-fork no-icon",href:"https://observablehq.com/@observablehq/plot-dot-sort?intent=fork",target:"_blank",title:"Open on Observable"},"Fork",-1),J={class:"language-js vp-adaptive-theme"},W=s("button",{title:"Copy Code",class:"copy"},null,-1),G=s("span",{class:"lang"},"js",-1),L={class:"shiki shiki-themes github-light github-dark vp-code"},X=s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Plot."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"plot"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")],-1),Z=s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  projection: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"albers-usa"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")],-1),$=s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  marks: [")],-1),H=n("",1),K=n("",1),Q=n("",1),ss=s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      fill: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"currentColor"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")],-1),is={class:"line"},as=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      stroke: ",-1),ts={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},es=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",",-1),ns=s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      strokeWidth: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")],-1),ls=n("",1),hs=s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }))")],-1),os=s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ]")],-1),rs=s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")],-1),ps=n("",3),ks=n("",4),ds={class:"label-input"},Es={style:{"margin-left":"0.5em"}},cs={style:{"margin-left":"0.5em"}},gs=n("",7),us=s("strong",null,"channel",-1),ys=s("strong",null,"order",-1),_s=s("em",null,"ascending",-1),ms=s("em",null,"descending",-1),Fs={style:{"white-space":"nowrap"}},fs=s("em",null,"-name",-1),bs=s("em",null,"name",-1),vs=s("code",null,'sort: {channel: "-r"}',-1),Cs=s("strong",null,"r",-1),Bs=n("",7),Is=JSON.parse('{"title":"Sort transform","description":"","frontmatter":{},"headers":[],"relativePath":"transforms/sort.md","filePath":"transforms/sort.md"}'),Ts={name:"transforms/sort.md"},Vs=Object.assign(Ts,{setup(qs){const k=c(!0),o=c("ascending"),E=g([]),l=g(null),F=u(()=>l.value?N(l.value,l.value.objects.states):{type:null}),f=u(()=>l.value?R(l.value,l.value.objects.counties).features:[]);return b(()=>{m("../data/bls-metro-unemployment.csv",P).then(h=>E.value=h),Promise.all([w("../data/us-counties-10m.json"),m("../data/us-county-population.csv")]).then(([h,t])=>{const r=new Map(t.map(e=>[e.state+e.county,+e.population]));h.objects.counties.geometries.forEach(e=>e.properties.population=r.get(e.id)),l.value=h})}),(h,t)=>{const r=y("PlotRender"),e=y("VersionBadge");return q(),v("div",null,[M,z,s("p",null,[s("label",U,[i(" Sort by descending radius (r): "),d(s("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=a=>k.value=a)},null,512),[[C,k.value]])])]),p(r,{defer:"",options:{projection:"albers-usa",marks:[S(F.value,{strokeOpacity:.4}),A(f.value,x({r:a=>a.properties.population,fill:"currentColor",stroke:"var(--vp-c-bg)",strokeWidth:1,sort:k.value?{channel:"-r"}:null}))]}},null,8,["options"]),Y,s("div",J,[W,G,s("pre",L,[s("code",null,[X,i(`
`),Z,i(`
`),$,i(`
`),H,i(`
`),K,i(`
`),Q,i(`
`),ss,i(`
`),s("span",is,[as,s("span",ts,'"'+B(h.$dark?"black":"white")+'"',1),es]),i(`
`),ns,i(`
`),ls,i(`
`),hs,i(`
`),os,i(`
`),rs])])]),ps,p(r,{options:{y:{grid:!0,label:"Unemployment (%)"},color:{domain:[!1,!0],range:["#ccc","var(--vp-c-red)"]},marks:[I([0]),V(E.value,{x:"date",y:"unemployment",z:"division",sort:a=>/, MI /.test(a.division),stroke:a=>/, MI /.test(a.division)})]}},null,8,["options"]),ks,s("p",null,[s("span",ds,[i(" Sort x order: "),s("label",Es,[d(s("input",{type:"radio",name:"order",value:"ascending","onUpdate:modelValue":t[1]||(t[1]=a=>o.value=a)},null,512),[[_,o.value]]),i(" ascending")]),s("label",cs,[d(s("input",{type:"radio",name:"order",value:"descending","onUpdate:modelValue":t[2]||(t[2]=a=>o.value=a)},null,512),[[_,o.value]]),i(" descending")])])]),p(r,{options:{height:180,marks:[j(T(O),D({x:"weight (lb)",title:"name",fill:"currentColor",sort:{channel:"x",order:o.value}}))]}},null,8,["options"]),gs,s("p",null,[i("In the object case, the "),us,i(" option specifies the name of the channel, while the "),ys,i(" option specifies "),_s,i(" (the default) or "),ms,i(" order. You can also use the shorthand "),s("span",Fs,[fs,i(),p(e,{version:"0.6.7"})]),i(" to sort by descending order of the channel with the given "),bs,i(". For example, "),vs,i(" will sort by descending radius ("),Cs,i(").")]),Bs])}}});export{Is as __pageData,Vs as default};
