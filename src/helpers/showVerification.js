import swal from 'sweetalert';

//Print a modal confirming that the data has been changed.
export function showVerificationSuccess(userData) {
    if (userData === null) {
        swal({
            title: 'Desarollador añadido',
            icon: 'success',
            button: 'Aceptar',
            timer: '2000'
        })
    } else {
        swal({
            title: 'Desarollador actualizado',
            icon: 'success',
            button: 'Aceptar',
            timer: '2000'
        })
    }
}