function ViewLaptop(){

};
ViewLaptop.prototype.addLaptop = function (obj) {
    var block = document.querySelector("#ist-laptops");
    var ulList = document.createElement("ul");

    ulList.innerHTML = '<li>' + obj.title + '</li>' +
    '<li>' + obj.ram + '</li>' + 
    '<li>' + obj.year + '</li>' +
    '<li><button class="delete">Удалить</button></li>';

    block.appendChild(ulList);

};
ViewLaptop.prototype.getMessage = function(message, nameCl){
    var cont = document.querySelector('.container');
    var form = document.querySelector('#laptop');

    var infoBlock = document.createElement('div');
    infoBlock.className = nameCl;
    infoBlock.innerText = message;

    cont.insertBefore(infoBlock, form);
}

ViewLaptop.prototype.clearInput = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#ram').value = '';
    document.querySelector('#year').value = '';
};