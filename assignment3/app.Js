const app = Vue.createApp({
    data() {
        return {
            result: 0,
            msg1: 'Not there yet',
            msg2: 'Too much!'

        }
    },
    computed: {
        showMsg: function() {
            if (this.result < 37) {
                return this.msg1;
            } else if (this.result === 37) {
                return this.result;
            } else {
                return this.msg2;
            }
        }
    },
    //watch 的 function 名字一定要和它看的那个数据一致!!!
    watch: {
        result() {
            // this function is triggered whenever the result has a new value:
            const that = this;
            setTimeout(function() {
                that.result = 0;
            }, 5000);
        }
    },
    methods: {
        addNum(num) {
            return this.result += num;
        },
    }
});

app.mount('#assignment');