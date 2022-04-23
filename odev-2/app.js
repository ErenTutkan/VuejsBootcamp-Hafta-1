const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },
  methods: {
    alertBtn(){
      alert("Alert");
    },
    changeValue(e){
      console.log(e)
      this.value=e.target.value
    }
  },
});
app.mount("#exercise");
