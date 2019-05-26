function auto(color, speed, type) {
    this.color = color;
    this.speed = speed;
    this.type = type;
    this.flashingLights = function() {
        return("Én egy " + this.color + " " + this.type + " vagyok, és villognak a lámpáim!");
    };
}

var kocsi = [];

kocsi[0] = new auto("szürke", 220, "Volkswagen");
kocsi[1] = new auto("narancssárga", 108, "Polonez");
kocsi[2] = new auto("kék", 350, "Lancia");


exports.kocsik = function () {
    var tempText="";
    kocsi.forEach(element => {
         tempText += "<h1>" + element.flashingLights() + "</h1>";
     });
    return tempText;
}
