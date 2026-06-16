


function calculateBMI(weight, height) {

    let newheight = height / 100;
    let num = weight / (newheight ** 2);
    let idea = num.toFixed(1);

    return idea;
}


console.log(calculateBMI(58, 178));






