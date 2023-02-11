// import { useSettings } from "../components/hooks/useSettings";
import { colors } from "../components/bottle/game-settings";

export const getColors = (settings) => {
    // const { settings } = useSettings();
    let existingColors = [];
    let colorIterator = 0;
    for (let i = 0; i < settings.bottles; i++) {
      if(+colorIterator === +settings.colors) colorIterator = 0;
      for (let j = 0; j < +settings.sections; j++) {
        existingColors.push(colors[colorIterator]);
      }
      colorIterator++;
    }
    return existingColors;
}

// function getColors(bottleNumbers, colorNumbers, bottleSections){
//     let existingColors = [];
//     let colorIterator = 0;
//     for (let i = 0; i < bottleNumbers; i++) {
//       if(+colorIterator === +colorNumbers) colorIterator = 0;
//       for (let j = 0; j < +bottleSections; j++) {
//         existingColors.push(colors[colorIterator]);
//       }
//       colorIterator++;
//     }
//     return existingColors;
// }