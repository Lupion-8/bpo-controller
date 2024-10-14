document.getElementById("particles-1") && particlesJS("particles-1", {
    particles: {
        number: {
            value: 40,
            density: {
                enable: !0,
                value_area: 4e3
            }
        },
        color: {
            value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
        },
        shape: {
            type: "image",
            stroke: {
                width: 0,
                color: "#fff"
            },
            polygon: {
                nb_sides: 6
            },
            image: {
                src: "./imgs/logot_opacity_10.png",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .15,
            random: !0,
            anim: {
                enable: !0,
                speed: .2,
                opacity_min: .15,
                sync: !1
            }
        },
        size: {
            value: 50,
            random: !0,
            anim: {
                enable: !0,
                speed: 2,
                size_min: 5,
                sync: !1
            }
        },
        line_linked: {
            enable: !1,
            distance: 150,
            color: "#ffffff",
            opacity: .4,
            width: 1
        },
        move: {
            enable: !0,
            speed: 1,
            direction: "top",
            random: !0,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 0,
                rotateY: 0
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !1,
                mode: "bubble"
            },
            onclick: {
                enable: !1,
                mode: "repulse"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0
});



$(document).ready(function () {
    $('a.page-scroll').on('click', function (e) {
        e.preventDefault();

        var targetId = $(this).attr('href'); // Obtém o destino do link
        var targetElement = $(targetId); // Seleciona o elemento alvo

        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top // Rolagem suave para a posição do elemento alvo
            }, 600); // 600 milissegundos de duração
        }
    });
});

let dedoview = false;
$(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        gsap.to(".fa-circle-chevron-left", {
            y: 100,
        });
        if (!dedoview) {
            setTimeout(() => {
                gsap.to(".fa-hand-pointer", {
                    display: 'inline'
                });
                dedoview = true;
            }, 3000);
        }

    } else {
        gsap.to(".fa-circle-chevron-left", {
            y: -20,
        });
    }
});



const icon = document.getElementById('icon');
const sections = document.querySelectorAll('section, footer');

function checkSection() {
    // Para cada seção, verifique a sua posição
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Se a seção está passando pelo meio da tela (ou qualquer outra lógica que você queira)
        if (sectionTop < window.innerHeight / 1 && sectionBottom > window.innerHeight / 1) {
            // Altera a cor do ícone baseado na cor da seção
            if (section.classList.contains('blue-section')) {

                gsap.to(".fa-circle-chevron-left", {
                    color: 'white',
                })
            } else if (section.classList.contains('white-section')) {

                gsap.to(".fa-circle-chevron-left", {
                    color: '#01044e',
                })
            }
        }
    });
}


window.addEventListener('scroll', checkSection);
/*document.querySelector('.wapp').addEventListener('click', () => {
    window.open(`https://api.whatsapp.com/send/?phone=5587981025310&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+especialista+cont%C3%A1bil.+&type=phone_number&app_absent=0`);
});*/




document.querySelector('header form input[type="submit"] ').addEventListener('click', (event) => {
    event.preventDefault();  // Impede o envio do formulário
    const n = document.querySelector('.name').value
    const e = document.querySelector('.email').value
    if (n.length > 1 && e.length > 5) {
        window.location.assign('/successful');
    } else {
        alert('Formulários invalido!');
    }

});


setTimeout(() => {
    gsap.to(".wapp", {
        x: 0,
    })
}, 3000);

function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}



function letrinhaBonitinhaAnimada() {
    const textElement = document.getElementById("animated-text");
    const letters = textElement.innerText.split('');
    textElement.innerHTML = ''; // Limpa o conteúdo original para adicionar spans

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.innerHTML = letter === ' ' ? '&nbsp;' : letter; // Preserva espaços
        span.style.color = 'white'; // Texto inicial branco
        textElement.appendChild(span);

        // Aplica a cor #ed8534 letra por letra com um delay
        setTimeout(() => {
            span.style.color = 'var(--base7)';
        }, index * 50); // Atraso de 100ms por letra
    });
}

