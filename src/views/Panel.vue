<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },

  methods: {
    changeScene(sceneName: string, mute: false) {
      const data = {
        instructions: {
          setScene: sceneName,
          mute: [
            {
              item: "Mic main",
              status: mute,
            },
          ],
        },
      };
      this.axios
        .post("http://localhost:8081/api/obs/change-items", data)
        .then((response) => {
          console.log(response.data);
        });
    },
    streamEnding() {
      const data = {
        instructions: {
          setScene: "Stream ending",
          mute: [
            {
              item: "Mic main",
              status: true,
            },
          ],
        },
      };
      this.axios
        .post("http://localhost:8081/api/obs/change-items", data)
        .then((response) => {
          console.log(response.data);
        });
    },
  },
});
</script>
<template>
  <div class="container">
    <div class="inline-flex rounded-md shadow-sm pt-6" role="group">
      <button
        type="button"
        class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        @click="changeScene('Starting soon', true)"
      >
        Starting Soon
      </button>

      <button
        type="button"
        class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        @click="changeScene('Main scene', false)"
      >
        Main Scene
      </button>

      <button
        type="button"
        class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        @click="changeScene('FullScreen Scene', false)"
      >
        Fullscreen Scene
      </button>

      <button
        type="button"
        class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        @click="changeScene('Be right back', true)"
      >
        Be right back
      </button>

      <button
        type="button"
        class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        @click="streamEnding()"
      >
        Stream ending
      </button>
    </div>
  </div>
</template>
