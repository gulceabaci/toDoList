let liveToastBtnButon = document.getElementById('liveToastBtn');
let list= document.getElementById('list');
let task = document.getElementById('task');
liveToastBtnButon.addEventListener('click', function(){
    let lista= document.createElement('li');
    lista.classList.add('lista-styling');
    list.appendChild(lista);
    lista.innerHTML = task.value;
    task.value = "";
    
})



function newElement() {
  var task = document.getElementById('task').value;
  SubmitEvent = true;
  if(task=="") {
    alert(toast-body.innerHTML);
    return false;
  }
}
