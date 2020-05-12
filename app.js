const addbutton = document.querySelector('.addbutton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
       
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('input_item');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        
        let editButton = document.createElement('button');
        editButton.classList.add('editbutton');
        editButton.innerHTML = "EDIT";

        let removeButton = document.createElement('button');
        removeButton.classList.add('removebutton');
        removeButton.innerHTML = "REMOVE";

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',() => this.edit(input));
        removeButton.addEventListener('click',() => this.remove(itemBox));
    }

    edit(input){
        input.disabled = !input.disabled;
    }

    remove(item){
        item.remove();
    }

}

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addbutton.addEventListener('click',check);
window.addEventListener('keydown',(e) => {
    if(e.which == 13){
        check();
    }
})