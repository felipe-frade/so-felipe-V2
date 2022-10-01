(function () {
    const stages_text = [
        { 
            key: 'intern', 
            'text-pt': `Fiz estágio em uma empresa de desenvolvimento de sites. 
            Aprendi muita coisa sobre desenvolvimento front-end e comunicação profissional.`, 
            'text-en': `I did an internship at a website development company.
            I learned a lot about front-end development and professional communication.`
        },
        { 
            key: 'junior', 
            'text-pt': `Fui contratado para atuar na parte de t.i de uma grande empresa. 
            Estive em contato com diferentes partes do desenvolvimento de sites e sistemas em geral.`, 
            'text-en': `I was hired to work in the IT part of a large company.
            I've been in touch with different parts of website development and systems in general.`
        },
        { 
            key: 'full', 
            'text-pt': `Evolui muito como programador, profissional e pessoa. 
            Minha carreira avançou bastante e hoje sou um dos líderes do meu time.`, 
            'text-en': `Evolves a lot as a programmer, professional and person.
            My career has advanced a lot and today I am one of the leaders of my team.` 
        }
    ]

    const stages = document.querySelectorAll('.stages')
    stages.forEach(stage => {
        stage.onclick = function(el) {
            let data_stage = el.target.dataset.stage
            let stage_text = stages_text.find(st => {
                return st.key === data_stage
            })

            document.getElementById("stage-text").dataset.pt = stage_text["text-pt"]
            document.getElementById("stage-text").dataset.en = stage_text["text-en"]

            if(document.getElementById('pt-br').classList.contains('active')){
                document.getElementById("stage-text").innerText = stage_text["text-pt"]
            } else {
                document.getElementById("stage-text").innerText = stage_text["text-en"]
            }
        }
    });
})();