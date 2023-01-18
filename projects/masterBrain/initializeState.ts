import collections from "./constants";
import createGameArray from "./utils";

const initializeState = (name: string = '' ) => {

    type CollectionKey = keyof typeof collections;
  
    const collectionName = name ? name : Object.keys(collections)[0];
    
    const collection = collections[collectionName as CollectionKey];
    
    const gameArray = createGameArray(collection, collection.length/2);
    
    return(
      {
        threshold: collection.length,
        gameArray: gameArray,
        collectionName: name,
        collect: [],
        stageContents: [],
        stageIds: [],
        steps: 0,
        gameEnd: false
    }
    )
  }

  export default initializeState