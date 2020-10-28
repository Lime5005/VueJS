function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerValue: 100,
            monsterValue: 100,
            roundCounter: 0
        }
    },
    //凡是computed都是与data密切相关的，记录并反应data变化的
    computed: {
        monsterHealthbarStyle() {
            return { width: this.monsterValue + '%' };
        },
        playerHealthbarStyle() {
            return { width: this.playerValue + '%' };
        },
        specialAttackControl() {
            //隔3次才启动一次
            return this.roundCounter % 3 !== 0;
        }

    },
    methods: {
        attackMonster() {
            this.roundCounter++;
            //获取随机的从0到6的整数：Math.floor(Math.random() * (12 - 5)， 再加上5，即从5到11; (max - min, 不包括max)
            const attack = getRandomNumber(5, 12);
            console.log(attack);
            this.monsterValue -= attack;
            //wa can access to other methods:
            this.attackPlayer();
        },
        attackPlayer() {
            const attack = getRandomNumber(8, 15);
            console.log(attack);
            this.playerValue -= attack;
        },
        specialAttack() {
            this.roundCounter++;
            const attack = getRandomNumber(10, 25);
            console.log(attack);
            this.monsterValue -= attack;
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
            this.attackPlayer();
        }
    }
});

app.mount('#game');