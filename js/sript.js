var catalogArr = [];

document.querySelector('#laptop').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var ram = document.querySelector('#ram').value;
    var year = document.querySelector('#year').value;
    var proc = document.querySelector('#proc').value;
    var core = document.querySelector('#core').value;
    var material = document.querySelector('#material').value;
    var weight = document.querySelector('#weight').value;

    var laptop = new Laptop(title, ram, year, proc, core, material, weight);
    var viewLaptop = new ViewLaptop();
    
    if(title === '' || ram === '' || year === '' || proc === '' || core === '' || material === '' || weight === ''){
        viewLaptop.getMessage('Заполните все поля ввода', 'no_succes');

    } else{
        viewLaptop.addLaptop(laptop);
        viewLaptop.getMessage('Новый ноубук добавлен', 'succes');
        viewLaptop.clearInput();
        catalogArr.push(laptop);
    };
 
    console.log(catalogArr);
    event.preventDefault();


});

document.querySelector('#ultrabook').addEventListener('submit', function(event){
    var name = document.querySelector('#U_title').value;
    var year = document.querySelector('#U_year').value;
    var proz = document.querySelector('#U_proc').value;
    var ram = document.querySelector('#U_ram').value;
    var core = document.querySelector('#U_core').value;
    var material = document.querySelector('#U_material').value;
    var weight = document.querySelector('#U_weight').value;
    var ultrabook = new Ultrabook(name, year, proz, ram, core, material, weight);
    var viewUltrabook = new ViewUltraBook();

    if(title === '' || year === '' || proc === ''|| ram === '' || core === '' || material === ''|| weight === ''){
        viewUltrabook.getMessage('Заполните все поля ввода', 'no_succes');
    }else{
        viewUltrabook.addUltrabook(ultrabook);
        viewUltrabook.getMessage('Новый ультрабук добавлен', 'succes');
        viewUltrabook.clearInput(); 
        catalogArr.push(ultrabook);
    };
    console.log(catalogArr);
    event.preventDefault();
});

function deleteUlList(){
    var deleteUL = document.getElementsByClassName('delete');
    for(let button of deleteUL){
      button.addEventListener('click', function(){
          button.parentElement.remove();
          event.preventDefault();
      })
    }
  }
function openDiv(){
    var buttonOpen = document.getElementsByClassName('show');
    for(let button of buttonOpen){
      button.addEventListener('click', function(){
          button.parentElement.querySelector('.more-inf').classList.toggle('close');
          event.preventDefault();
      })
    }
  };