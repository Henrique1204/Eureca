document.getElementById("adicionar").addEventListener("click", function(){
    let lista=document.getElementById("lista");
    let itemNovo=document.getElementById("itemNovo");
    let item=document.createElement("li");

    item.textContent=itemNovo.value;
    lista.appendChild(item);
    itemNovo.value="";
    itemNovo.focus();
})