const app = Vue.createApp({
  // el: "#fisrt_prac",
    data() {
      return {
        coursegoal: "kirti is here",
        num_small: "number is less than 0.5",
        num_big: "number is greater than 0.5",
        vueLink: "https://vuejs.org/guide/introduction.html",
        name: "",
        initialCount: 0,
        message: 'Hello, World!',
        num: {
          a: 10,
          b: 20
        },
        numm: {}
      };
    },
    methods: {
      outputGoal() {
        const randomenum = Math.random();
        if (randomenum < 0.5) {
          return this.num_small;
        } else {
          return this.num_big;
        }
      },
      setName(event, lastname) {
        this.name = event.target.value + " " + lastname;
      },
      incrementCount() {
        this.initialCount++;
      }
    },
    created() {
      setTimeout(() => {
        console.log('setTimeout Called');
        console.log('Num', this.num);
        this.num.a = 30;
        console.log('a:', this.num.a);
      }, 2000);

      Vue.set(this.numm, 'c', 10);
      Vue.set(this.numm, 'd', 20);

      setTimeout(() => {
        console.log('setTimeout Called');
        console.log('Num', this.numm);
        this.numm.c = 30;
        console.log('c:', this.numm.c);
      }, 2000);
    }
  });
  app.mount('#fisrt_prac');