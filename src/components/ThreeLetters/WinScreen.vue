<template>
  <h1 class="win-header win-header-clr">Congratulations! You Won</h1>
  <h3 class="word-reveal word-reveal-clr">{{ answer }}</h3>
  <div v-if="showDefDisplay">
    <div
      v-for="defList in computedDefList"
      :key="defList"
      class="definitions-block"
    >
      <div
        v-for="definition in defList.definitions"
        :key="definition"
        class="individual-definition def-block-clr"
      >
        <p class="part-of-speech part-of-speech-clr">{{ defList.partOfSpeech }}</p>
        <p class="definition def-clr">{{ definition.definition }}</p>
      </div>
    </div>
  </div>
  <div v-if="defNotFound">
      <div class="definitions-block">
        <div class="individual-definition def-block-clr">
          <p class="part-of-speech part-of-speech-clr">Definition</p>
          <p class="definition def-clr">not found</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["answer", "def"],
  data() {
    return {
      defNotFound: false  
    }
  },
  computed: {
    showDefDisplay() {
      return false ? this.def.title : true;
    },
    computedDefList() {
      try {
        return this.def[0].meanings;
      } catch {
        this.defNotFound = true;
        return [];
      }
    },
  },
};
</script>

<style scoped>
.def-clr {color: #141010;}
.word-reveal-clr {color:#680747;}
.part-of-speech-clr {color: #141010;}
.def-block-clr {
  background-color: #cdc5c5; 
  border-color: #680747;
}
.win-header-clr {
  background-image: radial-gradient(#9e57ee, #1eae98);
}
</style>