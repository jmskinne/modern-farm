import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"




const yearlyPlan = createPlan()
console.log(yearlyPlan)


const harvestPlants = (plantsArray) => {
    let seedObj = []
    for (plantHarvesting of plantsArray) {
            const numberPlanted = Harvesting.output
                if(plantHarvest.type === "Corn") {
                    seedObj.push(plantHarvesting) * numberPlanted / 2
                } else {
                    seedObj.push(plantHarvesting) * numberPlanted
                }
        

    }
    return seedObj
}


harvestPlants(yearlyPlan)











    



