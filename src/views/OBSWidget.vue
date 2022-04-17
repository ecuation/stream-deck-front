<template>
  <div>{{ test }} this is spart</div>
</template>
<script>
import { defineComponent } from "vue";
import OBSWebSocket from "obs-websocket-js";

const obs = new OBSWebSocket();
// await obs.connect("ws://127.0.0.1:4444", "3vzPG2k8D7)bNEfY");
await obs.connect();

export default defineComponent({
  data() {
    return {
      test: "test",
    };
  },
  mounted() {
    //this.connectOBS();
  },
  methods: {
    // connectOBS() {
    //   obs.connect("ws://localhost:4443", "3vzPG2k8D7)bNEfY").then(() => {});
    // },
  },
});
</script>
