import themes from './themes';

export const changeTheme = (themeMode) => {
    const body = document.querySelector('body');
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const selects = document.querySelectorAll('select');

    if(!body) return
    if(!forms.length) return
    if(!inputs.length) return
    if(!selects.length) return

    body.style.backgroundColor = themes[themeMode].bodyBackColor;
    body.style.color = themes[themeMode].textColor;

    forms.forEach(form => form.style.backgroundColor = themes[themeMode].formBackColor);

    inputs.forEach(input => input.style.backgroundColor = themes[themeMode].formElemBackColor);
    selects.forEach(select => select.style.backgroundColor = themes[themeMode].formElemBackColor);
}


export const setTheme = () => {
    const theme = localStorage.getItem('theme');
    const select = document.querySelector('.theme_change');

    if(!select) return

    // if theme value is already set up in localStorage
    // change theme to that mode
    // and select that theme mode, in select tag
    if(theme) {
        changeTheme(theme);
        select.value = theme;
        select.dispatchEvent(new Event('change'));
    }

    select.addEventListener('change', (e) => {
        const dark = 'dark'
        const light = 'light'

        if(e.target.value === dark) {
            localStorage.setItem('theme', dark);

        } else if(e.target.value === light) {
            localStorage.setItem('theme', light);
        }

        // get updated theme, from local storage
        const newTheme = localStorage.getItem('theme');
        changeTheme(newTheme);
    });
};
