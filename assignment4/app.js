const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            lineVisible: true,
            inputBackgroundColor: ''
        }
    },
    computed: {
        lineClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.lineVisible,
                hidden: !this.lineVisible
            }
        }
    },
    methods: {
        show() {
            this.lineVisible = !this.lineVisible;
        }
    }
});

app.mount('#assignment');