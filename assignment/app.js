const app = Vue.createApp({
    data() {
        return {
            name: 'Lily',
            age: 20,
            futureAge: null,
            imgLink: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2121,x_0,y_142/f_auto,q_auto,w_1100/v1554733134/shape/mentalfloss/78996-istock-682216682.jpg',
        }
    },
    methods: {
        showFutureAge() {
            return this.age + 5;
        },
        showFavNumber() {
            const num = Math.random();
            return num;
        }
    }
});

app.mount('#app');