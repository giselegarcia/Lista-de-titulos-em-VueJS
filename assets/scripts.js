
const toDoList = {

    data() {
        return {
            tarefa: [],
            novaTarefa:{
                done: false
            }
        }
    },
    methods: {
        addTarefa: function(){
            if(this.novaTarefa.item){
                this.tarefa.push(this.novaTarefa);
                this.novaTarefa = { done: false };
                localStorage.setItem("tarefa", JSON.stringify(this.tarefa))

            }else{
                alert("Precisa inserir um título")
            }
        },
        storeLista(){
            localStorage.setItem("tarefa", JSON.stringify(this.tarefa))
        }
        
    },
    created(){
        this.tarefa = localStorage.getItem("tarefa") ? JSON.parse(localStorage.getItem("tarefa")) : this.tarefa
    }

};

Vue.createApp(toDoList).mount('#app');


