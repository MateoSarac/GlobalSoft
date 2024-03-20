let arr = [2, 3 ,2, 53, 31, 7, 54, 92, 13, 25];
let lista = document.getElementById("lista");


arr.forEach(element => {
    if(element % 2 == 0){
        let listItem = document.createElement("li");
        listItem.innerText = element.toString();
        lista.appendChild(listItem)
    }
});
