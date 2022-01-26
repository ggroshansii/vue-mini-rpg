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
            
            this.attackHistory.push(`Player attacks Monster for ${playerDamage}`)
            this.attackHistory.push(`Monster attacks Player for ${monsterDamage}`)
        },
        specialAttack: function() {
            let playerDamage = Math.floor((Math.random() * 30) + 1)
            let monsterDamage = Math.floor((Math.random() * 10) + 1)
            
            this.playerHealth = this.playerHealth - monsterDamage;
            this.monsterHealth = this.monsterHealth - playerDamage;
            
            this.attackHistory.push(`Player attacks Monster for ${playerDamage}`)
            this.attackHistory.push(`Monster attacks Player for ${monsterDamage}`)
        },
        heal: function() {
            let playerHeal = Math.floor((Math.random() * 15) + 1)
            let monsterDamage = Math.floor((Math.random() * 10) + 1)
            
            this.playerHealth = this.playerHealth + playerHeal;
            this.monsterHealth = this.monsterHealth - playerDamage;
            
            this.attackHistory.push(`Player heals for ${playerHeal}`)
            this.attackHistory.push(`Monster attacks Player for ${monsterDamage}`)
        }
    }
})