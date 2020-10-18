let arr = ["Cyberpunk 2077", "Half-life 3", "Portal 3", "Witcher 4"];
let productEdited = document.getElementById("productEdited");
let confirmEditButton = document.getElementById("confirm");
let cancelEditButton = document.getElementById("cancel");
let idATM;

function addProduct() {
    let newProduct = document.getElementById("productAdded").value;
    // confirm product already in database
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == newProduct){
            if(confirm("This product is already in database . Add anyway ?") == false){
                return;
            }
            break;
        }
    }
    // confirm add
    let bool = confirm("Added " + newProduct + " ?");
    if(bool == false){
        return;
    }
    arr.push(newProduct);
    displayProducts();
    // highlight most recent added
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] == newProduct){
            console.log(`${i}tr`);
            document.getElementById(`${i}tr`).style.backgroundColor = "yellow";
            break;
        }
    }
}

function displayProducts() {
    let str = "<table width='50%'><tr><td><b>ProductName</b></td><td><td><td class='td2' align='center'>9 products</td></tr>";
    for (let i = 0; i < arr.length; i++) {
        str += `<tr id='${i}tr' class="tr1">`;
        for (let j = 0; j < 4; j++) {
            if (j == 0) {
                str += `<td class='td1'>${arr[i]}</td>`;
            } else if (j == 1) {
                str += `<td class='td'><button id='${i}edit' class='button' onclick='editProduct(this.id)'>Edit</button></td>`;
            } else if (j == 2) {
                str += `<td class='td'><button id='${i}delete' class='button' onclick='deleteProduct(this.id)'>Delete</button></td>`;
            } else {
                str += "<td class='td2'></td>";
            }
        }
        str += "</tr><br>";
    }
    str = str + "</table>";
    document.getElementById("table").innerHTML = str;
}

displayProducts();

function editProduct(clickedID) {
    idATM = clickedID;
    productEdited.style.visibility = "visible";
    productEdited.value = arr[idATM.replace("edit", "")];
    confirmEditButton.style.visibility = "visible";
    cancelEditButton.style.visibility = "visible";

}

function confirmEdit() {
    let bool = confirm("Change " + arr[idATM.replace("edit", "")] + " to this product ?");
    if (bool == false) {
        return;
    }
    arr[idATM.replace("edit", "")] = productEdited.value;
    productEdited.style.visibility = "hidden";
    confirmEditButton.style.visibility = "hidden";
    cancelEditButton.style.visibility = "hidden";
    displayProducts();
}
function cancelEdit(){
    let bool = confirm("Cancel Editting ?");
    if(bool == false){
        return;
    }
    productEdited.style.visibility = "hidden";
    confirmEditButton.style.visibility = "hidden";
    cancelEditButton.style.visibility = "hidden";

}
function deleteProduct(clickedID) {
    idATM = clickedID;
    let bool = confirm("Detele " + arr[idATM.replace("delete", "")] + " ?");
    if(bool == false){
        return;
    }
    arr.splice(idATM.replace("delete", ""),1);
    displayProducts();
}