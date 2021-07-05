// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        let number = parseInt(document.getElementById('number').value);
        let factorial = 1;
        for(let i = number; i>0; i--){
            factorial = factorial * i;
        }
        console.log(factorial);
    });

})();