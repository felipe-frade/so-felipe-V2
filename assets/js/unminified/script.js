function alert_css(event){
    // let print_text = ''
    // const el = event.target
    // if(el.dataset.attributes){
    //     print_text = el.dataset.attributes
    // } else {
    //     style = getComputedStyle(el);
    //     print_text = ''
    //     Object.entries(style).forEach(([at, value]) => {
    //         print += `${at}: ${value};\n`
    //     })
    // }
    // alert('Used Styles: \n' + print_text)
}

(function () {
    console.log('Author: Felipe Frade de Oliveira Pereira');
    
    function isVisible(elem) {
        if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
        const style = getComputedStyle(elem);
        if (style.display === 'none') return false;
        if (style.visibility !== 'visible') return false;
        if (style.opacity < 0.1) return false;
        if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
            elem.getBoundingClientRect().width === 0) {
            return false;
        }
        const elemCenter   = {
            x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
            y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
        };
        if (elemCenter.x < 0) return false;
        if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
        if (elemCenter.y < 0) return false;
        if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
        let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
        do {
            if (pointContainer === elem) return true;
        } while (pointContainer = pointContainer.parentNode);
        return false;
    }

    function get_info(){
        switch ('') {
            case value:
                
                break;
        
            default:
                break;
        }
    }

    // others

    if(document.getElementById('goBottom')){
        document.getElementById('goBottom').onclick = function(el){
            const current = document.getElementById('goBottom').getAttribute("data-current")
            const ancora = document.getElementById(current).getAttribute("data-ancora")

            document.getElementById(ancora).scrollIntoView(
                {
                    behavior: "smooth", 
                    block: "end", 
                    inline: "nearest"
                }
            );

            document.getElementById('goBottom').setAttribute("data-current", ancora)
        };
    }

    const itens_menu = document.querySelectorAll('header ul#menu li')
    itens_menu.forEach((item) => {
        item.onclick = function(el){
            const link = el.target.dataset.link
            const ancora = el.target.dataset.ancora
    
            document.getElementById(link).scrollIntoView(
                {
                    behavior: "smooth", 
                    block: "end", 
                    inline: "nearest"
                }
            );
    
            document.getElementById('goBottom').setAttribute("data-current", link)
        }
    })

    function inactive(id){
        document.getElementById(id).dataset.inactive = 'inactive'
    }
    function active(id){
        document.getElementById(id).dataset.inactive = 'false'
    }

    const header = document.getElementsByTagName("header")[0]

    function clear_header(){
        document.getElementById("item-home").classList.remove("active")
        document.getElementById("item-developer").classList.remove("active")
        document.getElementById("item-about").classList.remove("active")
        header.classList.remove("main")
        header.classList.remove("second")
        header.classList.remove("third")
    }

    function update_header(){
        if(isVisible(document.getElementById('third'))){
            inactive('main')
            clear_header()
            header.classList.add("third")
            document.getElementById("item-about").classList.add("active")
        } else if(isVisible(document.getElementById('second'))){
            active('main')
            clear_header()
            header.classList.add("second")
            document.getElementById("item-developer").classList.add("active")
        } else if(isVisible(document.getElementById('main'))){
            active('main')
            clear_header()
            header.classList.add("main")
            document.getElementById("item-home").classList.add("active")
        } else {
            // console.log('none');
        }
    }

    update_header()
    setInterval(() => {
        update_header()
    }, 1000);

    document.getElementById('links').onclick = function() {
        const active = document.getElementById('links').classList.contains('active')
        
        if(active){
            document.getElementById('links').classList.remove('active')
        } else {
            document.getElementById('links').classList.add('active')
        }

        document.querySelectorAll('.links').forEach((link, index) => {
            if(active){
                link.classList.remove('active')
            } else {
                setTimeout(() => {
                    link.classList.add('active')
                }, index * 200);
            }
        })
    }
})();