import themes from './themes'

export const changeTheme = (themeMode) => {
    const body = document.querySelector('body')
    const forms = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const selects = document.querySelectorAll('select')

    body.style.backgroundColor = themes[themeMode].bodyBackColor
    body.style.color = themes[themeMode].textColor

    forms.forEach(form => form.style.backgroundColor = themes[themeMode].formBackColor)

    inputs.forEach(input => input.style.backgroundColor = themes[themeMode].formElemBackColor)
    selects.forEach(select => select.style.backgroundColor = themes[themeMode].formElemBackColor)
}


export const setTheme = () => {
    const button = document.querySelector('.theme__button_change')
    const theme = localStorage.getItem('theme')

    // if theme value is already set up in localStorage
    // change theme to that mode
    if(theme) {
        changeTheme(theme)
    }

    button.addEventListener('click', () => {
        // get previous theme
        const prevTheme = localStorage.getItem('theme')
        // if prev theme is dark change it to light
        // if prev theme is light change it to dark
        prevTheme === 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark')
        const newTheme = localStorage.getItem('theme')
        // apply changes to dom nodes
        changeTheme(newTheme)
    })
}
