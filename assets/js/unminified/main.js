(function () {
    let last_rand
    const forest = []

    function get_rand(init, end){
        rand = Math.floor(Math.random() * end) + 1
        rand = rand < init ? init : rand
        if(last_rand == rand){
            return get_rand(init, end)
        } else {
            last_rand = rand
            return rand
        }
    }

    function coordenates(){
        return {
            left: get_rand(1, 9),
            top: get_rand(4, 8)
        }
    }

    function teste(){
        console.log('arvore');
        alert("arvore")
    }

    function create_tree(){
        let { left, top } = coordenates()
        forest.push({ left, top })

        const tree = document.createElement('div')
        tree.classList.add('object')
        tree.addEventListener("click", teste)
        tree.classList.add('tree')
        tree.classList.add('ffc')
        tree.classList.add('fpa')
        tree.classList.add(`l${left}0`)
        tree.classList.add(`t${top}0`)

        if(get_rand(1, 20) == 3){
            tree.classList.add('orange')
        }

        document.getElementById('bg-main').append(tree)
    }

    function create_forest(){
        for (let index = 0; index < 10; index++) {
            create_tree()
        }
    }

    create_forest()

    setInterval(() => {
        const inactive = document.getElementById('main').dataset.inactive
        if(inactive !== 'inactive'){
            document.getElementById('bg-main').innerHTML = ''
            create_forest()
        }
    }, 5000);
})();