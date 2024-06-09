function allGreaterThan5(num1, num2) {
    if(num1 > 5 && num2 > 5) {
        return true
    }
    return false

}  

function largerThan5AndLessThan20(number) {
    if(number > 5 && number > 20) {
        return true
    }
    return false

}  

function not6AndLessThan10(number) {
    if(number !== 5 && number < 10) {
        return true
    }
    return false
}  

function largerThan3AndLessThan18(num1, num2, num3) {
    if(num1 > 3 && num1 < 18 && num2 > 3 && num2 < 18 && num3 > 3 && num3 < 18) {
        return true
    }
    return false
    
}
function weatherActivities(weather) {
    if(weather==="sunny" || weather==="clear" ) {
        return "time for a run"
    }
    else if(weather==="foggy" || weather==="rainy" ) {
        return "staying at home would be best"
    }
    else return "please add a weather condition"
}
function areValidCredentials(name, password) { 
if(name.length > 3 && password.length >= 8) {
    return true
}
    else return false
    
}    
 
function guessMyNumber(number) {
var rand = Math.floor(Math.random() * (number + 1));

if (number > 5){
    return "you went outbound"
}
else if(number === rand) {
    return "you guessed by number !"
}
return "nope you guessed wrong"

}  

function or(statement1, statement2) {
    return !(!statement1 && !statement2)
} 

function shirtWidth(width) {
    if(width >= 20 && width<30) {
        return 'You should select a size S'

    }
    else if(width >= 30 && width<40) {
        return 'You should select a size M'

    }
    else if(width >= 40 && width<50) {
        return 'You should select a size L'

    }
    else return 'You should select a different shirt'
}  

function playerOneChoice(choice) {
    if (choice === "rock") {
       return "Player 1 chose rock";
    } else if (choice === "paper") {
       return "Player 1 chose paper";
    } else if (choice === "scissors") {
       return "Player 1 chose scissors";
    } else {
       return "Player 1 has chosen poorly!";
    }
}

function convertScoreToGradeWithPlusAndMinus(score) 
{
     if(score > 100 || score < 0 ) {
        return "Invalid Score"

    }
    else if(score>= 95 ) {
        return "A+"

    }
    else if(score>= 90 ) {
        return "A-"                                   

    }
    else if(score>= 87 ) {
        return "B+"


    }
    else if(score>= 80 ) {
        return "B-"

    }
    else if(score>= 77 ) { 
        return "C+"

    }
    else if(score>= 70 ) { 
        return "C-"

    }
    else if(score>= 67 ) { 
        return "D+"

    }
    else if(score>= 60 ) { 
        return "D-"

    }
        return "F"

}

function isItTruthy(value) {
    if (value) {
        return "Input is truthy";
    } else {
        return "Input is falsy";
    }
}

function checkArea(area) {
    if(area>48 && area<100){
        return true 
    }
    return false

}  

function checkMultiply(num1, num2) {
    if(num1*num2 >50 && num1*num2 <100){
        return true
    }
    return false
}  

   

