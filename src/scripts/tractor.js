import { createAsparagus} from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()


export const plantSeeds = (planArray) => {
    for(const plantingPlan of planArray) {
        for(const plantRows of plantingPlan) {
            if (plantRows === "Asparagus") {
                addPlant(asparagusSeed)
            } else if (plantRows === "Corn") {
                 addPlant(cornSeed)
            } else if (plantRows === "Potato") {
                addPlant(potatoSeed)

                
            } else if (plantRows === "Soybean") {
                addPlant(soybeanSeed)

                
            } else if (plantRows === "Sunflower") {
                addPlant(sunflowerSeed)

                
            } else if (plantRows === "Wheat") {
                addPlant(wheatSeed)

                
            }

                
             
        }
    }
    
}