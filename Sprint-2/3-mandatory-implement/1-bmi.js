
function calculateBMI(weight, height) {

    let newheight = height / 100;
    let num = weight / (newheight ** 2);
    let result = num.toFixed(1);

    return result;
}


console.log(calculateBMI(58, 178));







