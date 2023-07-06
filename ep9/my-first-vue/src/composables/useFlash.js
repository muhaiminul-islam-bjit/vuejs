import swal from 'sweetalert';

export function useFlash() {
    function flash(message) {
        return swal('success', message, 'success')
    }

    return { flash }
}