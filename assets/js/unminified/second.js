(function () {
    let last_rand
    var spots_coo = []

    var spots = [
        // { key: '0', type: 'span', value: 'HTML', color: 'orange' },
        { key: 'git', type: 'img', value: 'assets/icons/github.png', alt: 'Github', invert: true, exp: 3 },
        { key: 'js', type: 'img', value: 'assets/icons/javascript.png', alt: 'JavaScript', invert: true, exp: 4 },
        { key: 'rn', type: 'img', value: 'assets/icons/react-native.png', alt: 'React', invert: true, exp: 2 },
        { key: 'html', type: 'img', value: 'assets/icons/html-edited.png', alt: 'HTML', invert: true, exp: 4 },
        { key: 'css', type: 'img', value: 'assets/icons/css-edited.png', alt: 'CSS', invert: true, exp: 4 },
        { key: 'ts', type: 'img', value: 'assets/icons/typescript.png', alt: 'TypeScript', invert: true, exp: 4 },
        { key: 'php', type: 'img', value: 'assets/icons/php-edited.png', alt: 'PHP', invert: true, exp: 4 },
        { key: 'php', type: 'img', value: 'assets/icons/vscode.png', alt: 'Vscode', invert: true, exp: 4 },
        { key: 'php', type: 'img', value: 'assets/icons/sql.png', alt: 'SQL', invert: true, exp: 4 },
        { key: 'php', type: 'img', value: 'assets/icons/regex.png', alt: 'Regex', invert: true, exp: 4 },
        { key: 'php', type: 'img', value: 'assets/icons/codeigniter.png', alt: 'CodeIgniter', invert: true, exp: 2 },
        { key: 'php', type: 'img', value: 'assets/icons/graphql.png', alt: 'Graphql', invert: true, exp: 3 },
    ]
    let spots_temp = []

    function get_rand(init, end, remove = []){
        rand = Math.floor(Math.random() * end) + init
        if(last_rand === rand || remove.some(r => r === rand)){
            return get_rand(init, end)
        } else {
            last_rand = rand
            return rand
        }
    }

    function coordenates(){
        const left = get_rand(1, 9, [3, 4, 5, 6, 7])
        const top = get_rand(1, 9, [3, 4, 5, 6, 7])

        if(spots_coo.some(spot => {
            return spot.left === left && spot.top === top
        })) {
            return coordenates()
        }

        return { left, top }
    }

    function spot_img(el, spot){
        el.setAttribute('src', spot.value)
        el.setAttribute('alt', spot.alt)
        if(spot.invert){
            el.style.filter = 'brightness(0) invert(1)'
        }
    }

    function spot_span(el, spot){
        el.innerText = spot.value
        el.style.borderColor = spot.color
        el.style.color = spot.color
    }

    function create_spot(){
        let { left, top } = coordenates()
        spots_coo.push({ left, top })
        
        const spot = spots_temp.pop()

        const spot_element = document.createElement(spot.type)
        spot_element.setAttribute('id', `spot-${spot.key}`)
        spot_element.classList.add('object')
        spot_element.classList.add(`l${left}0`)
        spot_element.classList.add(`t${top}0`)
        spot_element.dataset.top = top
        spot_element.dataset.left = left

        if(spot.type === 'img'){
            spot_img(spot_element, spot)
        } else if (spot.type === 'span'){
            spot_span(spot_element, spot)
        }

        document.getElementById('bg-second').append(spot_element)
        setTimeout(() => {
            document.getElementById(`spot-${spot.key}`).remove()
            spots_temp.push(spot)
            create_spot()
            spots_coo = spots_coo.filter(spot => {
                return !(spot.left === left && spot.top === top) 
            })
        }, 6000);
    }
    
    function create_sky() {
        spots_temp = spots
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        for (let index = 0; index < spots_temp.length; index++) {
            setTimeout(() => {
                create_spot()
            }, parseInt(`${get_rand(1, 5)}000`));
        }
    }

    function sort_exp(a, b){
        if(a.exp > b.exp){
            return -1
        } else if(a.exp < b.exp){
            return 1
        } else {
            if(a.alt > b.alt){
                return -1
            } else if(a.alt < b.alt){
                return 1
            } else {
                return 1
            }
        }
    }

    function create_table(){
        const spots_exp = spots
            .sort((a, b) => sort_exp(a, b))
        
        let count = 0
        let tr = document.createElement('tr')
        spots_exp.forEach((spot, index) => {
            count++
            if(count === 1){
                tr = document.createElement('tr')
            }
            span = document.createElement('span')
            span.innerText = spot.alt

            td = document.createElement('td')
            td.classList.add("object")
            td.classList.add(`exp-${spot.exp}`)
            td.dataset.exp = spot.exp
            td.appendChild(span)
            tr.appendChild(td)
            
            if(count === 4 || index + 1 === spots_exp.length){
                count = 0
                document.querySelector("#table-exp tbody").appendChild(tr)
            }
        })
        const tds = document.querySelectorAll("#table-exp tbody td")
        // tds.forEach(td => {
        //     td.onclick = function(el) {
        //         const show = el.target.classList.contains("show")
        //         tds.forEach((td) => td.classList.remove("show"))
        //         if(!show){
        //             el.target.classList.add("show")
        //         }
        //     }
        // })
    }

    create_sky()
    create_table()
})();