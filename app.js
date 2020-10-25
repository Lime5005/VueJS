Vue.createApp({
    data() {
        return {
            goals: [],
            inputValue: '',
            vueLink: 'https://vuejs.org/',
            goalA: '<h2>Hello there</h2>',
            goalB: '<h3>My Goal B</h3>',
            counter: 0,
            inputWords: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.inputValue);
            this.inputValue = '';
        },
        showRandomWords() {
            const words = Math.random();
            if (words > 0.5) {
                return 'OK, let\'s go out!'
            } else {
                return 'No, let\'s stay at home...'
            }
        },
        showMyGoal() {
            const myGoal = Math.floor(Math.random() * 10);
            console.log(myGoal);
            if (myGoal > 5) {
                return this.goalA;
            } else {
                return this.goalB;
            }
        },
        add(num) {
            return this.counter += num;
        },
        reduce(num) {
            return this.counter -= num;
        },
        submitForm(e) {
            alert('Submitted!!!');
        },
        sayHello() {
            console.log('Hello');
        },
        showInputWords(e) {
            this.inputWords = e.target.value;
        }
    }
}).mount('#app');