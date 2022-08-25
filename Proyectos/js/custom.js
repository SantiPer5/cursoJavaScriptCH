
//clase de eventoss 
const mensajeString = localStorage.getItem('mensaje');
const mensajeParseado = JSON.parse(mensajeString);

const form = document.getElementById('form')


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

//fetch

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_1hy51as';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

form.addEventListener('submit', (e) => { // e es el parametro de evento
    e.preventDefault();

    const formulario = e.target;

    const mensaje = {
        nombre: formulario[1].value,
        email: formulario[2].value,
        asunto: formulario[3].value,
        texto: formulario[4].value,
    }

    const btn = document.getElementById('botonEnviar').addEventListener('click', () => {
        //clase librerias
        Swal.fire({
            title: 'Estas seguro de enviar el mensaje?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
        }).then((resultado) => {
            if (resultado.isConfirmed) {
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

                Swal.fire({
                    title: 'Listo!!',
                    icon: 'success',
                    text: 'El mensaje fue enviado correctamente.'
                })
            }
        })
    });



});
//clase de eventoss fin. 





// to get current year
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



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

