/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    document.getElementById("run").addEventListener("click", function(){
        fetch('../../_shared/api.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let heroid = document.getElementById("hero-id").value - 1;
                let powers = "";
                for(let i = 0; i < data.heroes[heroid].abilities.length; i++){
                    powers =+ data.heroes[heroid].abilities[i] + " ";
                }

                document.querySelector("strong.name").innerHTML = data.heroes[heroid].name;
                document.querySelector("em.alter-ego").innerHTML = data.heroes[heroid].alterEgo;
                document.querySelector("p.powers").innerHTML = powers;
            })

    })
})();