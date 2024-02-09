const aritmethicOperation = function(){
    console.log("Executing Operation...")
    const operator1 = parseFloat(document.getElementById("operator1").value);
    const operator2 = parseFloat(document.getElementById("operator2").value);
    const operator = document.getElementById("operator").value;

    let result = 0;

    switch(operator){
        case "+":
            result = operator1 + operator2;
            break;

        case "-":
            result = operator1 - operator2;
            break;

        case "*":
            result = operator1 * operator2;
            break;

        case "/":
            result = operator1 / operator2;
            break;
        
        default:
            result = "Operator invalid.";
    }
    


    document.getElementById("result").innerHTML=" Result: "+ result;

}