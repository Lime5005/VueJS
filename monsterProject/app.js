function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerValue: 100,
            monsterValue: 100,
            roundCounter: 0,
            winner: null,
            messageList: []
        }
    },
    //凡是computed都是与data密切相关的，记录并反应data变化的
    computed: {
        monsterHealthbarStyle() {
            if (this.monsterValue < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterValue + '%' };
        },
        playerHealthbarStyle() {
            if (this.playerValue < 0) {
                return { width: '0%' };
            }
            return { width: this.playerValue + '%' };
        },
        specialAttackControl() {
            //隔3次才启动一次
            return this.roundCounter % 3 !== 0;
        }
    },
    //凡是每个method都要添加的，重复的，根据data数据变化而更改的活动，都可watch: here if the playerValue is 0, he is dead.
    watch: {
        playerValue(value) {
            if (value <= 0 && this.monsterValue <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterValue(value) {
            if (value <= 0 && this.playerValue <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    methods: {
        startAgain() {
            this.playerValue = 100,
                this.monsterValue = 100,
                this.roundCounter = 0,
                this.winner = null,
                this.messageList = []
        },
        attackMonster() {
            this.roundCounter++;
            //获取随机的从0到6的整数：Math.floor(Math.random() * (12 - 5)， 再加上5，即从5到11; (max - min, 不包括max)
            const attack = getRandomNumber(5, 12);
            console.log(attack);
            this.monsterValue -= attack;
            this.logMsg('player', 'attack', attack);
            //wa can access to other methods:
            this.attackPlayer();
        },
        attackPlayer() {
            const attack = getRandomNumber(8, 15);
            console.log(attack);
            this.playerValue -= attack;
            this.logMsg('monster', 'attack', attack);
        },
        specialAttack() {
            this.roundCounter++;
            const attack = getRandomNumber(10, 25);
            console.log(attack);
            this.monsterValue -= attack;
            this.logMsg('player', 'special-attack', attack);
            this.attackPlayer();
        },
        recoverHealth() {
            this.roundCounter++;
            const healthRise = getRandomNumber(8, 20);
            console.log(healthRise);
            if (this.playerValue + healthRise > 100) {
                this.playerValue = 100;
            } else {
                this.playerValue += healthRise;
            }
            this.logMsg('player', 'recover', healthRise);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        logMsg(who, what, value) {
            this.messageList.unshift({
                attackFrom: who,
                whatAttack: what,
                attackValue: value
            });
        }
    }
});

app.mount('#game');