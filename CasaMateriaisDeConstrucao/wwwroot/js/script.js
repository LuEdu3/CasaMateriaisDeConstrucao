// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade para o carrossel de depoimentos
    const testimonials = document.querySelector('.testimonial-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentPosition = 0;
    const testimonialItems = document.querySelectorAll('.testimonial');
    
    if (testimonialItems.length > 1) {
        nextBtn.addEventListener('click', function() {
            if (currentPosition > -50) {
                currentPosition -= 100;
                updateCarousel();
            }
        });
        
        prevBtn.addEventListener('click', function() {
            if (currentPosition < 0) {
                currentPosition += 100;
                updateCarousel();
            }
        });
        
        function updateCarousel() {
            testimonials.style.transform = `translateX(${currentPosition}%)`;
        }
    }
    
    // Funcionalidade para formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                alert(`Obrigado por se cadastrar! Em breve você receberá nossas ofertas no email: ${email}`);
                this.reset();
            }
        });
    }
    
    // Funcionalidade para botões de adicionar ao carrinho
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.closest('.product-card');
            const productName = product.querySelector('h3').textContent;
            
            // Aqui você poderia implementar uma lógica de carrinho mais complexa
            alert(`${productName} foi adicionado ao carrinho!`);
            
            // Efeito visual de confirmação
            button.textContent = 'Adicionado!';
            button.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                button.textContent = 'Adicionar ao Carrinho';
                button.style.backgroundColor = '';
            }, 2000);
        });
    });
    
    // Efeito de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Menu responsivo para dispositivos móveis
    const toggleMenu = () => {
        const nav = document.querySelector('.nav ul');
        nav.classList.toggle('show');
    };
    
    // Criar botão de menu mobile se necessário
    const createMobileMenuButton = () => {
        if (window.innerWidth <= 768) {
            // Verifica se o botão já existe
            if (!document.querySelector('.mobile-menu-btn')) {
                const header = document.querySelector('.header .container');
                const mobileBtn = document.createElement('button');
                mobileBtn.classList.add('mobile-menu-btn');
                mobileBtn.innerHTML = '☰';
                mobileBtn.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                `;
                
                header.appendChild(mobileBtn);
                
                mobileBtn.addEventListener('click', toggleMenu);
                
                // Adicionar estilos para o menu mobile
                const style = document.createElement('style');
                style.innerHTML = `
                    @media (max-width: 768px) {
                        .nav ul {
                            display: none;
                            flex-direction: column;
                            width: 100%;
                        }
                        
                        .nav ul.show {
                            display: flex;
                        }
                        
                        .header .container {
                            position: relative;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        }
    };
    
    // Chamar função na carga inicial
    createMobileMenuButton();
    
    // Redimensionar a janela
    window.addEventListener('resize', createMobileMenuButton);
    
    // Efeito de fade para elementos quando rolam para a visualização
    const fadeInElements = document.querySelectorAll('.category-card, .product-card, .service-card');
    
    const fadeIn = () => {
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);
            
            if (isVisible) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Adicionar estilos para animação de fade
    const fadeStyle = document.createElement('style');
    fadeStyle.innerHTML = `
        .category-card, .product-card, .service-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
    `;
    document.head.appendChild(fadeStyle);
    
    // Chamar a função de fade na carga inicial e no scroll
    fadeIn();
    window.addEventListener('scroll', fadeIn);
});