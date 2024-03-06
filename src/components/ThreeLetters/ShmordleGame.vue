<template>
  <div v-if="!gameOver">
    <div class="grid container pt-5">
      <div v-for="row in row_coords" :key="row" class="row Row mx-5">
        <div
          v-for="col in col_coords"
          :key="col"
          :class="{
            col: true,
            block: true,
            'block-clr': true,
            correct_char_and_place:
              this.guesses[row].state[col].correct_char_and_place,
            correct_char: this.guesses[row].state[col].correct_char,
            incorrect: this.guesses[row].state[col].incorrect,
          }"
        >
          {{ guesses[row].text[col] }}
        </div>
      </div>
    </div>
    <div>
      <input id="input" v-model="currentGuess" @keyup.enter="submitGuess" class="input-clr"/>
      <p></p>
      <button @click="submitGuess" class="btn btn-success">Submit</button>
      <button @click="displayWord" class="btn btn-success">cheater :(</button>
    </div>
    <div class="container keyboard">
      <div class="row" v-for="coords in keyboard_coords" :key="coords">
        <li
          v-for="(char, state) in alpha.slice(coords[0], coords[1])"
          :key="state"
          :class="{ col: true, block: true, correct_char_and_place: char.currentState.green, correct_char: char.currentState.yellow, incorrect: char.currentState.gray}"
        >
          {{ char.char }}
        </li>
      </div>
    </div>
  </div>
  <WinScreen v-if="wonGame" :answer="word" :def="wordDef" />
  <LoseScreen v-if="loseGame" :answer="word" :def="wordDef" />
</template>
<script>
import WinScreen from "./WinScreen.vue";
import LoseScreen from "./LoseScreen.vue";

export default {
  components: {
    WinScreen,
    LoseScreen,
  },
  data() {
    return {
      guesses: require("../../assets/guesses.json").data,
      word: null,
      currentGuess: "",
      guessCount: 0,
      wonGame: false,
      loseGame: false,
      gameOver: false,
      selectedLetter: "",
      alpha: require("../../assets/characters.json").data,
      rawAlpha: 'abcdefghijklmnopqrstuvwxyz',
      row_coords: [0, 1, 2, 3, 4, 5],
      col_coords: [0, 1, 2],
      keyboard_coords: [[0, 9], [9, 18], [18, 26]],
      definitionUrl: "https://api.dictionaryapi.dev/api/v2/entries/en/",
      wordDef: null,
      wordLength: 3,
      greenFlag: false,
      yellowFlag: false,
      bgColors: require("../../assets/bg_colors.json")
    };
  },
  created() {
    document.body.style.backgroundColor = this.bgColors[window.location.pathname]
    this.fetchWordData().then(() => {
      setTimeout(() => {
        this.fetchWordDefinition();
      }, 2000);
    });
  },
  beforeUnmount() {
    window.location.reload()
  },
  methods: {
    async fetchWordData() {
      await fetch("https://random-word-api.herokuapp.com/word/?length=" + String(this.wordLength))
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.word = String(data[0]);
        });
    },
    async fetchWordDefinition() {
      const url = this.definitionUrl + this.word;
      this.wordDef = await fetch(url).then((response) => {
        return response.json();
      });
    },
    win() {
      this.gameOver = true;
      this.wonGame = true;
    },
    lose() {
      this.gameOver = true;
      this.loseGame = true;
    },
    guessValidated() {
      if (this.currentGuess.length != this.wordLength) {return false}
      let validCharCount = 0;
      this.currentGuess = this.currentGuess.toLowerCase();
      for (let char in this.currentGuess) {
        for (let letter in this.alpha) {
          if (this.currentGuess[char] == this.alpha[letter].char) {
            validCharCount ++
            break
          }
        }
      }
      if (validCharCount == this.wordLength){return true
      } else {return false}
    },
    submitGuess() {
      if (this.guessValidated()) {
        this.guesses[this.guessCount].text = this.currentGuess;
        this.parseGuess();
        this.guessCount++;
        this.currentGuess = "";
        if (this.guessCount > 5 && !this.wonGame) {
          this.lose();
        }
      }
    },
    displayWord() {
      console.log("Totally not the word you're looking for >> ", this.word);
    },
    parseGuess() {
      for (let letterCount = 0; letterCount < this.wordLength; letterCount++) {
        if (this.currentGuess == this.word) {
          this.win();
        } else if (this.currentGuess[letterCount] == this.word[letterCount]) {
          this.guesses[this.guessCount].state[letterCount].correct_char_and_place = true;
          this.greenFlag = !this.greenFlag;
        } else if (this.word.indexOf(this.currentGuess[letterCount]) !== -1) {
          this.guesses[this.guessCount].state[letterCount].correct_char = true;
          this.yellowFlag = !this.yellowFlag;
        } else {
          this.guesses[this.guessCount].state[letterCount].incorrect = true;
        }
        this.selectedLetter = this.currentGuess[letterCount];
        this.changeLetterState(this.selectedLetter);
      }
    },
    changeLetterState(letter) {
      let idx = 0
      for (let idxAlpha in this.rawAlpha) {
        if (this.rawAlpha[idxAlpha] != letter) {
          idx ++ 
        } else {break}
      }
      for (let _ in this.currentGuess) {
        if (this.greenFlag) {
          this.alpha[idx].currentState.yellow = false;
          this.alpha[idx].currentState.green = true;
          this.greenFlag = !this.greenFlag;
          break
        } else if (this.yellowFlag) {
          this.alpha[idx].currentState.yellow = true;
          this.yellowFlag = !this.yellowFlag;
          break
        } else {
          this.alpha[idx].currentState.gray = true;
          break
        }
      }
    },
  },
};
</script>
<style scoped>
.correct_char_and_place {background-color: rgb(29, 228, 29);}
.correct_char {background-color: rgb(253, 253, 1);}
.incorrect {background-color: rgb(113, 113, 113);}
.selected {background-color: #5a5858;}
.part-speech-clr {color: #5b446a;}
.keyboard {
  background-color: rgb(199, 188, 188);
  color: #482a5c;}
.block-clr {
  color:rgb(102, 93, 102);
  border-color:#482a5c}
.input-clr {
  color: rgb(144, 94, 137);
  background-color: #c1c5c6;
}
.Row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
}
</style>./LoseScreen.vue
