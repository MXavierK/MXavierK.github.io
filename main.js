$('#btnFiestas').on('click',infoFiestas)


function infoFiestas(){
    Swal.fire({
        title: 'Fiestas de cumpleaños',
        text: "Contamos con paquetes para 50 personas y hasta 200 personas.",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}

