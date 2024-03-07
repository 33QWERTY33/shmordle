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
          <p class="part-of-speech part-speech-clr">Definition</p>
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
.def-clr {color: #39204f;}
.word-reveal-clr {color:rgb(22, 73, 75);}
.part-of-speech-clr {color: #781dad;}
.def-block-clr {
  background-color: #8874d1; 
  border-color: #450d7e;
}
.lose-header-clr {
  background-image: radial-gradient(#83081b, #0c0e0e);
}
</style>