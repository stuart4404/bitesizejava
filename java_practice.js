const spicerack = { 
    spicenames: {
        tumeric: "full",
        cumin: "empty",
        bayLeaves: 10,
    },
    spicey: false,
    spiceyness: function (spicestatus){
        this.spicey = spicestatus
    },
    tumericlevel: true,
    tumericfill: function(tumericlevel){
    }
};

console.log("the level spice rack contains",spicerack);
console.log("current spiceyness level",spicerack.spicey)

console.log("the tumeric is",tumeric)





