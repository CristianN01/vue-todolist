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

  }
}).mount('#app')