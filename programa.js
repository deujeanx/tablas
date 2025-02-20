const agragarEquipo = document.getElementById ('agregarEquipo');
const campoNombre = document.getElementById ('nombre');
const campoMarca = document.getElementById ('marca');
const campoCantidad = document.getElementById ('cantidad');

let nombres = [];
let marcas = [];
let cantidades = [];

let contador = 0;

agregarEquipo.addEventListener('click',function(){

    let coincidencia = -1;

    const tabla = document.getElementById ('tabla');

    let nombre = campoNombre.value;
    let marca = campoMarca.value;
    let cantidad = parseInt(campoCantidad.value);



    tabla.innerHTML = '';

    for (i=0; i<nombres.length; i++) {

        if (nombres[i]==nombre && marcas[i]==marca) {

            coincidencia = i;

        }

    }

    if (coincidencia==-1) {

        nombres.push (nombre);
        marcas.push (marca);
        cantidades.push (cantidad);

        for (  let i = 0; i<nombres.length; i++) {

            const fila = document.createElement('tr');
            const col1 = document.createElement('td');
            const col2 = document.createElement('td');
            const col3 = document.createElement('td');
    
            col1.textContent = nombres[i];
            col2.textContent = marcas[i];
            col3.textContent = cantidades[i];
    
            fila.appendChild(col1);
            fila.appendChild(col2);
            fila.appendChild(col3);
    
            tabla.appendChild(fila);
    
        }

    } else {

        cantidades[coincidencia]=cantidades[coincidencia]+cantidad;

        for (  let i = 0; i<nombres.length; i++) {

            const fila = document.createElement('tr');
            const col1 = document.createElement('td');
            const col2 = document.createElement('td');
            const col3 = document.createElement('td');
    
            col1.textContent = nombres[i];
            col2.textContent = marcas[i];
            col3.textContent = cantidades[i];
    
            fila.appendChild(col1);
            fila.appendChild(col2);
            fila.appendChild(col3);
    
            tabla.appendChild(fila);
    
        }

    }

})

const tabla2 = document.getElementById('tabla2');

const agregarPersona = document.getElementById('agregarPersona');
const nombrePerosna = document.getElementById('nombrePersona');
const numeroPersona = document.getElementById('numeroPersona');

let numeros = [];
let personas = [];

agregarPersona.addEventListener('click', function(){

    tabla2.innerHTML = '';

    let numeroAct = parseInt(numeroPersona.value);
    let nombreAct = nombrePersona.value;

    let coincidenciaNumero = 0;

    for (i=0; i<personas.length; i++) {

        if (numeroAct==numeros[i]) {

            coincidenciaNumero = 1;
            alert ('No se puede ingresar el usuario ya que coincide ocn otro numero de identificador');

        }

    }
    
    if (coincidenciaNumero==0) {

        numeros.push(numeroAct);
        personas.push(nombreAct);

    }

    for (  let i = 0; i<personas.length; i++) {

        const filaPersonas = document.createElement('tr');
        const col1personas = document.createElement('td');
        const col2personas = document.createElement('td');

        col1personas.textContent = numeros[i];
        col2personas.textContent = personas[i];

        filaPersonas.appendChild(col1personas);
        filaPersonas.appendChild(col2personas);


        tabla2.appendChild(filaPersonas);

    }

})

const agregarPrestamo = document.getElementById('agregarPrestamo');
const numeroPrestamo = document.getElementById('numerPrestamo');
const nombrePrestamo = document.getElementById('nombrePrestamo');
const marcaPrestamo = document.getElementById('marcaPrestamo');
const cantidadPrestamo = document.getElementById('cantidadPrestamo');

const tabla3 = document.getElementById('tabla3');

let numerosPrestamo = [];
let nombresPrestamo = [];
let marcasPrestamo = [];
let cantidadesPrestamo = [];

