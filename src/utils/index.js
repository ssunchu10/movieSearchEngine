export const pageArray = (totalPages, arraySize) => {

    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    // console.log("No of pages: ",pages);
    const result = [];
    let currentArray = [];

    for(const i of pages){
        currentArray.push(i);
        if(currentArray.length == arraySize){
            result.push(currentArray);
            currentArray = [];
        }
    }

    if(currentArray.length > 0){
        result.push(currentArray)
    }
    // console.log("Result Array: ", result);
    return result;
  }

