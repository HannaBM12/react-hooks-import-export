import React from "react";
import hagridHouse from "./houses/whoseHouse";
import HooflePoof from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";
import {colors, values} from './houses/Gryffindor'

colors()
values()
GryffFunctions.colors();
// => 'Scarlet and Gold'

GryffFunctions.gryffMascot();
// => 'The Lion'

GryffFunctions.values();
// => ReferenceError: values is not defined

export default function Hogwarts() {
  hagridHouse();

  return (
    <div>
      <HooflePoof />
      
				{/* Will render `NOBODY CARES ABOUT US`, even though we renamed `Hufflepuff`
				to `HooflePoof` */}
			
    </div>
  );
}
