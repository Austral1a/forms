const expiryDayMask = () => {
    const expiryDay = document.querySelector('#expiration-date')

    expiryDay.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})/)
        e.target.value = !x[2] ? x[1] : x[1] + '/' + x[2]
    })
}

export default expiryDayMask