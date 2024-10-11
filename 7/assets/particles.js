document.getElementById("particles-1") && particlesJS("particles-1", {
    particles: {
        number: {
            value: 20,
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
                src: "./assets/logot_opacity_10.png",
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
