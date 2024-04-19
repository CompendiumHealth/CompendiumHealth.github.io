<script setup>

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

</script>

# How much do healthcare costs really vary?

While two different providers in your area might both be in-network and offer the same service, their prices could vary drastically! Below, we visualize the prices for a pelvic MRI with and without contrast (CPT: 72197) across the United States for patients on the [United Healthcare Choice Plus plan](https://www.uhc.com/individuals-families/health-plans-through-work/choice-plus): 

:::plot https://observablehq.com/@zephyrhealth/plot-all-histogram
```js
Plot.plot({
  y: {grid: true},
  marks: [
    Plot.rectY(data,
               Plot.binX(
                {y: "count"},
                {x: "all_rates"},
              )),
    Plot.ruleY([0])
  ]
})
```
:::

This shows the distribution of negotiated rates for a particular MRI across licensed providers in the United States. Visually, there's a huge disparity in negotiated in-network rates.