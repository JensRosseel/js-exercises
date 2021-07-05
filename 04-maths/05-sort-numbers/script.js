// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        let numbers = document.getElementById('numbers').value;

        let numbersplit = numbers.split(', ');
        let num = new Array;
        for(let i = 0; i<numbersplit.length; i++){
            num[i] = parseInt(numbersplit[i]);
        }

        
        console.log(num.sort(function(a, b){return a - b}));

    });

})();