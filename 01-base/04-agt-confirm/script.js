/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    

    do{
        var age = prompt("What is your age?");
        var gender = prompt("What is your gender?");
        var town = prompt("In what town do you live?");
    }while(age == '' || gender == '' || town == '');

    alert("age: "+age+", gender: "+gender+", town: "+town);

})();
