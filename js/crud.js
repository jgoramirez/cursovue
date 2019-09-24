const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Gym With Vue.js',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea () {
            if ( this.nuevaTarea == '' ){
                return
            }
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            this.nuevaTarea = ''
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        editarTarea (index) {
            this.tareas[index].estado = true
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        eliminar(index) {
            this.tareas.splice(index,1)
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        }
    },
    computed: {

    },
    created() {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'))
        if (datosDB === null) {
            this.tareas = []
        } else {
            this.tareas = datosDB
        }
    }
})