import{c as E,b as d,w as r,bw as p,aC as g,G as c,f as y,e as u}from"./chunks/theme.DAWdUpF4.js";import{p as F}from"./chunks/penguins.C-n8z74Q.js";import{J as m,p as _,G as o,c as b,q as s,a,L as t,s as f,a6 as n,o as C}from"./chunks/framework.Bev6ATEH.js";const v={id:"image-mark",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#image-mark","aria-label":'Permalink to "Image mark <VersionBadge version="0.3.0" />"'},"​",-1),B=s("p",null,[a("The "),s("strong",null,"image mark"),a(" draws images centered at the given position in "),s("strong",null,"x"),a(" and "),s("strong",null,"y"),a(". It is often used to construct scatterplots in place of a "),s("a",{href:"./dot"},"dot mark"),a(". For example, the chart below, based on one by "),s("a",{href:"https://observablehq.com/@rlesser/when-presidents-fade-away",target:"_blank",rel:"noreferrer"},"Robert Lesser"),a(", shows the favorability of U.S. presidents over time alongside their portraits.")],-1),w=n(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-image-scatterplot?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  inset: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  x: {label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;First inauguration date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  y: {grid: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Net favorability (%)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, tickFormat: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruleY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(presidents, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;First Inauguration Date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Very Favorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Somewhat Favorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Very Unfavorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Somewhat Unfavorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Portrait URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>Images are drawn in input order by default. This dataset is ordered chronologically, and hence above the more recent presidents are drawn on top. You can change the order with the <a href="./../transforms/sort">sort transform</a>.</p><p>With the <strong>r</strong> option, images will be clipped to circles of the given radius. Use the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio" target="_blank" rel="noreferrer"><strong>preserveAspectRatio</strong> option</a> to control which part of the image appears within the circle; below, we favor the top part of the image to show the presidential head.</p>`,4),T=n(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-image-medals?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  x: {inset: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;First inauguration date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  y: {insetTop: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, grid: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Any opinion (%)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, tickFormat: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruleY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(presidents, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;First Inauguration Date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Very Favorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Somewhat Favorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Very Unfavorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Somewhat Unfavorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Portrait URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      r: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      preserveAspectRatio: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xMidYMin slice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can also use the <strong>r</strong> channel as a size encoding, and the <strong>rotate</strong> channel, as with dots.</p></div><p>The <strong>r</strong> option works well with the <a href="./../transforms/dodge">dodge transform</a> for an image beeswarm plot. This chart isn’t particularly interesting because new presidents are inaugurated at a fairly consistent rate, but at least it avoids overlapping portraits.</p>`,4),A=n(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-image-dodge?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  inset: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">280</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      presidents,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dodgeY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;First Inauguration Date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        r: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// clip to a circle</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        preserveAspectRatio: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xMidYMin slice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// try not to clip heads</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Portrait URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>The default size of an image is only 16×16 pixels. This may be acceptable if the image is a small glyph, such as a categorical symbol in a scatterplot. But often you will want to set <strong>width</strong>, <strong>height</strong>, or <strong>r</strong> to increase the image size.</p>`,3),S=n(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-image-scatterplot-2?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  aspectRatio: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  grid: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  x: {label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Favorable opinion (%)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  y: {label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Unfavorable opinion (%)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruleY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruleX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(presidents, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Very Favorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Somewhat Favorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Very Unfavorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Somewhat Unfavorable %&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Portrait URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>If — <em>for reasons</em> — you want to style the plot with a background image, you can do that using the top-level <strong>style</strong> option rather than an image mark. Below, Kristen Gorman’s penguins dataset is visualized atop her photograph of sea ice near Palmer Station on the Antarctic peninsula, where she collected the measurements.</p>`,3),P=n(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-background-image?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  margin: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  inset: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  grid: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  style: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    padding: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;black&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    background: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;url(../sea-ice.jpg)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    backgroundSize: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cover&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">frame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(penguins, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;culmen_length_mm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;culmen_depth_mm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;white&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, stroke: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;black&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="image-options" tabindex="-1">Image options <a class="header-anchor" href="#image-options" aria-label="Permalink to &quot;Image options&quot;">​</a></h2><p>The required <strong>src</strong> option specifies the URL (or relative path) of each image. If <strong>src</strong> is specified as a string that starts with a dot, slash, or URL protocol (<em>e.g.</em>, “https:”) it is assumed to be a constant; otherwise it is interpreted as a channel.</p><p>In addition to the <a href="./../features/marks#mark-options">standard mark options</a>, the following optional channels are supported:</p>`,5),x=n("<li><strong>x</strong> - the horizontal position; bound to the <em>x</em> scale</li><li><strong>y</strong> - the vertical position; bound to the <em>y</em> scale</li><li><strong>width</strong> - the image width (in pixels)</li><li><strong>height</strong> - the image height (in pixels)</li>",4),I=s("strong",null,"r",-1),V=s("em",null,"r",-1),R=s("strong",null,"rotate",-1),D=n("<p>If either of the <strong>x</strong> or <strong>y</strong> channels are not specified, the corresponding position is controlled by the <strong>frameAnchor</strong> option.</p><p>The <strong>width</strong> and <strong>height</strong> options default to 16 pixels (unless <strong>r</strong> is specified) and can be specified as either a channel or constant. When the width or height is specified as a number, it is interpreted as a constant; otherwise it is interpreted as a channel. Images with a nonpositive width or height are not drawn. If a <strong>width</strong> is specified but not a <strong>height</strong>, or vice versa, the one defaults to the other. Images do not support either a fill or a stroke.</p><p>The <strong>r</strong> option, if not null (the default), enables circular clipping; it may be specified as a constant in pixels or a channel. Use the <strong>preserveAspectRatio</strong> option to control which part of the image is clipped. Also defaults the <strong>width</strong> and <strong>height</strong> to twice the effective radius.</p><p>The following image-specific constant options are also supported:</p>",4),U=n('<li><strong>frameAnchor</strong> - how to position the image within the frame; defaults to <em>middle</em></li><li><strong>preserveAspectRatio</strong> - the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio" target="_blank" rel="noreferrer">aspect ratio</a>; defaults to <em>xMidYMid meet</em></li><li><strong>crossOrigin</strong> - the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/crossorigin" target="_blank" rel="noreferrer">cross-origin</a> behavior</li>',3),N=s("strong",null,"imageRendering",-1),j=s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/image-rendering",target:"_blank",rel:"noreferrer"},"image-rendering attribute",-1),Y=s("em",null,"auto",-1),M=n('<p>To crop the image instead of scaling it to fit, set <strong>preserveAspectRatio</strong> to <em>xMidYMid slice</em>. The <strong>imageRendering</strong> option may be set to <em>pixelated</em> to disable bilinear interpolation on enlarged images; however, note that this is not supported in WebKit.</p><p>Images are drawn in input order, with the last data drawn on top. If sorting is needed, say to mitigate overplotting, consider a <a href="./../transforms/sort">sort transform</a>.</p><h2 id="image" tabindex="-1">image(<em>data</em>, <em>options</em>) <a class="header-anchor" href="#image" aria-label="Permalink to &quot;image(*data*, *options*) {#image}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(presidents, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;inauguration&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;favorability&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;portrait&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>Returns a new image with the given <em>data</em> and <em>options</em>. If neither the <strong>x</strong> nor <strong>y</strong> nor <strong>frameAnchor</strong> options are specified, <em>data</em> is assumed to be an array of pairs [[<em>x₀</em>, <em>y₀</em>], [<em>x₁</em>, <em>y₁</em>], [<em>x₂</em>, <em>y₂</em>], …] such that <strong>x</strong> = [<em>x₀</em>, <em>x₁</em>, <em>x₂</em>, …] and <strong>y</strong> = [<em>y₀</em>, <em>y₁</em>, <em>y₂</em>, …].</p>',5),K=JSON.parse('{"title":"Image mark","description":"","frontmatter":{},"headers":[],"relativePath":"marks/image.md","filePath":"marks/image.md"}'),O={name:"marks/image.md"},X=Object.assign(O,{setup(L){const e=m([]);return _(()=>{E("../data/us-president-favorability.csv",d).then(k=>e.value=k)}),(k,z)=>{const h=o("VersionBadge"),l=o("PlotRender");return C(),b("div",null,[s("h1",v,[a("Image mark "),t(h,{version:"0.3.0"}),a(),q]),B,t(l,{defer:"",options:{inset:20,x:{label:"First inauguration date"},y:{grid:!0,label:"Net favorability (%)",tickFormat:"+f"},marks:[r([0]),p(e.value,{x:"First Inauguration Date",y:i=>i["Very Favorable %"]+i["Somewhat Favorable %"]-i["Very Unfavorable %"]-i["Somewhat Unfavorable %"],src:"Portrait URL",width:40,title:"Name"})]}},null,8,["options"]),w,t(l,{defer:"",options:{x:{inset:20,label:"First inauguration date"},y:{insetTop:4,grid:!0,label:"Any opinion (%)",tickFormat:"+f"},marks:[r([0]),p(e.value,{x:"First Inauguration Date",y:i=>i["Very Favorable %"]+i["Somewhat Favorable %"]+i["Very Unfavorable %"]+i["Somewhat Unfavorable %"],src:"Portrait URL",r:20,preserveAspectRatio:"xMidYMin slice",title:"Name"})]}},null,8,["options"]),T,t(l,{defer:"",options:{inset:20,height:280,marks:[p(e.value,g({x:"First Inauguration Date",r:20,preserveAspectRatio:"xMidYMin slice",src:"Portrait URL",title:"Name"}))]}},null,8,["options"]),A,t(l,{defer:"",options:{aspectRatio:1,grid:!0,x:{label:"Favorable opinion (%)"},y:{label:"Unfavorable opinion (%)"},marks:[r([0]),c([0]),p(e.value,{x:i=>i["Very Favorable %"]+i["Somewhat Favorable %"],y:i=>i["Very Unfavorable %"]+i["Somewhat Unfavorable %"],src:"Portrait URL",title:"Name"})]}},null,8,["options"]),S,t(l,{defer:"",options:{margin:30,inset:10,grid:!0,style:{padding:"10px",color:"black",background:"url(../sea-ice.jpg)",backgroundSize:"cover"},marks:[y(),u(f(F),{x:"culmen_length_mm",y:"culmen_depth_mm",fill:"white",stroke:"black"})]}},null,8,["options"]),P,s("ul",null,[x,s("li",null,[I,a(" - the image radius; bound to the "),V,a(" scale "),t(h,{version:"0.6.6"})]),s("li",null,[R,a(" - the rotation angle in degrees clockwise "),t(h,{version:"0.6.6"})])]),D,s("ul",null,[U,s("li",null,[N,a(" - the "),j,a("; defaults to "),Y,a(" (bilinear) "),t(h,{version:"0.6.4"})])]),M])}}});export{K as __pageData,X as default};
