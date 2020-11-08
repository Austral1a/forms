const setUpSessionStorage = () => {
    if(!sessionStorage.getItem('errors')) {
        sessionStorage.setItem('errors', "{}")
    }
    if(!sessionStorage.getItem('isFormsCompleted')) {
        sessionStorage.setItem('isFormsCompleted', "{}")
    }
}
