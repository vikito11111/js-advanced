var person = ( function (input) {
    var name = input[0];
    var personalInfo = {
        age: input[1],
        weight: input[2],
        height: input[3] / 100
    }
    var bmi = Math.ceil(personalInfo.weight / (personalInfo.height ** 2));
    var status;

    if (bmi < 18.5) {
        status = 'underweight';
    } 
    else if (bmi < 25) {
        status = 'normal';
    }
    else if (bmi < 30) {
        status = 'obsese';
    }

    var result = {
        name: name,
        personalInfo: personalInfo,
        BMI: bmi,
        status: status
    }

    console.log(result);

    return result;
})(["Peter", 29, 75, 182]);