const validationErrors = {
    username: 'Username must contain only letters and numbers and not to be empty',
    password: 'Password must contain at least 6 characters',
    first_name: 'First name must contain only letters and not to be empty',
    last_name: 'Last name must contain only letters and not to be empty',
    email: "Email must be appropriate to 'email@example.com'",
    phone: "Phone must be appropriate to '(123) 456 - 7890'",
    card: 'Card number must contain 16 numbers, not less, not more',
    expirationDate: 'Expiration date must be bigger than today',
    cvv: 'CVV code must contain only 3 numbers'
}

export default validationErrors