'use strict'
//console.log("welcome")

let myName='Mohammed';
let myNationality='Jordainian';
let myFavfrouit="Apple";
let myFavcolor="green";
let myFavcar="Toyota";
let myFavdrink="coffee";
let userScoure = 0;
let userAttempt = 1;
//let myFavcountry="Canada"

let userName=prompt('Welcome to my website. What is your name?')
alert( userName+' Please answer with yes or no ');

let nameUser =prompt(' Is my name  Mohammed ?').toLowerCase();
//console.log(nameUser);

if (nameUser === 'yes' || nameUser ==='y'){
    alert('yes , You are right ');
   // console.log("correct")
   userScoure++;
}else {
    alert('Wrong Answer')
} 

let nationality=prompt(' Is my nationality Jordanian ?').toLowerCase();
if (nationality === 'yes' || nationality ==='y'){
    alert('yes, Good Job');
   // console.log("correct")
   userScoure++;
}else {
    alert('unfortunately ,Wrong Answer ');



} 



let Favfrouit=prompt('Is my favorite frouit Apple?').toLowerCase();
if (Favfrouit  === 'yes' || Favfrouit ==='y'){
    alert('You are right , my favorite frouit is Apple' );
   // console.log("correct")
   userScoure++;
}else {
    alert('ohhh,No')


} 



let favcolor =prompt(' Is my favorite color green?').toLowerCase();
if (favcolor=== 'yes' || favcolor==='y'){
    alert('yes,You are right' );
    //console.log("correct")
    userScoure++;
}else {
    alert('No,Wrong')

    

} 




let favcar=prompt(' Is my favorite car Toyota ?').toLowerCase();
if (favcar=== 'yes' || favcar==='y'){
    alert('yes , I like Toyota' );
   // console.log("correct")
   userScoure++;
}else {
    alert('no,You are wrong I Like Toyota')

}

let favdrink=prompt(' Is my favorite drink coffee ?').toLowerCase();
if (favdrink=== 'yes' || favdrink==='y'){
    alert('Right, my favorite drink is coffee ?' );
    //console.log("correct")
    userScoure++;
}else {
    alert('no, Be sure my favorite drink is coffee ?')

}

alert(`Thank you for your answer ${ userName }`);

//adding 6th qestion that takes numiruc input 

let userInput=prompt('what is my Favorte number between 1 to 8')

let flag=false;

while (userAttempt !==4 ){

    if (userInput == 3){
        
        alert('this is my favorite number');
        flag=true;
        userScoure++;
        break;
        

     } else if (userInput <=2 && userInput!=3){
     alert(' this not my favorite number,too high ')
    userAttempt++;
    userInput=prompt('what is my Favorte number between 1 to 8')
}else if(userInput >2 && userInput!=3){
alert('too low')
userAttempt++;
userInput=prompt('what is my Favorte number between 1 to 8')
}
    if (userAttempt === 4){
 
        alert('Run Out of Guesses , My Favorite Number is 3' )
        break;


}
if (flag==true){
    break;
}
}
//  adding 7th qestion that has multiple possible correct answers that are stored in an array.
//let flag = false 
let userFavcountry = ['Germany', 'England', 'India', 'Chaina', 'Canada'];

 for (let i = 0; i < 6; i++) {
     let userAnsw = prompt('Can you guess what is my favorite Country?');
    //let guess = userAnsw.toLowerCase();

    for (let j = 0; j < userFavcountry.length; j++){
        if (userAnsw  === userFavcountry[j]) {
            alert('Congrats you got it right!!!');
            userScoure++;
            flag=true
            break;
            
        }
 else{
 alert('Sorry wrong answer, try again')
  userAnsw = prompt('Can you guess what is my favorite Country?');
 }
      }if (flag){
        break;
    }
}
alert('Your Scoure is'+ userScoure)