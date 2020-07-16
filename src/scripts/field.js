let growingPlants = []
export const addPlant = (seedObj) => {
    growingPlants.push(seedObj)
}

export const usePlants = () => {
    return growingPlants.slice()
}