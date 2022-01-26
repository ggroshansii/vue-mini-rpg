new Vue({
    el: '#app',
    data: {
        gameOn: false,
        playerHealth: 100,
        monsterHealth: 100,
        attackHistory: [],
    },
    methods: {
        startGame: function() {
            this.gameOn = true;
        },
        attack: function() {
            let playerDamage = Math.floor((Math.random() * 10) + 1)
            let monsterDamage = Math.floor((Math.random() * 10) + 1)
            
            this.playerHealth = this.playerHealth - monsterDamage;
            this.monsterHealth = this.monsterHealth - playerDamage;
            
            this.attackHistory.push(`Player attacks Monster for ${playerDamage} amount`)
            this.attackHistory.push(`Monster attacks Player for ${monsterDamage} amount`)
        }
    }
})