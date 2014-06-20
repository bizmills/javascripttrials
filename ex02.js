function fibonacciSet(max) {
    if (max > 1) {
        var fibList = [1];
        var currentFib = 1;
        while (currentFib < max) {
            fibList.push(currentFib);
            currentFib =
                fibList[fibList.length-1] +
                fibList[fibList.length-2];
        }
       return fibList;
    }
    else {
        return [1,1];}
    }


function even(n) {
    return (n % 2 === 0)
}

function sum(list) {
    var sumValue = 0;
    for (i = 0; i < list.length; i++){
        sumValue = list[i] + sumValue;
    }
    return sumValue;
}

function filter(fn,list){
    var outList = [];
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
            if (fn(item) === true){
                outList.push(item);
            }
    }
    return outList; 
    }
    
console.log(sum(filter(even, fibonacciSet(4000000))));
