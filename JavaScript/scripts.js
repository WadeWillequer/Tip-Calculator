function calculateTip() {
    //Get the values the user inputs(bill amount, service quality, number of people splitting the bill)
    var billAmount = document.getElementById("billAmt").value;
    console.log(billAmount);

    var serviceQuality = document.getElementById("serviceQuality").value;
    console.log(serviceQuality);

    var sharing = document.getElementById("Sharing").value;
    console.log(sharing);

    //Validate input (make sure what they input is usable)

    //Bill amount- words, negative values, empty string

    var amount = Number(billAmount); //Try to turn billAmount into a number

    if (isNaN(amount) || amount <= 0) {
        alert("Invalid input for bill amount");
        return; //Return to exit the function if the bill amount is invalid
    }
    //Service Selector- not choosing an option

    if (serviceQuality === "-- Choose an Option --") {
        alert("Please select your Service Quality");
        return;
    }

    //number of people sharing- words, negative values, empty string, decimal/fraction values
    var people = Number(sharing)

    if (isNaN(people) || people  <= 1) {
        alert("Enter a valid input for how many people shared the bill");
        return; //Return to exit the function if the bill amount is invalid
    }

    //Calculate the amount of tip each person needs to pay

    var tipPerPerson = (billAmount * serviceQuality) / sharing

    tipPerPerson = tipPerPerson.toFixed(2);

    //Display that information to the user
    document.getElementById("tip").style.display = "inline-block"; //Display the hidden tip amnount Div when we're ready to show the div
    document.getElementById("tip").innerText = tipPerPerson;
}




//Function that is executed when the button is clicked

//We are passing an anonymous function (a function without a name to the buttons onclick handler when it's clicked)
document.getElementById("calculateTip").onclick = function () {
    calculateTip();
}