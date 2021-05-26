document.querySelector('#laptop').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var year = document.querySelector('#year').value;
    var ram = document.querySelector('#ram').value;

    var laptop = new Laptop(title, year, ram);
    var viewLaptop = new ViewLaptop();
    
    if(title === '' || year === '' || ram === ''){
        viewLaptop.getMessage('Заполните все поля ввода', 'no_succes');

    } else{
        viewLaptop.addLaptop(laptop);
        viewLaptop.getMessage('Новый ноубук добавлен', 'succes');
        viewLaptop.clearInput();
    }
 

    event.preventDefault();


})