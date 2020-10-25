const app = Vue.createApp({
    data() {
        return {
            name: '',
            age: 20,
            futureAge: null,
            //imgLink: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2121,x_0,y_142/f_auto,q_auto,w_1100/v1554733134/shape/mentalfloss/78996-istock-682216682.jpg',
        }
    },
    //computed methods are like data property, stored for later, ONLY be triggered when its dependencies changes: 
    computed: {
        fullName() {
            console.log('Running computed methods');
            if (this.name === '') {
                return '';
            }
            return this.name + ' Rose';
        }
    },
    methods: {
        resetName() {
            return this.name = '';
        },
        showFutureAge() {
            return this.age + 5;
        },
        showFavNumber() {
            const num = Math.random();
            return num;
        },
        //页面同步显示输入信息：
        setName(e) {
            this.name = e.target.value;
        }
    }
});

app.mount('#app');