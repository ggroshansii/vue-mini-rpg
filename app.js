new Vue({
  el: "#app",
  data: {
    gameOn: false,
    playerHealth: 100,
    monsterHealth: 100,
    attackHistory: [],
  },
  methods: {
    startGame: function () {
      this.gameOn = true;
    },
    selectionPick: function (event) {
      let selection = event.target.textContent;
      let playerDamage = 0;
      let playerHeal = 0;

      if (selection == "ATTACK") {
        playerDamage = Math.floor(Math.random() * 10 + 1);
        this.attackHistory.push(`Player attacks Monster for ${playerDamage}`);
      } else if (selection == "SPECIAL ATTACK") {
        playerDamage = Math.floor(Math.random() * 30 + 1);
        this.attackHistory.push(`Player attacks Monster for ${playerDamage}`);
      } else if (selection == "HEAL") {
        playerHeal = Math.floor(Math.random() * 10 + 1);
        this.attackHistory.push(`Player heals for ${playerHeal}`);
      }

      let monsterDamage = Math.floor(Math.random() * 10 + 1);

      this.playerHealth = this.playerHealth - monsterDamage + playerHeal;
      this.monsterHealth = this.monsterHealth - playerDamage;

      this.attackHistory.push(`Monster attacks Player for ${monsterDamage}`);
    },
  },
  computed: {},
  watch: {
    playerHealth: function () {
      if (this.playerHealth <= 0) {
        return alert("GAME OVER");
      }
    },
    monsterHealth: function () {
      if (this.monsterHealth <= 0) {
        return alert("GAME OVER");
      }
    },
  },
});
