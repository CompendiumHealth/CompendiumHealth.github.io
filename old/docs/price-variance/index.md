<script setup>

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {computed, ref, onMounted, shallowRef} from "vue";
import {useData} from "vitepress";

const marginTop = ref(20);
const marginRight = ref(20);
const marginBottom = ref(30);
const marginLeft = ref(40);

const us_costs = shallowRef([
  {}
]);

const yelp_dist = shallowRef([
  {}
]);

onMounted(() => {
  d3.csv("../data/US_rates.csv", d3.autoType).then((data) => (us_costs.value = data));
  d3.csv("../data/NYC_rates.csv", d3.autoType).then((data) => (us_costs.value = data));
  d3.csv("../data/yelp_quality_scatter.csv", d3.autoType).then((data) => (yelp_dist.value = data));
});

</script>

# How much do healthcare costs really vary?

While two different providers in your area might both be in-network and offer the same service, their prices could vary drastically! Below, we visualize the distribution of 1,263,180 in-network negotiated rates for a pelvic MRI with and without contrast (CPT: 72197) across the United States for patients on the [United Healthcare Choice Plus plan](https://www.uhc.com/individuals-families/health-plans-through-work/choice-plus): 

:::plot hidden defer
```js
Plot.plot({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  y: {grid: true},
  x: {domain: [0, 3000]},
  marks: [
    Plot.rectY(us_costs, Plot.binX({y: "count"}, {x: "all_rates"})),
    Plot.ruleY([0])
  ]
})
```
:::

But this only shows the main body of the distribution: in the above visual we've truncated hospitals and private clinics that charge more than $3,000 for this CPT code. There are more than **18,000 providers and organizations** that have negotiated rates for more than $3,000; many of these providers happen to be renowned American academic medical centers!

# But how do prices relate to perceived health quality?

Well, that's a great question. Here's the parsed data for NYC and SF Bay Area medical organizations that offer this particular pelvic MRI - we've processed it so that we're only showing organizations that self-identify as diagnostic radiology centers, using CMS taxonomy codes. We join these datasets with Yelp star ratings, which we can use as a proxy for "quality". Upon initial examination, most of the Yelp ratings are low, with an approximately normal distribution centered around 2.5 stars (it seems like New Yorkers are more critical in their healthcare reviews):

:::plot hidden defer
```js
Plot.plot({
  y: {grid: true},
  x: {domain: [1, 5]},
  color: {legend: true},
  marks: [
    Plot.rectY(yelp_dist, Plot.binX({y2: "count"}, {x: {thresholds: 20, value: "score"}, fill: "location", mixBlendMode: "multiply"})),
    // Plot.rectY(yelp_dist, Plot.binX({y: "count"}, {filter: (d) => d.location === "NYC", x: "score", fill: "location", insetLeft: 4})),
    // Plot.rectY(yelp_dist, Plot.binX({y: "count"}, {filter: (d) => d.location === "Bay Area", x: "score", fill: "location", insetRight: 4})),
    Plot.ruleY([0])
  ]
})
```
:::

Amusingly, when we consider a comparison of negotiated-rate versus Yelp ratings, there really isn't much of a correlation. If you hover over the plot below, you can explore the outliers among the various NYC and Bay Area medical organizations (such as Stanford, which has an average 2.2 Yelp score and an exorbitant $2.6k cost).

:::plot hidden defer
```js
Plot.plot({
  color: {legend: true},
  marks: [
    Plot.dot(yelp_dist, {x: "score", y: "all_rates", stroke: "location", channels: {name: "business_name"}, tip: true})
  ]
})
```
:::