new Vue({
    el: '#app',
    data: {
        gameOn: false,
        playerHealth: 100,
        monsterHealth: 100,
        // healthBarStyle: {
        //     backgroundColor: 'green',
        //     margin: 0,
        //     color: 'white',
        // }
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
        }
    }
})