<template>
  <div>
    <div id="player">Loading player....</div>
  </div>
</template>

<script src="/jwpalyer/jwplayer.js"></script>
<script>
jwplayer.key = "TkWnwQmvDU0S5LRS2uA5OCdVGCRs2YCuVCVbF8aCCoXwLVNMzjYvEosVYwk=";
</script>
<script>
export default {
  name: "Vue2SampleAppPlayer",

  data() {
    return {
      playFile:
        "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
    };
  },

  mounted() {
    this.setPlayerConfig();
  },

  methods: {
    setPlayerConfig() {
      jwplayer("player").setup({
        file: this.playFile,
        width: "200px",
        height: "200px",
        autostart: true,
        volume: 100,
        mute: false,
      });
    },
  },
};
</script>

<style scoped></style>
