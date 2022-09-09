
const mensajeString = localStorage.getItem('mensaje'); // storage 
const mensajeParseado = JSON.parse(mensajeString);

const form = document.getElementById('form')




//objeto que se utiliza para mostrar elementos a la tabla
const agregarElementoATabla = ({ nombre, email, asunto, texto }) => {
    const tabla = document.getElementById('tabla');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${nombre}</td>
        <td>${email}</td>
        <td>${asunto}</td>
        <td>${texto}</td>
    `;
    tabla.append(tr);
}

mensajeParseado.forEach((mensaje) => {
    agregarElementoATabla(mensaje);
})



// Emailjs es una API que permite enviar correos, en este caso se utiliza para enviar el formulario a un correo particular
//https://www.emailjs.com/

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) { // se utlizan eventos para que se ejecute la funcion cuando se presione el boton
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_1hy51as';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar'; //sweetalert2 es una libreria que permite mostrar mensajes de alerta
                Swal.fire({ //sweetalert2 para mostrar un mensaje de exito
                    position: 'top-end',
                    icon: 'success',
                    title: 'Tu mensaje ha sido enviado :)',
                    showConfirmButton: false,
                    timer: 1500
                });
            }, (err) => {
                btn.value = 'Send Email';
                Swal.fire({ //sweetalert2 para mostrar un mensaje de error
                    icon: 'error',
                    title: 'Error al enviar el mensaje :(',
                    text: 'Something went wrong!',
                    footer: '<a href="#">Por que sucede esto?</a>'
                });
            });
    });


// evento que agrega elemntos a la tabla
form.addEventListener('submit', (e) => { // e es el parametro de evento
    e.preventDefault();

    const formulario = e.target;

    const mensaje = {
        nombre: formulario[1].value,
        email: formulario[2].value,
        asunto: formulario[3].value,
        texto: formulario[4].value,
    }

    agregarElementoATabla(mensaje);

    const mensajeString = localStorage.getItem('mensaje');
    let mensajeParseado = [];
    if (mensajeString) {
            mensajeParseado = JSON.parse(mensajeString);
    }
    
    mensajeParseado.push(mensaje);
    
    localStorage.setItem('mensaje', JSON.stringify(mensajeParseado));
    document.querySelectorAll('#formulario input').forEach((input) => {
            input.value = '';
    });
});


// para obtener el año actual
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


