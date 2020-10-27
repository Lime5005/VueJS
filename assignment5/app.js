const app = Vue.createApp({
    data() {
        return {
            task: '',
            tasks: [],
            showList: true
        }
    },
    computed: {
        buttonChange() {
            return this.showList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task);
            this.task = '';
        },
        toggleShowList() {
            this.showList = !this.showList;
        }
    }
});

app.mount('#assignment');