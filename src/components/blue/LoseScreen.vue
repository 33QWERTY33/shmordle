<template>
  <h1>You lose! >:(</h1>
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
h1 {
  color: transparent;
  font-size: 80px;
  font-weight: 600;
  background-image: radial-gradient(#83081b, #0c0e0e);
  background-clip: text;
  -webkit-background-clip: text;
}
.def-block-clr {
  background-color: #7dd87d; 
  border-color: #4c9173;
}
</style>