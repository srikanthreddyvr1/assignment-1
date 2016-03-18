/**
 * Created by srika on 3/18/2016.
 */
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName +""+this.age+""+this.eyeColor
    };
}
person.prototype.nationality = "English";

var sri = new person("sriaknth", "sanikommu", 25, "green");
var kanth = new person("sanikommu", "sriaknthreddy", 25, "blue");
document.getElementById("reddy");
innerHTML = " sri is " + sri.eyeColor + " kanth is " + kanth.age;

document.getElementById("reddy");
innerHTML ="sri is " + sri.nationality;
document.getElementById("reddy")
innerHTML = "sri is " + sri.name();


