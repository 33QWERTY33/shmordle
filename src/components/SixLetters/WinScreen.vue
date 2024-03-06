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
</template>

<script>
export default {
  props: ["answer", "def"],
  computed: {
    showDefDisplay() {
      return false ? this.def.title : true;
    },
    computedDefList() {
      try {
        return this.def[0].meanings;
      } catch {
        return [];
      }
    },
  },
};
</script>

<style scoped>
.win-header {
  color: transparent;
  font-size: 80px;
  font-weight: 600;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: radial-gradient(#9e57ee, #1eae98);
}
.def-block-clr {
  background-color: #256e25; 
  border-color: #0a3221;
}
</style>