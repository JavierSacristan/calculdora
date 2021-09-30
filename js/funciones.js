window.onload = function () {
    /*Creo la variable opcion en la que obtengo el 
    elemento modo del select
    */
    var opcion = document.getElementById("modo");

    //estoy añadiendo en la variable opcion lo que me devuelve el valor seleccionado
    //asignandole un evento dependiendo de la opcion seleccionada
    opcion.addEventListener("change", calcular, false);

    //este es el evento asignado
    function calcular() {
        //guardo en elemento el VALOR seleccionado con el this
        var elemento = this.options[this.selectedIndex].value;

        //cojo el valor del input numero y lo guardo
        var numero = document.getElementById("numero").value; 

        //el input me devuelve un String y yo lo tengo que convertir en un entero para poder hacer el toString
        nn = parseInt(numero);

        //en esta nueva variable obtengo el elemento resultado
        var resultado = document.getElementById("resultado"); 
        switch (elemento) {
            case "1":
                //Convertir de decimal a binario
                resultado.value = (nn).toString(2); //a resultado le voy asignando VALORES
                break;
            case "2":
                //Convertir de decimal a octal
                resultado.value = (nn).toString(8);
                break;
            case "3":
                //Convertir de decimal hexadecimal
                resultado.value = (nn).toString(16);
                break;

            //en estos casos no utilizo nn porque cojo el String directamente y hago el parse a entero
            case "4":
                //De binario a decimal
                resultado.value=parseInt(numero,2);
                break;
            case "5":
                //De octal a decimal
                resultado.value=parseInt(numero,8);
                break;
            case "6":
                //De hexadecimal a decimal
                resultado.value=parseInt(numero,16); 
                break;

        }
    }
}