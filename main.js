var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

var select = document.getElementById('planets');
 
// function to populate dropdown menu
 planets.forEach(function(element){
  // initialize a variable that creates option element
   var newOption = document.createElement("option");
  // initialize a variable that accesses planet names from array
   var planetNameOption = document.createTextNode(element[0]);
  // attaches planet names to option element
   newOption.appendChild(planetNameOption);
  // attaches option element to select element called #planets
   select.appendChild(newOption);
 })

var weight = document.getElementById("user-weight").value;

// runs the input weight * selected planet's gravity
function calculateWeight(weight, planetName) {
    var planetName = document.getElementById("planets").selectedIndex;
    var newGravity = planets[planetName][1];
    return weight * newGravity;
  }

// handleClickEvent runs onclick of #calculate-button
  function handleClickEvent() {
    // Create a variable called userWeight and assign the value of the user's weight.
    var userweight = parseFloat(document.getElementById("user-weight").value);
    // Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = document.getElementById("planets").value;
    // Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userweight, planetName);
    // Write code to display the message shown in the screenshot.
    document.getElementById("output").innerHTML = 'If you were on ' + planetName + ',' + ' you would weigh ' + result + 'lbs!';
  }