import{c,b as y,e as u,bG as m,bn as f,bh as b,y as k,M as d,w as _,bK as F,b$ as v,c0 as C,b7 as q,c1 as n}from"./chunks/theme.DAWdUpF4.js";import{J as x,p as w,u as T,m as B,c as P,L as l,s as h,a6 as o,o as S}from"./chunks/framework.Bev6ATEH.js";const A=o('<h1 id="what-is-plot" tabindex="-1">What is Plot? <a class="header-anchor" href="#what-is-plot" aria-label="Permalink to &quot;What is Plot?&quot;">​</a></h1><p><strong>Observable Plot</strong> is a free, open-source, JavaScript library for visualizing tabular data, focused on accelerating exploratory data analysis. It has a concise, memorable, yet expressive interface, featuring <a href="./features/scales">scales</a> and <a href="./features/marks">layered marks</a> in the <em>grammar of graphics</em> style popularized by <a href="https://en.wikipedia.org/wiki/Leland_Wilkinson" target="_blank" rel="noreferrer">Leland Wilkinson</a> and <a href="https://en.wikipedia.org/wiki/Hadley_Wickham" target="_blank" rel="noreferrer">Hadley Wickham</a> and inspired by the earlier ideas of <a href="https://en.wikipedia.org/wiki/Jacques_Bertin" target="_blank" rel="noreferrer">Jacques Bertin</a>. And there are <a href="https://observablehq.com/@observablehq/plot-gallery" target="_blank" rel="noreferrer">plenty of examples</a> to learn from and copy-paste.</p><p>In the spirit of <em>show don’t tell</em>, here’s a scatterplot of body measurements of athletes from the <a href="https://flother.is/2017/olympic-games-data/" target="_blank" rel="noreferrer">2016 Summer Olympics</a>.</p>',3),O=o(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-olympians-scatterplot?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(olympians, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;weight&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, stroke: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({color: {legend: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}})</span></span></code></pre></div><p>A plot specification assigns columns of data (<em>weight</em>, <em>height</em>, and <em>sex</em>) to visual properties of marks (<strong>x</strong>, <strong>y</strong>, and <strong>stroke</strong>). Plot does the rest! You can configure much more, if needed, but Plot’s goal is to help you get a meaningful visualization quickly to accelerate analysis.</p><p>This scatterplot suffers from overplotting: many dots are drawn in the same spot, so it’s hard to perceive density. We can fix this by applying a <a href="./transforms/bin">bin transform</a> to group athletes of similar height and weight (and sex), and then use opacity to encode the number of athletes in the bin.</p>`,4),I=o('<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-olympians-bins?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(olympians, Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({fillOpacity: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;count&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;weight&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, inset: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>Or we could try the <a href="./marks/density">density mark</a>.</p>',3),V=o('<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-olympians-density?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">density</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(olympians, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;weight&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, stroke: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>A simpler take on this data is to focus on one dimension: weight. We can use the bin transform again to make a histogram with weight on the <em>x</em>-axis and frequency on the <em>y</em>-axis. This plot uses a <a href="./marks/rect">rect mark</a> and an implicit <a href="./transforms/stack">stack transform</a>.</p>',3),W=o('<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-vertical-histogram?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rectY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(olympians, Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">binX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;count&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;weight&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>Or if we’d prefer to show the two distributions separately as small multiples, we can <a href="./features/facets">facet</a> the data along <em>y</em> (keeping the <em>fill</em> encoding for consistency, and adding grid lines and a rule at <em>y</em> = 0 to improve readability).</p>',3),j=o(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-faceted-histogram?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  grid: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rectY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(olympians, Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">binX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;count&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;weight&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fy: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruleY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="what-can-plot-do" tabindex="-1">What can Plot do? <a class="header-anchor" href="#what-can-plot-do" aria-label="Permalink to &quot;What can Plot do?&quot;">​</a></h2><p>Because marks are composable, and because you can extend Plot with custom marks, you can make almost anything with it — much more than the charts above! The following <a href="./marks/tree">tree diagram</a> of the documentation gives a sense of what’s ”in the box” with Plot. Peruse our <a href="https://observablehq.com/@observablehq/plot-gallery" target="_blank" rel="noreferrer">gallery of examples</a> for more inspiration.</p>`,4),J=JSON.parse('{"title":"What is Plot?","description":"","frontmatter":{},"headers":[],"relativePath":"what-is-plot.md","filePath":"what-is-plot.md"}'),N={name:"what-is-plot.md"},z=Object.assign(N,{setup(R){const i=x([{weight:31,height:1.21,sex:"female"},{weight:170,height:2.21,sex:"male"}]);w(()=>{c("./data/athletes.csv",y).then(s=>i.value=s)});const{site:{value:{themeConfig:{sidebar:E}}}}=T(),p=B(()=>{const s=[];return function r(a,t){if(s.push({path:t,link:a.link&&`.${a.link}`}),a.items)for(const e of a.items)r(e,(t==="/"?t:t+"/")+e.text)}({items:E},"/Plot"),s});function g(s){const r=v().nodeSize([1,1])(C().path(e=>e.path)(s)),[a,t]=q(r,e=>e.x);return t-a}return(s,r)=>(S(),P("div",null,[A,l(h(n),{defer:"",mark:u(i.value,{x:"weight",y:"height",stroke:"sex"}),options:{color:{legend:!0}}},null,8,["mark"]),O,l(h(n),{defer:"",mark:m(i.value,f({fillOpacity:"count"},{x:"weight",y:"height",fill:"sex",inset:0})),options:{}},null,8,["mark"]),I,l(h(n),{defer:"",mark:b(i.value,{x:"weight",y:"height",stroke:"sex"}),options:{}},null,8,["mark"]),V,l(h(n),{defer:"",mark:k(i.value,d({y:"count"},{x:"weight",fill:"sex"})),options:{}},null,8,["mark"]),W,l(h(n),{defer:"",options:{grid:!0,marks:[k(i.value,d({y:"count"},{x:"weight",fill:"sex",fy:"sex"})),_([0])]}},null,8,["options"]),j,l(h(n),{options:{axis:null,height:g(p.value)*12,marginTop:4,marginRight:120,marginBottom:4,marginLeft:24,marks:[F(p.value,{path:"path",textStroke:"var(--vp-c-bg)",channels:{href:{value:"link",filter:null}},treeSort:null})]}},null,8,["options"])]))}});export{J as __pageData,z as default};
