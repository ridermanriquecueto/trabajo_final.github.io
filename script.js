

// Obtener el elemento del menú
var menu = document.getElementById('menu');

// Agregar un evento de clic a cada elemento del menú
var items = menu.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    // Acción a realizar cuando se hace clic en un elemento del menú
    alert('Has hecho clic en: ' + this.textContent);
  });
  //opcional
}
menuItems.forEach(function(item){
    item.addEventListener('click', function(e){
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classLIst.add('active');
    });
   
});


