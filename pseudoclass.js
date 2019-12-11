function Building(floors){
    // this = {};
    this.what = "building";
    this.floors = floors;
    // return this;
}

// { what: "buidling", floors:3 }

var myHouse = new Building(3);


//put methods on prototype so you're not making new instances of methods
//on each construction of a new obj
Building.prototype.countFloors = function(){
    console.log("I have", this.floors,"floors");
}

myHouse.countFloors();