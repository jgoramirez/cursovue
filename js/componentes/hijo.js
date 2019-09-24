Vue.component('hijo', {
    template: //html
    `
    <div class="p-5 bg-success">
        <h4>Componente hijo: {{numeroHijo}}</h4>
        <h5>Nombre: {{nombre}}</h5>
        <button class="btn btn-danger" @click="numeroHijo++">+</button>
    </div>
    `,
    props: ['numero'],
    data() {
        return {
            nombre: 'Omar',
            numeroHijo: 0
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre)
        this.$emit('numeroHijo', this.numeroHijo)
    },
})