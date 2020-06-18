var ul  = document.getElementById('list')
var li;
var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)





function addItem(){
    var input = document.getElementById('input')
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)


    if(item=== ''){
        return false;
        // add a p tag and assign a value to "enter your todo"

    }else {
        // create li 
        li = document.createElement('li');

        // create cehck box
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')

        //crete label
        var label = document.createElement('label')
        label.setAttribute('for','item')

        //add these element 

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        li.className = 'visual';


    }


}
function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked)
        {
            ul.removeChild(li[index])
        }
    }   
}
