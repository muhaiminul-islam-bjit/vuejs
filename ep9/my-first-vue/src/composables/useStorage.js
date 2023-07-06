import { ref, watch } from "vue";

export function useStorage(key) {
    let storedVal = localStorage.getItem(key);
    let val = ref(storedVal);

    watch(val, () => {
        if (val.value === '') {
            localStorage.removeItem(key)
        } else {
            write()
        }
    })

    function write() {
        localStorage.setItem(key, val.value);
    }

    return val;
}