function BMICALCULATOR(weight, height){  
var bmi = (weight/Math.pow(height,2));
    return Math.round(bmi);
}
BMICALCULATOR(65,1.8);
