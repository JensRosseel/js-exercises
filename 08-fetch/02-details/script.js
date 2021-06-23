/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function(){
        let heroID = document.getElementById("hero-id").value-1;

        fetch('../../_shared/api.json')
            .then(response => response.json())
            .then(data => function(){
                for(let i = 0; i<4; i++){
                    if(data.heroes[i] == heroID){
                        document.getElementsByClassName("name").value = data.heroes[i].name;
                        console.log(data.heroes[i].name);
                        document.getElementsByClassName("alter-ego").value = data.heroes[i].alterego;
                        for(let j = 0; j<data.heroes[i].powers.Length; j++){
                            document.getElementsByClassName("powers").value = data.heroes[i].powers[j];
                        };
                    }
                }
            });
    })
})();