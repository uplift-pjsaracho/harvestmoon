const newRecipe = document.querySelector(".recipeList")
const rcpBox    = document.querySelector(".rcpBox")
const ingr = document.querySelector(".itemList")
const cookBox = document.querySelector(".cookBox")
const tryBtn = document.querySelector(".btn")
const unlockDiv = document.querySelector(".unlockDiv")
const span1 = document.querySelector("#span1")
const counterDisplay = document.querySelector("#counter")
let clicklist   = [];

const ingrList = ['Riceballs', 'Curry Powder', 'Blue Grass', 'Green Grass', 'Red Grass', 'Yellow Grass', 'Orange Grass', 'Purple Grass', 'Indigo Grass', 'Black Grass', 'White Grass'];
ingrList.forEach(function (items){
    let itemDiv = document.createElement("div");
    itemDiv.textContent = items;
    itemDiv.classList.add("ingrStyle");
    ingr.append(itemDiv);
    
    itemDiv.addEventListener('click', function (){
        let cln = itemDiv.cloneNode(true);
        cookBox.append(cln);
        clicklist.push(cln.textContent)
    })
});


let rcpGuide = [
    {Name: "Curry Rice", Ingrs: ["Riceballs", "Curry Powder"]},
    {Name: "Blue Curry", Ingrs: ["Riceballs", "Curry Powder", "Blue Grass"]},
    {Name: "Green Curry", Ingrs: ["Riceballs", "Curry Powder", "Green Grass"]},
    {Name: "Red Curry", Ingrs: ["Riceballs", "Curry Powder", "Red Grass"]},
    {Name: "Yellow Curry", Ingrs: ["Riceballs", "Curry Powder"," Yellow Grass"]},
    {Name: "Orange Curry", Ingrs: ["Riceballs", "Curry Powder", "Orange Grass"]},
    {Name: "Purple Curry", Ingrs: ["Riceballs", "Curry Powder", "Purple Grass"]},
    {Name: "Indigo Curry", Ingrs: ["Riceballs", "Curry Powder", "Indigo Grass"]},
    {Name: "Black Curry", Ingrs: ["Riceballs", "Curry Powder", "Black Grass"]},
    {Name: "White Curry", Ingrs: ["Riceballs", "Curry Powder", "White Grass"]},
    {Name: "Rainbow Curry", Ingrs: ["Riceballs", "Curry Powder", "White Grass", "Black Grass", "Red Grass", "Blue Grass", "Green Grass", "Yellow Grass", "Orange Grass", "Indigo Grass", "Purple Grass"]},
];
let rcpcounter = 0;
let unlockRcp = [];
let matched = 0;
tryBtn.addEventListener("click", function (){
    for (let x = 0; x < rcpGuide.length; x++){
        for (let i = 0; i < rcpGuide[x]["Ingrs"].length; i++){
            
            // if (clicklist.indexOf(rcpGuide[x]["Ingrs"][i]))
            clicklist.forEach(function (click){
                if (click == rcpGuide[x]["Ingrs"][i]){
                    matched++;
                    console.log(click, rcpGuide[x]["Ingrs"][i])
                }
            });
        };
        if (matched == rcpGuide[x]["Ingrs"].length && clicklist.length === rcpGuide[x]["Ingrs"].length){
            unlockRcp.push(rcpGuide[x].Name);
            }      
    };
    
        span1.textContent = `${unlockRcp}`
        unlockDiv.style.display = "block"
        
        const againBtn  = document.querySelector(".again")
        againBtn.addEventListener('click', function (){
        cookBox.textContent="";
        unlockDiv.style.display ="none"
        rcpBox.classList.add("unlockedRcp")
        rcpBox.append(`${unlockRcp}, `)
    })
});
    
    
    
    
    
    