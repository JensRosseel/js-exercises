// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        for(let i = 1; i<22; i++){
            console.log(Math.pow(i, 2));
        }

    });

})();