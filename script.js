document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const serviciosPage = document.getElementById('servicios-page');
    const inicioLink = document.getElementById('inicio-link');
    const serviciosLink = document.getElementById('servicios-link');

    function showMainContent() {
        mainContent.style.display = 'block';
        serviciosPage.style.display = 'none';
    }

    function showServiciosPage() {
        mainContent.style.display = 'none';
        serviciosPage.style.display = 'block';
    }

    inicioLink.addEventListener('click', function(e) {
        e.preventDefault();
        showMainContent();
    });

    serviciosLink.addEventListener('click', function(e) {
        e.preventDefault();
        showServiciosPage();
    });

    showMainContent();
});
