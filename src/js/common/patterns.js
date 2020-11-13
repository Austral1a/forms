const patterns = {
    name: /^[a-zA-Z]+$/, // matches first name, last name
    email: /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/,
    phone: /^\(\d{3}\)\s\d{3}\s-\s\d{4}$/,
    username: /\w+/i,
    password: /\w{6,}/,
    card: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
    cvv: /^\d{3}$/
};

export default patterns;
