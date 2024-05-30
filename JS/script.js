const { createApp } = Vue

createApp({
  data() {
    return {
      todoList: [
          {
            text:'Banane',
            done: false
          },
          {
            text:'Peperoni',
            done: true
          },
          {
            text:'Melanzane',
            done: true
          },
          {
            text:'Ammorbidente',
            done: false
          },
        ],
        newTodoItem: '',

      
    }
  },
  methods: {
    removeItem: function(event){
        this.todoList.splice(event, 1);
    },

    toggle: function(itemIndex){
        this.todoList[itemIndex].done = !this.todoList[itemIndex].done;
    },
    addNewItem: function(newContent) {
        const newItem = {
            text: newContent,
            done: false,

        }
        this.todoList.push(newItem);
        this.clearItemInput();
    },
    clearItemInput() {
        this.newTodoItem = '';
    }
  }
}).mount('#app')