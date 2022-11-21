import React from "react";
import howManyParks from "./parks/howManyParks";

// src/ColoradoStateParks.js
import * as RMFunctions from "./parks/RockyMountain";

import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";

console.log(parkTrees);
// > "Aspen and Pine"

parkWildlife();
// > "Elk, Bighorn Sheep, Moose"

console.log(RMFunctions.trees);
// => "Aspen and Pine"

RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"

RMFunctions.elevation();
// => Attempted import error

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