setTimeout(() => {
    letrinhaBonitinhaAnimada();
}, 1000);

//alert("Largura da página: " + document.documentElement.clientWidth + "px, Altura da página: " + document.documentElement.clientHeight + "px");

function mostrarLogin() {
    //document.getElementById('overlay').style.display = 'block'; // Exibe o fundo
    document.querySelector('.lay_form').style.display = 'flex'; // Exibe o formulário
}

// Função para ocultar o formulário
function fecharLogin() {
    //document.getElementById('overlay').style.display = 'none'; // Esconde o fundo
    document.querySelector('.lay_form').style.display = 'none'; // Esconde o formulário
}

// Fecha o formulário ao clicar fora dele (opcional)
//document.getElementById('overlay').addEventListener('click', fecharLogin);


// Debounce function para limitar chamadas frequentes
function debounce(fn, ms) {
    let timer;
    return _ => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}


function ajustBtns() {
    const btns = document.querySelectorAll('.btn_white');
    const formDesktop = document.querySelector('.passos-abrir-empresa-desktop');
    const displayValue = getComputedStyle(formDesktop).display;

    btns.forEach(btn => {
        // Remova qualquer listener existente antes de adicionar um novo para evitar duplicatas
        btn.removeEventListener('click', mostrarLogin); // Supondo que você só adicione esse tipo de listener

        if (displayValue === "none") {
            //btn.addEventListener('click', mostrarLogin);
            btn.parentElement.href = 'form';
            document.querySelector('.lay_form').style.display = 'flex'; // Exibe o formulário
        } else {
            btn.parentElement.href = 'form';
            document.querySelector('.lay_form').style.display = 'flex'; // Exibe o formulário  
        }
    });
}

// Debounce na função ajustBtns para evitar chamadas excessivas durante o resize
const debouncedAjustBtns = debounce(ajustBtns, 250);

window.addEventListener('resize', debouncedAjustBtns);

ajustBtns(); // Chamada inicial para configurar os eventos corretamente ao carregar







const carouselItems = document.querySelector(".carousel-items")
    , prevButton = document.querySelector(".carousel-prev")
    , nextButton = document.querySelector(".carousel-next");
let currentIndex = 0;

prevButton.addEventListener("click", (() => {
    currentIndex > 0 && (currentIndex--,
        carouselItems.style.transform = `translateX(-${100 * currentIndex / 1.5}%)`)
}
));

nextButton.addEventListener("click", (() => {
    currentIndex < 3 && (currentIndex++,
        carouselItems.style.transform = `translateX(-${100 * currentIndex / 1.5}%)`)
}
));


for (var e = document.getElementsByClassName("accordion-item"), t = 0; t < e.length; t++)
    e[t].querySelector(".accordion-header").addEventListener("click", n);
function n(e) {
    this.parentNode.classList.toggle("expanded"),
        "rotate(180deg)" == this.parentNode.querySelector(".accordion-icon").style.webkitTransform ? this.parentNode.querySelector(".accordion-icon").style.transform = "rotate(0deg)" : this.parentNode.querySelector(".accordion-icon").style.transform = "rotate(180deg)"
}



const cardServ1 = document.querySelectorAll('.csv1');
const cardServ2 = document.querySelectorAll('.csv2');

document.querySelector('.cd1').addEventListener('mouseenter', () => {
    cardServ1.forEach(element => {
        element.classList.add('card-serv-open');
    });
    cardServ2.forEach(element =>{
        element.classList.remove('card-serv-open');
    });
});


document.querySelector('.cd2').addEventListener('mouseenter', () => {
    cardServ2.forEach(element => {
        element.classList.add('card-serv-open');
    });
    cardServ1.forEach(element =>{
        element.classList.remove('card-serv-open');
    });
});


//forçar particulas a serem o mesmo tamnho de header
const div1 = document.querySelector('header');
const div2 = document.querySelector('.particles');

  // Ajustar a altura da Div 2 para corresponder à altura da Div 1
  div2.style.height = div1.offsetHeight + 'px';