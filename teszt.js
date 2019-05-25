function auto(color, speed, type) {
    this.color = color;
    this.speed = speed;
    this.type = type;
    this.flashingLights = function() {
        console.log("Villognak a lámpáim!");
    };
}

//var auto1 = new auto;

var auto1 = new auto("Narancssárga", 108, "Polonez");


