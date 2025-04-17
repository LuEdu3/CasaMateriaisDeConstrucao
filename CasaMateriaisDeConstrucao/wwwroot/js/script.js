// Código para o menu dropdown multinível
document.addEventListener("DOMContentLoaded", function() {
    // Para dispositivos móveis - permitir clique em vez de hover
    document.querySelectorAll('.dropdown-submenu a.dropdown-toggle').forEach(function(element) {
      element.addEventListener('click', function(e) {
        // Verifica se o dispositivo é mobile (pode aprimorar esta detecção)
        if (window.innerWidth < 992) {
          e.preventDefault();
          e.stopPropagation();
          
          const submenu = this.nextElementSibling;
          
          // Fecha todos os outros submenus abertos
          document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(function(menu) {
            if (menu !== submenu) {
              menu.classList.remove('show');
            }
          });
          
          // Alterna a visibilidade do submenu atual
          submenu.classList.toggle('show');
        }
      });
    });
    
    // Fecha submenus ao clicar fora
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown-menu')) {
        document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(function(menu) {
          menu.classList.remove('show');
        });
      }
    });
  });