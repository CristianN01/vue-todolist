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
        ] 

      
    }
  },
  methods: {
    removeItem: function(event){
        this.todoList.splice(event);
    },

    toggle: function(itemIndex){
        this.todoList[itemIndex].done = !this.todoList[itemIndex].done;
    }
  }
}).mount('#app')