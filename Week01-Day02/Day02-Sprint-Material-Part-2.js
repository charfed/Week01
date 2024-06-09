function perimeterOfCircle (radius) {
    return radius * Math.PI * 2
    
 }

function areaOfCircle(radius) {
    return radius * radius * Math.PI

 }
 
function inchesToCentimeters(inches) {
    return Inches * 2.54

 }

function centimetersToInches(centimeters) {
    return centimeters / 2.54

} 

function totalSecondsConverter(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
} 

 function billTotal(number) {
   return  number * 0.09875 + number * 0.20

} 

function convertToKilometers(miles) {
    return miles * 1.60934  

}

function largest(integer1,integer2 ) {
    return Math.max(integer1,integer2)

}

function subtract(number1, number2) {
    return console.log(number1-number2)

}

function convertTemp(Celsius) {
    return Celsius * 1.8 + 32

}

function capitalize(food) {
    return food.charAt(0).toUpperCase()+food.slice(1)

}

function billing(item1,item2,item3) {
    return  "your total is $"+((item1+item2+item3)+(item1+item2+item3)*0.15).toFixed(2)+" . thank you for the $"+(item1+item2+item3)*0.15+" tip"

}

function awesomeMessage(firstName,interest , hobby) {
    return  "Hi, my name is "+firstName +". I love "+ interest +". In my spare time, I like to "+hobby+ "."

}

