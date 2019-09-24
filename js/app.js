const app = new Vue({
    el:'#app',
    data: {
        titulo: 'Hello World',
        items: [{nombre: 'item1', cantidad: 10},
                {nombre: 'item2', cantidad: 0},
                {nombre: 'item3', cantidad: 2}],
        newItem: '',
        totalItems: 0,
        products: []
    },
    // created () {
    //     fetch('https://api.myjson.com/bins/74l63')
    //     .then(response => response.json)
    //     .then(json => {
    //         // this.products = json.products
    //         console.log(json)
    //     }).catch(console.log)
    // }
    // ,
    methods: {
        addItem () {
            this.items.push({
                nombre: this.newItem,
                cantidad: 0
            })
            this.newItem = ''
        }
    },
    computed: {
        totalItemsF () {
            this.totalItems = 0
            for (item of this.items) {
                this.totalItems += item.cantidad
            }
            return this.totalItems
        }
    }
})