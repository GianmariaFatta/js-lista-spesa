// Data una lista della spesa (inventatela), stampare in pagina gli elementi della lista individualmente con un ciclo while.  (anche brutalmente, basta che si vedano)

const listElement=document.getElementById("list")

const marketList=["pane", "acqua", "pasta", "insalata", "carne", "pollo", "uova", "frutta",];

let myList=`<ul>`;
let i=0
while(i < marketList.length){
    myList += `<li>${marketList[i]}</li>`;
    i++;
};

myList+=`</ul>`;

console.log(myList)

listElement.innerHTML= myList