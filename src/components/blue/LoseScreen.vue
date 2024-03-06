<template>
  <h1 class="lose-header lose-header-color">You lose! >:(</h1>
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
      <div>
        <p class="part-of-speech part-of-speech-clr">Definition</p>
        <p class="definition def-clr">not found</p>
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
.def-clr {color: #482a5c;}
.word-reveal-clr {color:rgb(60, 92, 93);}
.part-speech-clr {color: #5b446a;}
.def-block-clr {
  background-color: #7dd87d; 
  border-color: #4c9173;
}
.win-header-clr {
  background-image: radial-gradient(#9e57ee, #1eae98);
}
.lose-header-clr {
  background-image: radial-gradient(#83081b, #0c0e0e);
}
</style>