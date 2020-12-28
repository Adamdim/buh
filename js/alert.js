let btn = document.getElementById('btnalert');
let alertwin = document.getElementById('first_alert');
let body = document.getElementById('body')
let closealert = document.getElementById('closealert');
let showmask = document.getElementById('mask')
function alertbox(){
  alertwin.style.display = 'block';
  showmask.style.display = 'block'

}
function close(){
    alertwin.style.display = 'none';
    showmask.style.display = 'none';
    
}

closealert.addEventListener("click",close)
btn.addEventListener("click",alertbox);
jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("#first_alert"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.hide();
        showmask.style.display = 'none';
        // скрываем его
      }
    });
  });