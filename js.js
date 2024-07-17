document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("._si-no");
    elements.forEach(function(element) {
        if (element.textContent.trim() === "Não") {
            element.classList.add("item-none");
        }
    });

    document.querySelector('.wapp').addEventListener('click', () =>{
        window.open(`https://api.whatsapp.com/send/?phone=5587981025310&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+especialista+cont%C3%A1bil.+&type=phone_number&app_absent=0`);
    })
});