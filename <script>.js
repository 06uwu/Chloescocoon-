function redirectToForm(product) {
    var formUrl;
    switch (product) {
        case 'shortRomantic':
            formUrl = 'https://forms.gle/y4H8QrbcnjDZZJRs5';
            break;
        case 'longFeather':
            formUrl = 'https://forms.gle/9Nd1HrS8U9VDFfdr6';
            break;
        // Add more cases for each product with their respective URLs
        case 'shortPinkBow':
            formUrl = 'https://forms.gle/fY6iKCLxpGAKn6c28';
            break;
        case 'shortBlueScarf':
            formUrl = 'https://forms.gle/6iPGrAFCX7TMsW4Q6';
            break;
        case 'longBlueFeather':
            formUrl = 'https://forms.gle/BDQCoADetxfwJeYv5';
            break;
        case 'longBow':
            formUrl = 'https://forms.gle/mswFw2n1QQ1mwxk79';
            break;
        case 'pirateGraduating':
            formUrl = 'https://forms.gle/RhfZUreEtZREmnqd7';
            break;
        case 'multiWearable':
            formUrl = 'https://forms.gle/Fm7eL6ga6yWWKLB99';
            break;
        case 'princess':
            formUrl = 'https://forms.gle/gTe4y5WKR2fxM9n77';
            break;
        // Continue adding cases as needed
        default:
            alert("Invalid product. Please try again.");
            return;
    }
    window.open(formUrl, '_blank');
}
