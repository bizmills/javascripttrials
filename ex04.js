var cat = {
        tiredness: 20,
        hunger: 20,
        lonliness: 3,
        happiness: 15,
        obedientness: -5000,
        feed: function(){
            console.log("Om nom nom")
            this.hunger = this.hunger - 5;
        },
        ignore: function(){
            this.lonliness = this.lonliness +10;
            this.happiness = this.happiness +10;
            console.log("pprrrrrrr bite " + "happiness: " + cat.happiness);
        },
        sleep: function(){
            this.tiredness -= 10;
            this.happiness += 20;
        },
        treats: function () {
            this.obedientness += 2;
            this.happiness += 1;
        },
        pooping: function () {
            this.lonliness -=1;
            this.hunger += 50;
        },
        play: function() {
            this.hunger += 10;
            this.happiness += 5;
        }
};



function displayStatus(cat) {
    var keyList = Object.keys(cat);
    for (var i = 0; i <keyList.length; i++) {
        // console.log(typeof(cat[keyList[i]]));
        if (typeof (cat[keyList[i]]) !== 'function') {
            console.log(keyList[i] + " : " + cat[keyList[i]]);
        }
    }
}

displayStatus(cat);
