import * as Plot from "@observablehq/plot";

export async function singleValueBar() {
  return Plot.plot({
    marks: [
      Plot.barY({length: 1}, {x: ["foo"], y1: [0], y2: [0]}),
      Plot.ruleX(["foo"], {stroke: "red", y1: [0], y2: [0]})
    ]
  });
}
