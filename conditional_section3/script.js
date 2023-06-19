const app = Vue.createApp({
  // el: "#fisrt_prac",
    data() {
      return {
        mygoalsVal: '',
        goals: []
       };
    },
    methods: {
      addgoal() {
        this.goals.push(this.mygoalsVal);
        this.mygoalsVal=''
      },
      removeEle(i){
        this.goals.splice(i,1);
      }
    }
  });
  app.mount('#fisrt_prac');