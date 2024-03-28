<script setup>

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

</script>

# How much do healthcare costs really vary?

While two different providers in your area might both be in-network and offer the same service, their prices could vary drastically! Below, we visualize the prices for a pelvic MRI with and without contrast (CPT: 72197) across the United States for patients on the [United Healthcare Choice Plus plan](https://www.uhc.com/individuals-families/health-plans-through-work/choice-plus): 

:::plot
```js
Plot.rectY({length: 10000}, Plot.binX({y: "count"}, {x: d3.randomNormal()})).plot()
```
:::

<!-- <Example spec="/specs/yaml/moving-average-all-providers.yaml" /> -->

This shows the distribution of negotiated rates for a particular MRI across licensed providers in the United States. When we subset...