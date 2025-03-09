function chopArray(array, numElements) {
    const result = {} ;
    let groupIndex = 1 ;
    let groupName = `grup${groupIndex}`;
    let groupArray = [];

    for (let i = 0 ; i < array.length ; i++ ) {
        groupArray.push(array[i]) ;

        if ( groupArray.length === numElements) {
            result [groupName] = groupArray ;
            groupIndex ++ ;
            groupName = 'group${groupIndex}' ;
            groupArray = [] ;
        }
    }

    if (groupArray.length > 0 ) {
        result.remaining = groupArray ;
    }

    return result ;


}


console.log (chopArray(['a', 'b', 1, 2, 'c', 'd', 525], 4));
console.log (chopArray([10,20,11,30,41,50], 3));
console.log (chopArray([10,20,11,30,41,50], 2));
console.log (chopArray([10,20,11,30,41,50], 1));
console.log (chopArray([10,20,11,30,41,50], 6));
