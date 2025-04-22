// Menu dropdown multinível para mobile
document.addEventListener("DOMContentLoaded", function() {
  // Para dispositivos móveis - permitir clique em vez de hover
  document.querySelectorAll('.dropdown-submenu a.dropdown-toggle').forEach(function(element) {
      element.addEventListener('click', function(e) {
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

  // Contador regressivo para ofertas
  function updateOfferTimers() {
      document.querySelectorAll('.offer-timer').forEach(timer => {
          // Simulação - na prática você usaria uma data real de término
          const hours = Math.floor(Math.random() * 12) + 1;
          const mins = Math.floor(Math.random() * 60);
          const secs = Math.floor(Math.random() * 60);
          
          const badges = timer.querySelectorAll('.badge');
          if (badges.length > 0) {
              badges[0].textContent = `${hours}h`;
              badges[1].textContent = `${mins}m`;
              badges[2].textContent = `${secs}s`;
          }
      });
  }

  // Atualiza a cada segundo
  setInterval(updateOfferTimers, 1000);
  updateOfferTimers(); // Inicializa imediatamente

  // Adiciona evento de clique para botões "Adicionar ao carrinho"
  document.querySelectorAll('.btn-sm.btn-danger').forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          const productName = this.closest('.card-body').querySelector('.card-title').textContent;
          
          // Atualiza o contador do carrinho
          const cartBadge = document.querySelector('.cart-badge');
          let currentCount = parseInt(cartBadge.textContent);
          cartBadge.textContent = currentCount + 1;
          
          // Feedback visual
          this.textContent = 'Adicionado!';
          this.classList.add('btn-success');
          this.classList.remove('btn-danger');
          
          // Reseta após 2 segundos
          setTimeout(() => {
              this.textContent = '+ Carrinho';
              this.classList.add('btn-danger');
              this.classList.remove('btn-success');
          }, 2000);
          
          console.log(`Produto adicionado ao carrinho: ${productName}`);
      });
  });
});