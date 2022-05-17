$(document).ready(function(){
    $('#boton').hide()
    $('#boton2').hide()
    $('#boton3').hide()
})

/* Tarjeta 1 */
$(function(){
    //Eventos del mouse dentro
    $('#contenedor').mouseover(function(){
        $('#imagen').addClass('blurr')
        $('#boton').show()
    })
    //Eventos del mouse fuera
    $('#contenedor').mouseout(function(){
        $('#imagen').removeClass('blurr')
        $('#boton').hide()
    })
})
/* Tarjeta 2 */
$(function(){
    //Eventos del mouse dentro
    $('#contenedor2').mouseover(function(){
        $('#imagen2').addClass('blurr')
        $('#boton2').show()
    })
    //Eventos del mouse fuera
    $('#contenedor2').mouseout(function(){
        $('#imagen2').removeClass('blurr')
        $('#boton2').hide()
    })
})
/* Tarjeta 3 */
$(function(){
    //Eventos del mouse dentro
    $('#contenedor3').mouseover(function(){
        $('#imagen3').addClass('blurr')
        $('#boton3').show()
    })
    //Eventos del mouse fuera
    $('#contenedor3').mouseout(function(){
        $('#imagen3').removeClass('blurr')
        $('#boton3').hide()
    })
})