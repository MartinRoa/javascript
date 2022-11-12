const btnA = document.querySelector('#btnA');

btnA.addEventListener("click", () => {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Tu compra ha sido exitosa!',
        showConfirmButton: false,
        timer: 1500
      });

});