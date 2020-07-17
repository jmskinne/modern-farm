import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"




const yearlyPlan = createPlan()
console.log(yearlyPlan)

plantSeeds(yearlyPlan)

const harvestStuff = usePlants()

const harvest = harvestPlants(harvestStuff)

console.log(harvest)

Catalog(harvest)













    



