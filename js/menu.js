var but1 = document.getElementById('bt1');
var but2 = document.getElementById('bt2');
var bar = document.getElementById('sitebar');
var menu = document.getElementById('topmenu');

but1.onclick= function() {
    bar.classList.toggle("myclass");
    
}
but2.onclick= function() {
    menu.classList.toggle("myclass2");
    
}
