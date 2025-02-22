// JS uses weak typing
var influence_points = 0

// This is how to "send" a JS variable to the html web page
window.onload = function() {
    document.getElementById("influence_points_display").innerHTML = influence_points
    
    document.getElementById("class_testing_display").innerHTML = 0
    document.getElementById("team_name_display").innerHTML = "None"
}

// // Displays a pop-up that freezes the screen until confirmed
// window.alert("Your team has " + influence_points + " points!")

// Create functions that can be called back in the html file
function increase_points() {
    influence_points++

    // Just for testing, doesn't actually display anything on the web page
    console.log(influence_points)

    // You have to update the new value of the variable manually
    document.getElementById("influence_points_display").innerHTML = influence_points
}


// Experimenting with classes in JS
class Team {
    constructor(name, point_total, image_file, upgrade_level) {
        this.name = name;
        this.point_total = point_total;
        this.image_file = image_file;
        this.upgrade_level = upgrade_level;
    }

    display_name() {
        return this.name;
    }

    display_points() {
        return this.point_total;
    }

    display_image() {
        return this.image_file;
    }

    display_level() {
        return this.upgrade_level;
    }

    increase_points(point_display) {
        this.point_total++;
        document.getElementById(point_display).innerHTML = this.point_total
    }
}

// // Make a new Team called Testing
// const Testing = new Team("Testing", 0, "img.png", 1);


// Handles form submission for creating a new team
document.addEventListener('DOMContentLoaded', init, false);
function init(){
    var team_form = document.getElementById("team_form")
    team_form.addEventListener("submit", function(event) {
        event.preventDefault()
        var team_name = document.getElementById("team_name").value
        Current = new Team(team_name, 0, "img.png", 1)
        document.getElementById("team_name_display").innerHTML = Current.display_name()
        Current.display_points() // Not sure if this does anything
    })
};

