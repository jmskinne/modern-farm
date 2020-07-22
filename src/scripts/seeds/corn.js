const cornCollection = [
    {
        type:"Corn",
        height: 180,
        output: 6,
        picture:"&#x1f33d"
    },
    {
        type:"Corn",
        height: 180,
        output: 6,
        picture:"&#x1f33d"
    }
]

export const createCorn = () => {
    return cornCollection.slice()
}
