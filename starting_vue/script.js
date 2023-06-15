const app = new Vue({
    el: "#fisrt_prac",
    data() {
      return {
        coursegoal: "kirti is here",
        num_small: "number is less than 0.5",
        num_big: "number is greater than 0.5",
        vueLink: "https://vuejs.org/guide/introduction.html",
        name: "",
        initialCount: 0,
        message: 'Hello, World!'
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
      },
      updateMessage() {
        this.message = 'Updated message!';
      }
    }
  });
