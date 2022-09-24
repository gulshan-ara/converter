function conversionBetweenUnits(value) {
    
    let selectedUnit = value.options[value.selectedIndex].text;

    document.getElementById('text').innerHTML =
        `<p>Give your value for converting from <br> ${selectedUnit}</p>
        <input type="text" id="inputVal" placeholder="Type your value">
        <input type="submit" id="submit" value="Convert">`;


    let submit = document.getElementById('submit');
    submit.addEventListener('click', conversion);

    function conversion() {
        let input = document.getElementById('inputVal').value;

        let output;

        if (selectedUnit === "Grams to Pounds") {
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
