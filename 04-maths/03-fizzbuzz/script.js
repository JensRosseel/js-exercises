// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    for(let i = 2; i<100; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log('fizzbuzz');
        }else if(i%3 == 0){
            console.log('fizz');
        }
        else if(i%5 == 0){
            console.log('buzz')
        }
        else{
            console.log(i);
        }
    }

})();