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

onMounted(() => {
  d3.csv("../data/US_rates.csv", d3.autoType).then((data) => (us_costs.value = data));
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

But this only shows the main body of the distribution: in the above plot we've truncated hospitals and private clinics that charge more than $3,000 for this same CPT code. While these prices are much less common, 18,000 providers still have prices $3,000 as their negotiated rate!