agregarPrestamo.addEventListener('click', function(){

    let coincidenciaPersona = 0;
    let permitirAgregar = 0;

    let numeroAct = parseInt(numeroPrestamo.value);
    let nombreAct = nombrePrestamo.value;
    let marcaAct = marcaPrestamo.value;
    let cantidadAct = parseInt(cantidadPrestamo.value);

    

    let personaPrestamoActivo = 0
    
    for (i=0; i<personas.length; i++) {

        if (numeroAct==numeros[i]) {

            coincidenciaPersona = 1;

        }

    }

    for (i=0; i<nombres.length; i++) {

        console.log ('entra al for 1')

        if (nombreAct==nombres[i] && marcaAct==marcas[i] && coincidenciaPersona==1) {

            permitirAgregar = 1;
            filaAgregar = i;

        }

    }

    for (i=0; i<numerosPrestamo.length; i++) {

        console.log ('entra al for')

        if (numeroAct==numerosPrestamo[i]) {

            permitirAgregar = 2;
            personaPrestamoActivo= i;

            console.log ('Entra al if 2')

        }

    }

    if (permitirAgregar==1 && cantidades[filaAgregar]>=cantidadAct) {

        console.log ('Ciclo 1')

        numerosPrestamo.push(numeroAct);
        nombresPrestamo.push(nombreAct);
        marcasPrestamo.push(marcaAct);
        cantidadesPrestamo.push(cantidadAct);

        cantidades[filaAgregar] = cantidades[filaAgregar]-cantidadAct;

        tabla.innerHTML = '';

        for (  let i = 0; i<nombres.length; i++) {

            const fila = document.createElement('tr');
            const col1 = document.createElement('td');
            const col2 = document.createElement('td');
            const col3 = document.createElement('td');
    
            col1.textContent = nombres[i];
            col2.textContent = marcas[i];
            col3.textContent = cantidades[i];
    
            fila.appendChild(col1);
            fila.appendChild(col2);
            fila.appendChild(col3);
    
            tabla.appendChild(fila);
    
        }

        tabla3.innerHTML = '';


        for (  let i = 0; i<nombresPrestamo.length; i++) {

           
        
            const filaPrestamo = document.createElement('tr');
            const col1Prestamo = document.createElement('td');
            const col2Prestamo = document.createElement('td');
            const col3Prestamo = document.createElement('td');
            const col4Prestamo = document.createElement('td');
        
            col1Prestamo.textContent = numerosPrestamo[i];
            col2Prestamo.textContent = nombresPrestamo[i];
            col3Prestamo.textContent = marcasPrestamo[i];
            col4Prestamo.textContent = cantidadesPrestamo[i];
        
            filaPrestamo.appendChild(col1Prestamo);
            filaPrestamo.appendChild(col2Prestamo);
            filaPrestamo.appendChild(col3Prestamo);
            filaPrestamo.appendChild(col4Prestamo);
        
            tabla3.appendChild(filaPrestamo);
        
        }

    }else if(permitirAgregar==2 && marcaAct==marcasPrestamo[personaPrestamoActivo] && cantidadAct<=cantidades[filaAgregar] && nombreAct==nombresPrestamo[personaPrestamoActivo]) {


        cantidades[filaAgregar] = cantidades[filaAgregar]-cantidadAct;

        tabla.innerHTML = '';

        for (  let i = 0; i<nombres.length; i++) {

            const fila = document.createElement('tr');
            const col1 = document.createElement('td');
            const col2 = document.createElement('td');
            const col3 = document.createElement('td');
    
            col1.textContent = nombres[i];
            col2.textContent = marcas[i];
            col3.textContent = cantidades[i];
    
            fila.appendChild(col1);
            fila.appendChild(col2);
            fila.appendChild(col3);
    
            tabla.appendChild(fila);
    
        }
        

        cantidadesPrestamo[personaPrestamoActivo]=cantidadesPrestamo[personaPrestamoActivo]+cantidadAct;
        cantidades[filaAgregar] = cantidades[filaAgregar]-cantidadAct;

        tabla3.innerHTML = '';

        for (i=0; i<nombresPrestamo.length; i++) {

        
            const filaPrestamo = document.createElement('tr');
            const col1Prestamo = document.createElement('td');
            const col2Prestamo = document.createElement('td');
            const col3Prestamo = document.createElement('td');
            const col4Prestamo = document.createElement('td');
        
            col1Prestamo.textContent = numerosPrestamo[i];
            col2Prestamo.textContent = nombresPrestamo[i];
            col3Prestamo.textContent = marcasPrestamo[i];
            col4Prestamo.textContent = cantidadesPrestamo[i];
        
            filaPrestamo.appendChild(col1Prestamo);
            filaPrestamo.appendChild(col2Prestamo);
            filaPrestamo.appendChild(col3Prestamo);
            filaPrestamo.appendChild(col4Prestamo);
        
            tabla3.appendChild(filaPrestamo);

        }

    } else {

        let numeroCoincide = 0;

        for (i=0; i< numeros.length; i++) {

            if (numeroAct==numeros[i]) {

                numeroCoincide = 1;

            } 

        }

        if (numeroCoincide==0) {

            alert ('El identificador no coincide con los usuarios agregados');

        }

        if (permitirAgregar==0) {

            alert ('No existen dispositivos con las caracteristicas especificadas')

        }else if (cantidadAct>cantidades[filaAgregar]) {

            alert('Cantidad solicitada superior a la que se posee')

        } else if (marcaAct!=marcasPrestamo[personaPrestamoActivo] || nombresPrestamo[personaPrestamoActivo]) {

            alert ('No puedes haceer mas de dos prestamos');

        }

        
        

        

    }

})

/*devolver prestamo */

const devolverPrestamo=document.getElementById('devolverPrestamo');

const numeroIdentificadorDevolverInput = document.getElementById('numeroDevolver');
const nombreDevolverInput = document.getElementById('nombreDevolver');
const marcaDevolverInput = document.getElementById('marcaDevolver');
const cantidadDevolverInput = document.getElementById('cantidadDevolver');

