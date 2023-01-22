import { TNumArrayDoubleDim } from "./types";

const predicate = (a: number,b: number) => {
    return Math.random() - 0.5;
}

export const randomInitialArray = () => {

    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,];

    const randomNumbers = numbers.sort(predicate);
    
    let doubleDimensional = [];
    
   for(let i = 0; i < 4; i++){
      let fourArray = randomNumbers.slice(i*4, i*4+4);
      doubleDimensional.push(fourArray);
    }
    
    doubleDimensional[3].push(0);
    
    return doubleDimensional;
  }

export const isWinner = (a: TNumArrayDoubleDim, b: TNumArrayDoubleDim) => {
    let result = a.every((el,i) => a[i].every((el,j) => el === b[i][j]));
     return result;
   }
   
export const seeNull = () => {
  
}

export const getDirection = () => {
  
}