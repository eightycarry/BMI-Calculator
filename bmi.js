$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            height: {
                required: true,
                min: 59,
                max: 79,
                digits: true
            },

            weight: {
                required: true,
                min: 88,
                max: 353,
                digits: true
            }
        };

    // Object containing the error messages
    var myMessages =
        {
            height: {
                required: "Must enter your height",
                min: "Height must be between 59 and 79 inches",
                max: "Height must be between 59 and 79 inches",
                digits: "Numbers only please!"
            },

            weight: {
                required: "Must enter your weight",
                min: "Weight must be between 88lbs and 353 lbs",
                max: "Weight must be between 88lbs and 353 lbs",
                digits: "Numbers only please!"
            }
        }

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: calculateBMI,
            rules: myRules,
            messages: myMessages
        }
    );

    $("#bmiButton").click(calculateBMI);

    function calculateBMI() {
        //get the height of the user in inches
        var height = parseFloat($("#height").val());

        //get the weight of the user in inches
        var weight = parseFloat($("#weight").val());

        // square the height value
        var heightSquared = height * height;

        //divide weight by new height value
        var val = weight / heightSquared;

        //multiply val by 703 to get BMI
        var bmi = val * 703.0;

        //out-of-range messages and output if within range
        if (height >= 59 && height <= 79 && weight >= 88 && weight <= 353) {
            if (bmi < 18.5) {
                $("#bmiP").text(`Your BMI (Body Mass Index) is ${bmi.toFixed(1)}.`);
                $("#bmiC").text(`You are underweight`);
            } else if (bmi < 24.9) {
                $("#bmiP").text(`Your BMI (Body Mass Index) is ${bmi.toFixed(1)}.`);
                $("#bmiC").text(`You are at a healthy weight`);
            } else if (bmi < 29.9) {
                $("#bmiP").text(`Your BMI (Body Mass Index) is ${bmi.toFixed(1)}.`);
                $("#bmiC").text(`You are overweight`);
            } else if (bmi > 30.0) {
                $("#bmiP").text(`Your BMI (Body Mass Index) is ${bmi.toFixed(1)}.`);
                $("#bmiC").text(`You are obese`);
            }
        } else {
            $("#bmiP").text(onpagehide);
            $("#bmiC").text(`Please enter a height within  59-79 inches and/or a weight within  88-353 pounds.`);
        }

        $(".outputBMI").show();
    }



});