import bridalBouquet from "./bridalBouquet.js";
import crown from './Crown.js'
import arch from "./arch.js";
const formState = {

    ceremony: [
        bridalBouquet,
        crown,
    ],
    reception: [
        arch
    ]
}

export default formState;

// const formState2 = {
//     reception: {
//         ceremonyArrangement: {
//             arrangement: "Bridal Bouqet",
//             quantity: 1
//         },
//         flowerColors: Colors,
//         flowerPreferences: Preferences
//     },
//     ceremony: {
//         ceremonyArrangement: {
//             arrangement: "Bridal Bouqet" | "bridesmaid bouqet" | "boutenire",
//             quantity: 1
//         },
//         flowerColors: Colors,
//         flowerPreferences: Preferences
//     }
// }
