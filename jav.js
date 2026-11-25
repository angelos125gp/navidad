function infosanta(){
    alert("Nombre: Santa Claus (Papá Noel)\nOrigen: Inspirado en San Nicolás de Bari\nHogar: El Polo Norte\nMisión: Viajar en su trineo mágico junto a sus renos cada Nochebuena para entregar regalos a los niños.");
}
function infoduendes(){
    alert("Nombre: Los Duendes Navideños\nHogar: El taller mágico del Polo Norte\nMisión: Son los alegres ayudantes de Santa Claus. Se encargan de diseñar, construir y envolver todos los juguetes con mucho cariño para que estén listos antes de Nochebuena.");
}
function infogrinch(){
    alert("Nombre: El Grinch\nHogar: El Monte Crumpit\nHistoria: Al principio era una criatura gruñona de color verde que detestaba los villancicos y las luces, pero al ver el verdadero cariño de la Navidad, su corazón creció tres tamaños y aprendió a compartir.");
}
function inforodolfo(){
    alert("Nombre: Rodolfo el Reno\nCaracterística: Tiene una brillante nariz roja que ilumina en la oscuridad\nMisión: Es el líder de los renos de Santa. Gracias a su luz especial, guía el trineo a través de las tormentas de nieve para que ningún niño se quede sin regalo.");

}
function crea() {
    let r1 = prompt("Primer regalo para Santa:");
    let r2 = prompt("Segundo regalo para Santa:");
    let r3 = prompt("Tercer regalo para Santa:");
    
    alert("Tu lista para Santa:\n1. "+ r1 + "\n2. "+ r2 +"\n3. " + r3 );
}
let total=0
function sumac(){
    total=total+80
    alert("total actual:"+total+"bs")
}
function restac(){
     total=total-80
     alert("total actual:"+total+"bs")
}
function sumap(){
     total=total+35
     alert("total actual:"+total+"bs")
}
function restap(){
     total=total-35
     alert("total actual:"+total+"bs")
}
function sumach(){
     total=total+25
     alert("total actual:"+total+"bs")
}
function restach(){
    total=total-25
    alert("total actual:"+total+"bs")
}
function sumaf(){
    total=total+30
    alert("total actual:"+total+"bs")
}
function restaf(){
    total=total-30
    alert("total actual:"+total+"bs")
}
function sumab(){
    total=total+20
    alert("total actual:"+total+"bs")
}
function restab(){
    total=total-20
    alert("total actual:"+total+"bs")
}
function pagar(){
    alert("pago recibido su total fue de "+total+" gracias por su compra.")
    total=0
}