devolverPrestamo.addEventListener('click', function(){

    let numeroIdentificadorDevolver = numeroIdentificadorDevolverInput.value;
    let nombreDevolver = nombreDevolverInput.value;
    let marcaDevolver = marcaDevolverInput.value;
    let cantidadDevolver = parseInt(cantidadDevolverInput.value);
    let filaCambiarDevolver = 0;



    for (i=0; i<numerosPrestamo.length; i++) {

        if (numeroIdentificadorDevolver==numerosPrestamo[i]) {

            personaDevolver = i;

            if (marcaDevolver == marcasPrestamo[personaDevolver] && nombreDevolver == nombres[personaDevolver]) {


                if (cantidadDevolver<=cantidadesPrestamo[i]){

                    tabla3.innerHTML = '';
                    tabla.innerHTML = '';

                    if (cantidadDevolver==cantidadesPrestamo[i]) {

                        numerosPrestamo.splice(i,1)
                        nombresPrestamo.splice(i,1) 
                        marcasPrestamo.splice(i,1)
                        cantidadesPrestamo.splice(i,1)

                        for (i=0; i<nombres.length; i++) {

                            if (nombres[i]==nombreDevolver) {

                                filaCambiarDevolver = i;

                            }

                        }

                        cantidades[filaCambiarDevolver] += cantidadDevolver;

                        for (i=0; i<nombresPrestamo.length; i++) {

        
                            const filaPrestamo = document.createElement('tr');
                            const col1Prestamo = document.createElement('td');
                            const col2Prestamo = document.createElement('td');
                            const col3Prestamo = document.createElement('td');
                            const col4Prestamo = document.createElement('td');
                        
                            col1Prestamo.textContent = numerosPrestamo[i];
                            col2Prestamo.textContent = nombresPrestamo[i];
                            col3Prestamo.textContent = marcasPrestamo[i];
                            col4Prestamo.textContent = cantidadesPrestamo[i];
                        
                            filaPrestamo.appendChild(col1Prestamo);
                            filaPrestamo.appendChild(col2Prestamo);
                            filaPrestamo.appendChild(col3Prestamo);
                            filaPrestamo.appendChild(col4Prestamo);
                        
                            tabla3.appendChild(filaPrestamo);
                
                        }

                        for (  let i = 0; i<nombres.length; i++) {

                            const fila = document.createElement('tr');
                            const col1 = document.createElement('td');
                            const col2 = document.createElement('td');
                            const col3 = document.createElement('td');
                    
                            col1.textContent = nombres[i];
                            col2.textContent = marcas[i];
                            col3.textContent = cantidades[i];
                    
                            fila.appendChild(col1);
                            fila.appendChild(col2);
                            fila.appendChild(col3);
                    
                            tabla.appendChild(fila);
                    
                        }

                    } else {

                        for (i=0; i<nombres.length; i++) {

                            if (nombres[i]==nombreDevolver) {

                                filaCambiarDevolver = i;

                            }

                        }

                        cantidades[filaCambiarDevolver] += cantidadDevolver;

                        cantidadesPrestamo[personaDevolver] -= cantidadDevolver;

                        for (  let i = 0; i<nombres.length; i++) {

                            const fila = document.createElement('tr');
                            const col1 = document.createElement('td');
                            const col2 = document.createElement('td');
                            const col3 = document.createElement('td');
                    
                            col1.textContent = nombres[i];
                            col2.textContent = marcas[i];
                            col3.textContent = cantidades[i];
                    
                            fila.appendChild(col1);
                            fila.appendChild(col2);
                            fila.appendChild(col3);
                    
                            tabla.appendChild(fila);
                    
                        }

                        for (i=0; i<nombresPrestamo.length; i++) {

        
                            const filaPrestamo = document.createElement('tr');
                            const col1Prestamo = document.createElement('td');
                            const col2Prestamo = document.createElement('td');
                            const col3Prestamo = document.createElement('td');
                            const col4Prestamo = document.createElement('td');
                        
                            col1Prestamo.textContent = numerosPrestamo[i];
                            col2Prestamo.textContent = nombresPrestamo[i];
                            col3Prestamo.textContent = marcasPrestamo[i];
                            col4Prestamo.textContent = cantidadesPrestamo[i];
                        
                            filaPrestamo.appendChild(col1Prestamo);
                            filaPrestamo.appendChild(col2Prestamo);
                            filaPrestamo.appendChild(col3Prestamo);
                            filaPrestamo.appendChild(col4Prestamo);
                        
                            tabla3.appendChild(filaPrestamo);
                
                        }

                    }

                } else {

                    alert ('la cantidad que desea devolver es superior a la que posee');

                }

            } else {

                alert('las caracteristicas del equipo no coinciden con el prestamo que tiene actualmente');

            }

        }

    }

    

});

/*tenemos que terminar la parte de devolver estamos haciendo de que cuando quiera devolver todo de una vez la fila desaparezca falta hacer cu
cuando devuelva individual*/