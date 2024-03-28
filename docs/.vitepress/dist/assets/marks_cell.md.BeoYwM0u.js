import{b6 as F,r as y,c as p,b as E,H as h,t as m,p as u,q as C,aF as b,ac as f,b7 as _,aZ as B,b8 as v}from"./chunks/theme.DAWdUpF4.js";import{a as q}from"./chunks/alphabet.Chdqe_eo.js";import{h as c}from"./chunks/hadcrut.DdjdvQsX.js";import{J as r,p as A,G as x,c as T,L as k,s as o,a6 as t,o as D}from"./chunks/framework.Bev6ATEH.js";const w=t('<h1 id="cell-mark" tabindex="-1">Cell mark <a class="header-anchor" href="#cell-mark" aria-label="Permalink to &quot;Cell mark&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The cell mark is a variant of the <a href="./rect">rect mark</a> for use when both dimensions are ordinal. See also the <a href="./bar">bar mark</a>.</p></div><p>The <strong>cell mark</strong> draws rectangles positioned in two ordinal dimensions. Hence, the plot’s <em>x</em> and <em>y</em> scales are <a href="./../features/scales">band scales</a>. Cells typically also have a <strong>fill</strong> color encoding.</p><p>For example, the heatmap below shows the decline of <em>The Simpsons</em> after Season 9: high IMDb ratings are dark green, while low ratings are dark pink. (The worst episode ever — cue Comic Book Guy — is season 23’s <a href="https://en.wikipedia.org/wiki/Lisa_Goes_Gaga" target="_blank" rel="noreferrer">“Lisa Goes Gaga”</a>.)</p>',4),P=t(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-simpsons-ratings?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  padding: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  grid: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  x: {axis: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;top&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Season&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  y: {label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Episode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  color: {type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;linear&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, scheme: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PiYG&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(simpsons, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;season&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;number_in_season&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;imdb_rating&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, inset: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(simpsons, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;season&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;number_in_season&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.imdb_rating?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;black&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>With <a href="./../features/facets">faceting</a>, we can produce a calendar of multiple years, where <strong>x</strong> represents week-of-year and <strong>y</strong> represents day-of-week. Below shows almost twenty years of daily changes of the Dow Jones Industrial Average.</p>`,3),S=t(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-dow-jones-calendar?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  padding: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  x: {axis: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  y: {tickFormat: Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">formatWeekday</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;narrow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), tickSize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fy: {tickFormat: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  color: {scheme: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PiYG&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dji, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d3.utcWeek.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(d3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utcYear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(d.Date), d.Date),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUTCDay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      fy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUTCFullYear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (d.Close </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dji[i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].Close) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dji[i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].Close </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((d.Close </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dji[i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].Close) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dji[i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].Close </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      inset: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>The cell mark can be combined with the <a href="./../transforms/group">group transform</a>, which groups data by ordinal value. (The <a href="./../transforms/bin">bin transform</a>, on the other hand, is intended for quantitative data and is typically paired with the <a href="./rect">rect mark</a>.) The heatmap below shows the maximum observed temperature by month (<strong>y</strong>) and date (<strong>x</strong>) in Seattle from 2012 through 2015.</p>`,3),j=t(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-seattle-temperature-heatmap?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  padding: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  y: {tickFormat: Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">formatMonth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;short&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(seattle, Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;max&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUTCDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUTCMonth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;temp_max&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      inset: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>A one-dimensional cell is produced by specifying only <strong>x</strong> or only <strong>y</strong>. The plot below collapses the history of <em>The Simpsons</em> to a single line.</p>`,3),I=t(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-simpsons-barcode?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  x: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ticks: simpsons.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.number_in_season </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.id),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tickFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> simpsons.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x).season,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Season&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    labelAnchor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;right&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    labelArrow: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  color: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;linear&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scheme: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PiYG&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(simpsons, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;imdb_rating&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Here the <em>x</em>-scale domain contains the <em>id</em> of every episode. An ordinal scale by default draws a tick for every domain value; setting <strong>ticks</strong> to just the first episode of each season prevents overlapping labels. The <strong>tickFormat</strong> function finds the row corresponding to the episode id and returns the corresponding <em>season</em> number.</p></div><p>One-dimensional cells can be a compact alternative to a bar chart, where the <em>fill</em> color of the cell replaces the length of the bar. However, position is a more salient encoding and should be preferred to color if space is available.</p>`,4),N=t('<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-color-cells?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(alphabet, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;letter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;frequency&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>When ordinal data is regular, such as the yearly observations of the warming stripes below, use the <strong>interval</strong> scale option to enforce uniformity and show gaps for missing data. It can be set to a named interval such as <em>hour</em> or <em>day</em>, a number for numeric intervals, a <a href="https://d3js.org/d3-time#_interval" target="_blank" rel="noreferrer">d3-time interval</a>, or a custom implementation.</p>',3),O=t(`<a class="plot-fork no-icon" href="https://observablehq.com/@observablehq/plot-ordinal-scale-interval-2?intent=fork" target="_blank" title="Open on Observable">Fork</a><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  x: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ticks: d3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ticks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">extent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hadcrut, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.year), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tickFormat: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    interval: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// recommended in case of missing data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  color: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scheme: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BuRd&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  marks: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hadcrut, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;year&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;anomaly&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When an ordinal scale domain has high cardinality, the <strong>ticks</strong> scale option can be used to specify which ticks to label. Alternatively, consider using a quantitative or temporal scale instead, as by switching to a <a href="./bar">bar mark</a>.</p></div><h2 id="cell-options" tabindex="-1">Cell options <a class="header-anchor" href="#cell-options" aria-label="Permalink to &quot;Cell options&quot;">​</a></h2><p>In addition to the <a href="./../features/marks#mark-options">standard mark options</a>, including insets and rounded corners, the following optional channels are supported:</p><ul><li><strong>x</strong> - the horizontal position; bound to the <em>x</em> scale, which must be <em>band</em></li><li><strong>y</strong> - the vertical position; bound to the <em>y</em> scale, which must be <em>band</em></li></ul><p>If <strong>x</strong> is not specified, the cell will span the full horizontal extent of the plot (or facet). Likewise if <strong>y</strong> is not specified, the cell will span the full vertical extent of the plot (or facet). Typically either <strong>x</strong>, <strong>y</strong>, or both are specified; use a <a href="./frame">frame mark</a> to decorate the plot’s frame.</p><p>The <strong>stroke</strong> defaults to <em>none</em>. The <strong>fill</strong> defaults to <em>currentColor</em> if the stroke is <em>none</em>, and to <em>none</em> otherwise.</p><h2 id="cell" tabindex="-1">cell(<em>data</em>, <em>options</em>) <a class="header-anchor" href="#cell" aria-label="Permalink to &quot;cell(*data*, *options*) {#cell}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(simpsons, {x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;number_in_season&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;season&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fill: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;imdb_rating&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>Returns a new cell with the given <em>data</em> and <em>options</em>. If neither the <strong>x</strong> nor <strong>y</strong> options are specified, <em>data</em> is assumed to be an array of pairs [[<em>x₀</em>, <em>y₀</em>], [<em>x₁</em>, <em>y₁</em>], [<em>x₂</em>, <em>y₂</em>], …] such that <strong>x</strong> = [<em>x₀</em>, <em>x₁</em>, <em>x₂</em>, …] and <strong>y</strong> = [<em>y₀</em>, <em>y₁</em>, <em>y₂</em>, …].</p><h2 id="cellX" tabindex="-1">cellX(<em>data</em>, <em>options</em>) <a class="header-anchor" href="#cellX" aria-label="Permalink to &quot;cellX(*data*, *options*) {#cellX}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cellX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(simpsons.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.imdb_rating))</span></span></code></pre></div><p>Equivalent to <a href="#cell">cell</a>, except that if the <strong>x</strong> option is not specified, it defaults to [0, 1, 2, …], and if the <strong>fill</strong> option is not specified and <strong>stroke</strong> is not a channel, the fill defaults to the identity function and assumes that <em>data</em> = [<em>x₀</em>, <em>x₁</em>, <em>x₂</em>, …].</p><h2 id="cellY" tabindex="-1">cellY(<em>data</em>, <em>options</em>) <a class="header-anchor" href="#cellY" aria-label="Permalink to &quot;cellY(*data*, *options*) {#cellY}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Plot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cellY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(simpsons.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d.imdb_rating))</span></span></code></pre></div><p>Equivalent to <a href="#cell">cell</a>, except that if the <strong>y</strong> option is not specified, it defaults to [0, 1, 2, …], and if the <strong>fill</strong> option is not specified and <strong>stroke</strong> is not a channel, the fill defaults to the identity function and assumes that <em>data</em> = [<em>y₀</em>, <em>y₁</em>, <em>y₂</em>, …].</p>`,17),W=JSON.parse('{"title":"Cell mark","description":"","frontmatter":{},"headers":[],"relativePath":"marks/cell.md","filePath":"marks/cell.md"}'),V={name:"marks/cell.md"},X=Object.assign(V,{setup(Y){const n=r([]),d=r([]),l=r(F(y(1,29),y(1,26),(a,g)=>({season:a,number_in_season:g})));return A(()=>{p("../data/dji.csv",E).then(a=>n.value=a),p("../data/seattle-weather.csv",E).then(a=>d.value=a),p("../data/simpsons.csv",E).then(a=>l.value=a)}),(a,g)=>{const e=x("PlotRender");return D(),T("div",null,[w,k(e,{defer:"",options:{padding:0,grid:!0,x:{axis:"top",label:"Season"},y:{label:"Episode"},color:{type:"linear",scheme:"PiYG"},marks:[h(l.value,{x:"season",y:"number_in_season",fill:"imdb_rating",inset:.5}),m(l.value,{x:"season",y:"number_in_season",text:s=>{var i;return(i=s.imdb_rating)==null?void 0:i.toFixed(1)},fill:"black",title:"title"})]}},null,8,["options"]),P,k(e,{defer:"",options:{padding:0,x:{axis:null},y:{tickFormat:u("en","narrow"),tickSize:0},fy:{tickFormat:""},color:{scheme:"PiYG"},marks:[h(n.value,{x:s=>B.count(v(s.Date),s.Date),y:s=>s.Date.getUTCDay(),fy:s=>s.Date.getUTCFullYear(),fill:(s,i)=>i>0?(s.Close-n.value[i-1].Close)/n.value[i-1].Close:NaN,title:(s,i)=>i>0?((s.Close-n.value[i-1].Close)/n.value[i-1].Close*100).toFixed(1):NaN,inset:.5})]}},null,8,["options"]),S,k(e,{defer:"",options:{padding:0,y:{tickFormat:C("en","short")},marks:[h(d.value,b({fill:"max"},{x:s=>s.date.getUTCDate(),y:s=>s.date.getUTCMonth(),fill:"temp_max",inset:.5}))]}},null,8,["options"]),j,k(e,{defer:"",options:{x:{ticks:l.value.filter(s=>s.number_in_season===1).map(s=>s.id),tickFormat:s=>l.value.find(i=>i.id===s).season,label:"Season",labelAnchor:"right",labelArrow:!0},color:{type:"linear",scheme:"PiYG"},marks:[h(l.value,{x:"id",fill:"imdb_rating"})]}},null,8,["options"]),I,k(e,{mark:h(o(q),{x:"letter",fill:"frequency"}),options:{}},null,8,["mark"]),N,k(e,{options:{x:{ticks:f(..._(o(c),s=>s.year),10),tickFormat:"d",interval:1,label:null},color:{scheme:"BuRd"},marks:[h(o(c),{x:"year",fill:"anomaly"})]}},null,8,["options"]),O])}}});export{W as __pageData,X as default};
