function returnTrue(){

    return true
    
}

function returnFalse( ) { 

    return false
    
}

function isEven(number) { 

    if(number%2===0) {
        
        return true
    }

    else

    return false
    
}


function isGreaterThan10(number) { 

    if(number>10) {
        
        return true
    }

    return false

}

function isEqualTo10(number) {

    if(number===10)   {
        
        return true
    }
    
        return false
    
}
    
function isLessOrEqualTo8(num1) {   
    
    if(num1<= 8)   {
        
        return true
    }
    
        return false
        
        
} 

function isLessThan(num1, num2) {
    
    if(num1 < num2)   {
        
        return true
    }
    
        return false
        
        
}
function isOldEnoughToDrive(age) {
    
    if(age >= 18)   {
        
        return true
    }
    
        return false
        
        
} 
function isValidPassword(password) {
   
    if(password.length <=8) {
      
        return true

   }

        return true

       
}

function longerString(string1, string2) {
        
    if(string1.length > string2.length) {
      
        return string1

   }
   else if(string1.length < string2.length) {
      
    return string2

}
    
    return "both"

}

function opposite(boolean) {
    if(boolean===true) {
        return false
        
    }
    return true

}

function rectAreaGreaterThan50(length, width) {
    if(length*width >= 50) {

        return true

    }
    return false

}

function budgetStatus(number) {  
    if(number > 250) {

        return  "over budget" 

    }
    return "under budget"

}

function isTriangle(side1, side2, side3) { 
    if(side1 + side2 > side3) {

        return  true

    }
    return false

}

function getMax(number1, number2, number3) { 
    if(number1 > number2 && number1 > number3) {
        return number1

    }
    else if(number1 < number2 && number3 < number2) {
        return number2

    }
    else {

        return number3
    }

    
} 

function isLeapYear(year) {
    if(year % 2 ===0 && year % 100 !==0 || year % 400 ===0  ) {
        return true

    }
    else return false
    
}
         
    
   
    



  


