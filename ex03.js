function duplicates(list) {
    var dups = [];
   for (var i = 0; i < list.length; i++) {
        for (var j = i+1; j < list.length; j++) {
            if (list[i] === list[j]) {
                var existInDups = false
                for (var k = 0; k < dups.length; k++) {
                    if (dups[k] === list[i]) {
                    existInDups = true
                    }
                }
                if (existInDups === false) {
                    dups.push(list[i]);
                }
            }
        }
    }
    return dups;
}
console.log(duplicates(["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 
    19, "19", 19 === "19", 6, false, false]));
    
// can use array.indexOf(item) which returns index if in array and -1 if not
