
/**
 * CHALLANGE - CREATE GRADE CHECKER FUNCTION
 * 
 * The function should request for a score, and  then give the corresponding grade.
 * 
 * Grades
 * A - 70 and above
 * B - 60 to 69
 * C - 50 to 59
 * D - 40 to 49
 * F - 0 to 39
 * 
 * STEPS 
 * 1.Get score from user
 * 2.Check if score entered is valid
 * 3.Grade based on score
 * 
 * 
 */
function checker() {
//  1.Get score from user
    let score = prompt ("Please enter a score between 0 and 100")
    score = parseFloat(score)

    //  2.Check if score entered is valid
    let isValid;
    if(score >= 0 && score <= 100){
       isValid = true
    } else {
        isValid = false
    }  
       
    console. log(`Validity of ${score} :` , isValid)
    
    //  3.Grade based on score
    if (isValid) {
        if (score >= 70) {
           alert("Congratulations, you got an A")
      }  else if (score >= 60 && score < 70) 
        {
            alert ("Good job, you got a B")
      }  else if (score >= 50 && score < 60)
         {
            alert ("You got a C, you can do better")
      }  else if (score >= 40 && score < 50)
         { 
            alert ("You got a D, you need to study more")
      }      else {
            alert ("You don fail o, try again next term")
      } 
    } else {
        alert("You entered an invalid number")
    } 
}



checker()
