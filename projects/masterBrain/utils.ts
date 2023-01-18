const shuffler = (arr: Array<number>) => {

    for(let i = arr.length - 1; i > 0; i--){

        let j = Math.floor(Math.random()*(i + 1));

        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr
}

const createGameArray = (collection: Array<number>, rowsCount: number) => {
  const doubled = [...collection, ...collection];
  const shuffled = shuffler(doubled);
  
  const doubleDimensionArray = shuffled.reduce((acc: Array<Array<number>>, item, index) => {
;
    if(index%rowsCount){
      acc[acc.length - 1].push(item);
    }else{
      acc.push([item])
    }
    return acc;
  }, [])
  return doubleDimensionArray;
}

export default createGameArray;