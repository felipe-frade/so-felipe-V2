(function () {
    const pt_el = document.getElementById('pt-br')
    const en_el = document.getElementById('en-us')
    pt_el.onclick = function() {
        pt_el.classList.add("active")
        en_el.classList.remove("active")
        const elements = document.querySelectorAll('[data-pt]')
        elements.forEach((el) => {
            el.innerText = el.dataset.pt
        })
    }
    en_el.onclick = function() {
        pt_el.classList.remove("active")
        en_el.classList.add("active")
        const elements = document.querySelectorAll('[data-pt]')
        elements.forEach((el, index) => {
            el.innerText = el.dataset.en
        })
    }
})();