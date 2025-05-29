   document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
            const body = document.body; // Ou document.documentElement

            navLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();

                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        body.style.overflow = 'hidden';

                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });

                        setTimeout(() => {
                            body.style.overflow = 'auto';
                        }, 500); // Ajuste o tempo conforme a duração da sua rolagem suave
                    }
                });
            });
        });
    

        const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

/* carrossel */
 

 
        
        
    

