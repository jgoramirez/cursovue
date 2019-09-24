Vue.component('saludo', {
    //template
    template: //html
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>{{texto}}</h3>
    </div>
    `,
    data() {
        return {
            saludo: 'Hola mundo', texto: 'texto'
        }
    }
})