if (problemObj.problem = ""){
    var num1 = getRandomInt(0, radioValue);
    var num2 = getRandomInt(0, radioValue);
    var sign;
    var correctAnswer;
    var variableArray = ["a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
    var randomIndex = Math.floor(Math.random() * variableArray.length);
    var variable = variableArray[randomIndex];
   
    if (radioType == "addsub"){
        var signForOperation = Math.random();
        if (signForOperation < .5 || radioType == "sub"){
            sign = " - ";
             num1 = Math.max(num1,num2);
             num2 = Math.min(num1,num2);
        }
        else if (signForOperation >= .5 || radioType == "add"){
            sign = " + ";
        }
    }
    else if (radioType == "add"){
        sign = " + ";
    }
    else if (radioType == "sub"){
        sign = " - ";
    }
    else if (radioType == "multdiv"){
        var signForOperation = Math.random();
        if (signForOperation < .5){
            sign = " / ";
            num1 = Math.max(num1,num2)+1;
            num2 = getFactors(num1);
        }
        else if (signForOperation >= .5 || radioType == "mult"){
            sign = " * ";
        }
    }
    else if (radioType == "mult"){
        sign = " * ";
    }
    else if (radioType == "div"){
        sign = " / ";
        num1 = Math.max(num1,num2)+1;
        num2 = getFactors(num1);
    }
         
        // var problem = (num1.toString()+" "+ sign +" "+ variable);
        problemObj.num1 = num1;
        problemObj.num2 = num2;
        problemObj.sign = sign;
        problemObj.problem = problem;
        problemObj.variable = variable;

    } else {

         num1 = getRandomInt(0, radioValue);
         num2 = getRandomInt(0, radioValue);
         sign = "";
         correctAnswer;
         variable;
         variableArray = ["a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
         randomIndex = Math.floor(Math.random()* variableArray.length);
         variable = variableArray[randomIndex];

         if (radioType == "addsub"){
            signForOperation = Math.random();
            if (signForOperation < .5){
                sign = " - ";
                 num1 = Math.max(num1,num2);
                 num2 = Math.min(num1,num2);
            }
            else if (signForOperation >= .5){
                sign = " + ";
            }
        }
        else if (radioType == "add"){
            sign = " + ";
        }
        else if (radioType == "sub"){
            sign = " - ";
            num1 = Math.max(num1,num2);
            num2 = Math.min(num1,num2);
        }
        else if (radioType == "multdiv"){
            signForOperation = Math.random();
            if (signForOperation < .5){
                sign = " / ";
                num1 = Math.max(num1,num2)+1;
                num2 = getFactors(num1);
            }
            else if (signForOperation >= .5){
                sign = " * ";
            }
        }
        else if (radioType == "mult"){
            sign = " * ";
        }
        else if (radioType == "div"){
            sign = " / ";
            num1 = Math.max(num1,num2)+1;
            num2 = getFactors(num1);
        }
             
            problem = (num1.toString()+" "+ sign +" "+ variable);
            problemObj.num1 = num1;
            problemObj.num2 = num2;
            problemObj.sign = sign;
            problemObj.problem = problem;
            problemObj.variable = variable;
        }
