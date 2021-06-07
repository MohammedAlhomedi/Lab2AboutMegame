'use strict'
console.log("welcome")

let myName='Mohammed';
let myNationality='Jordainian';
let myFavfrouit="Apple";
let myFavcolor="green";
let myFavcar="Toyota";
let myFavdrink="coffee";

let userName=prompt('Welcome to my website. What is your name?')
alert( userName+' Please answer with yes or no ');

let nameUser =prompt(' Is my name  Mohammed ?').toLowerCase();
console.log(nameUser);

if (nameUser === 'yes' || nameUser ==='y'){
    alert('yes , You are right ');
    console.log("correct")

}else {
    alert('Wrong Answer')
} 

let nationality=prompt(' Is my nationality Jordanian ?').toLowerCase();
if (nationality === 'yes' || nationality ==='y'){
    alert('yes, Good Job');
    console.log("correct")

}else {
    alert('unfortunately ,Wrong Answer ');



} 



let Favfrouit=prompt('Is my favorite frouit Apple?').toLowerCase();
if (Favfrouit  === 'yes' || Favfrouit ==='y'){
    alert('You are right , my favorite frouit is Apple' );
    console.log("correct")

}else {
    alert('ohhh,No')


} 



let favcolor =prompt(' Is my favorite color green?').toLowerCase();
if (favcolor=== 'yes' || favcolor==='y'){
    alert('yes,You are right' );
    console.log("correct")

}else {
    alert('No,Wrong')

    

} 




let favcar=prompt(' Is my favorite car Toyota ?').toLowerCase();
if (favcar=== 'yes' || favcar==='y'){
    alert('yes , I like Toyota' );
    console.log("correct")

}else {
    alert('no,You are wrong I Like Toyota')

}

let favdrink=prompt(' Is my favorite drink coffee ?').toLowerCase();
if (favdrink=== 'yes' || favdrink==='y'){
    alert('Right, my favorite drink is coffee ?' );
    console.log("correct")

}else {
    alert('no, Be sure my favorite drink is coffee ?')

}

alert(`Thank you for your answer ${ userName }`);