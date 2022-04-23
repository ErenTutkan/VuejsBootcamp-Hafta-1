const app = Vue.createApp({
    data(){
        return {
            name:"eren tutkan",
            age:24,
            imgurl:"https://miro.medium.com/proxy/1*OrjCKmou1jT4It5so5gvOA.jpeg",
        }
    },
    methods: {
        randomNumber(){
            return Math.random();
        }
    },
    
}).mount("#exercise")