<template>
  <h1 class="lose-header lose-header-clr">You lose! >:(</h1>
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
  computed: {
    showDefDisplay() {
      return false ? this.def.title : true;
    },
  data() {
    return {
      defNotFound: false
    }
  },
    computedDefList() {
      try {
        return this.def[0].meanings;
      } catch {
        this.defNotFound = true
        return [];
      }
    },
  },
};
</script>

<style scoped>
.def-clr {color: #945804;}
.word-reveal-clr {color:rgb(204, 147, 2);}
.part-of-speech-clr {color: #e0ba14;}
.def-block-clr {
  background-color: #ae9eba; 
  border-color: #543bc2;
}
.lose-header-clr {
  background-image: radial-gradient(#83081b, #0c0e0e);
}
</style>