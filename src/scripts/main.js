import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"




const yearlyPlan = createPlan()
console.log(yearlyPlan)


const testSeeds = plantSeeds(yearlyPlan)
const harvestStuff = usePlants(testSeeds)
console.log(harvestStuff)














    



