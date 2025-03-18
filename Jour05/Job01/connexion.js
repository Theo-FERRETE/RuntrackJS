$(document).ready(function() {
    function validateField(field, validationFunction, errorMessage) {
        $(field).on('input', function() {
            let value = $(this).val();
            if (!validationFunction(value)) {
                $(this).next('.error').text(errorMessage);
            } else {
                $(this).next('.error').text('');
            }
        });
    }
    
    validateField('#email', value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), "Email invalide");
    validateField('#password', value => value.length >= 6, "Le mot de passe doit contenir au moins 6 caractères");
});
