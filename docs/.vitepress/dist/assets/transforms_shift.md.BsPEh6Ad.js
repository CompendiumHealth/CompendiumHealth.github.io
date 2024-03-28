import{k as m,J as g,p as _,G as h,c as E,q as s,a as o,L as l,w as y,a9 as c,t as r,a6 as t,o as u}from"./chunks/framework.Bev6ATEH.js";import{c as f,b as v,bj as F,bl as C}from"./chunks/theme.DAWdUpF4.js";const b={id:"shift-transform",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#shift-transform","aria-label":'Permalink to "Shift transform <VersionBadge version="0.6.12" pr="1896" />"'},"​",-1),w=t('<p>The <strong>shift transform</strong> is a specialized <a href="./map">map transform</a> that derives an output <strong>x1</strong> channel by shifting the <strong>x</strong> channel; it can be used with the <a href="./../marks/difference">difference mark</a> to show change over time. For example, the chart below shows the price of Apple stock. The <span style="border-bottom:solid #01ab63 3px;">green region</span> shows when the price went up over the given interval, while the <span style="border-bottom:solid #4269d0 3px;">blue region</span> shows when the price went down.</p>',1),x={class:"label-input",style:{display:"flex"}},B=s("span",{style:{display:"inline-block",width:"7em"}},"Shift (days):",-1),S={style:{"font-variant-numeric":"tabular-nums"}},P=t('<div style="display:none;"><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">differenceY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(aapl, Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shiftX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shift</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} days`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Close&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({y: {grid: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}})</span></span></code></pre></div></div>',1),q={class:"language-js vp-adaptive-theme"},V=s("button",{title:"Copy Code",class:"copy"},null,-1),A=s("span",{class:"lang"},"js",-1),D={class:"shiki shiki-themes github-light github-dark vp-code"},I={class:"line"},N=t('<span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">differenceY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(aapl, Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shiftX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span>',5),X={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},j=t('<span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Close&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({y: {grid: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}})</span>',9),R=t('<p>When looking at year-over-year growth, the chart is mostly green, implying that you would make a profit by holding Apple stock for a year. However, if you bought in 2015 and sold in 2016, you would likely have lost money. Try adjusting the slider to a shorter or longer interval: how does that affect the typical return?</p><h2 id="shiftX" tabindex="-1">shiftX(<em>interval</em>, <em>options</em>) <a class="header-anchor" href="#shiftX" aria-label="Permalink to &quot;shiftX(*interval*, *options*) {#shiftX}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shiftX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;7 days&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Close&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>Derives an <strong>x1</strong> channel from the input <strong>x</strong> channel by shifting values by the given <em>interval</em>. The <em>interval</em> may be specified as: a name (<em>second</em>, <em>minute</em>, <em>hour</em>, <em>day</em>, <em>week</em>, <em>month</em>, <em>quarter</em>, <em>half</em>, <em>year</em>, <em>monday</em>, <em>tuesday</em>, <em>wednesday</em>, <em>thursday</em>, <em>friday</em>, <em>saturday</em>, <em>sunday</em>) with an optional number and sign (<em>e.g.</em>, <em>+3 days</em> or <em>-1 year</em>); or as a number; or as an implementation — such as d3.utcMonth — with <em>interval</em>.floor(<em>value</em>), <em>interval</em>.offset(<em>value</em>), and <em>interval</em>.range(<em>start</em>, <em>stop</em>) methods.</p><p>The shiftX also transform aliases the <strong>x</strong> channel to <strong>x2</strong> and applies a domain hint to the <strong>x2</strong> channel such that by default the plot shows only the intersection of <strong>x1</strong> and <strong>x2</strong>. For example, if the interval is <em>+1 year</em>, the first year of the data is not shown.</p>',5),$=JSON.parse('{"title":"Shift transform","description":"","frontmatter":{},"headers":[],"relativePath":"transforms/shift.md","filePath":"transforms/shift.md"}'),M={name:"transforms/shift.md"},z=Object.assign(M,{setup(Y){const e=m(365),i=g([]);return _(()=>{f("../data/aapl.csv",v).then(a=>i.value=a)}),(a,n)=>{const p=h("VersionBadge"),d=h("PlotRender");return u(),E("div",null,[s("h1",b,[o("Shift transform "),l(p,{version:"0.6.12",pr:"1896"}),o(),T]),w,s("p",null,[s("label",x,[B,y(s("input",{type:"range","onUpdate:modelValue":n[0]||(n[0]=k=>e.value=k),min:"0",max:"1000",step:"1"},null,512),[[c,e.value,void 0,{number:!0}]]),s("span",S,r(e.value),1)])]),l(d,{mark:F(i.value,C(`${e.value} days`,{x:"Date",y:"Close"})),options:{y:{grid:!0}}},null,8,["mark"]),P,s("div",q,[V,A,s("pre",D,[s("code",null,[s("span",I,[N,s("span",X,'"'+r(e.value)+' days"',1),j])])])]),R])}}});export{$ as __pageData,z as default};
