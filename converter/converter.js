// This codeblock represents a converter

// The function takes an argument for getting the units of conversion
function conversionBetweenUnits(value) {
    // the selected conversion unit is pulled as text 
    let selectedUnit = value.options[value.selectedIndex].text;

    // writing some html element dynamically within the div block whose id is 'text'
    document.getElementById('text').innerHTML =
        `<h3>Give your value for converting from ${selectedUnit}</h3>
        <input type="text" id="inputVal" placeholder="Type your value">
        <input type="submit" id="submit" value="Convert">`;


    // Getting the submit element and adding an event listener in it.
    let submit = document.getElementById('submit');
    submit.addEventListener('click', conversion);

    // This function is the event listener function of the submit button
    function conversion() {
        // gets the user input by pulling the value
        let input = document.getElementById('inputVal').value;

        // creating a new variable for storing the output
        let output;

        // checking which unit is selected and setting the output according to the selection
        if (selectedUnit === "Grams to Pounds") {
            // .toFixed() limits the float value to certain position
            output = (input * 0.00220462).toFixed(3) + " Pounds";
        }

        else if (selectedUnit === "Grams to Cups") {
            output = (input * (1 / 250)).toFixed(3) + " Cup";
        }

        else if (selectedUnit === "Pounds to Cups") {
            output = (input * (1 / 0.55156)).toFixed(3) + " Cups";
        }

        else if (selectedUnit === "Pounds to Grams") {
            output = (input * 453.592).toFixed(3) + " Grams";
        }

        else if (selectedUnit === "Cups to Grams") {
            output = (input * 250).toFixed(3) + " Grams";
        }

        else if (selectedUnit === "Cups to Pounds") {
            output = (input * 0.55156).toFixed(3) + " Pounds";
        }

        else {
            output = "Invalid input";
        }

        // Writing the output in the div whose id 'output'
        document.getElementById('output').innerHTML =
            `Your converted value is <strong>${output}</strong>!!!`;
    }
}