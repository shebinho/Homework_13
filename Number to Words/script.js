var submit = document.getElementById("submit");

submit.addEventListener("click", function(e){
    e.preventDefault();
    var oneDigit = ["one","two","three","four","five","six","seven","eight", "nine"];
    var teenDigit = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var tensDigit = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    var bigDigit = ["","thousand","million","billion"];
    
    var user_input = document.getElementById("userInput");
    var inputVal = user_input.value;
    var result = document.getElementById("result");

    var numberToWords = function(inputVal){
        if (inputVal === 0){
        return "";
        }
        if (inputVal < 10){
        return oneDigit[inputVal - 1];
        }
        if((inputVal > 10) && (inputVal < 20)){
        return teenDigit [inputVal - 10 - 1];
        }
        if(inputVal < 100){
            var one_num = inputVal % 10;
            var tens_num = Math.floor(inputVal / 10);
            if (one_num === 0){
                return tensDigit[tens_num - 1];
            }
            else{
                return tensDigit[tens_num - 1] + " " + oneDigit[one_num - 1];
            }

        }

        

        
    }
    result.innerHTML = numberToWords(inputVal);
});