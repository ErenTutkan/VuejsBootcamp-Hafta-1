const app = Vue.createApp({
data() {
    return {
        todoList:[{
            id:1,
            text:"abc",
            isDone:true
        },
        {
            id:2,
            text:"armut",
            isDone:false
        },
        {
            id:3,
            text:"kavun",
            isDone:false
        }
    ],
    todoItem:""

    }
},
methods: {
    addNewTodo(){
        if(this.todoItem!=""){
              this.todoList.push({
            text:this.todoItem,
            id: new Date().getTime()
        })
        }
    },
    removeTodo(todo){
        console.log(todo)
        this.todoList=this.todoList.filter(i=>i!==todo)
    }
},
computed:{
    
}
}).mount("#app")