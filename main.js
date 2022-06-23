function comparar(){
    var casaTipo = document.getElementById("tipoDeCasa");
    var pagoTipo = document.getElementById("tipoDePago");
if (casaTipo.value=="2" && pagoTipo.value=="3") {
    window.location.href = 'seguro3.html';
    alert('hemos encontrado seguro');
} else if (casaTipo.value=="2" && pagoTipo.value=="1") {
    window.location.href ='seguro2.html';
    alert('hemos encontrado seguro');

}else{
    window.location.href = 'seguro1.html';
    alert('hemos encontrado seguro');
}
}