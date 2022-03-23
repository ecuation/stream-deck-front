<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      toggleValue: true,
    };
  },

  props: ["title", "filterName"],

  methods: {
    toggleFilter() {
      const data = {
        instructions: {
          setScene: "Main scene",
          setFilter: [
            {
              sourceName: "LogitechCamCroma",
              filterName: this.filterName,
              filterEnabled: this.toggleValue,
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
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">{{ title }}</span>
      <input
        type="checkbox"
        class="toggle toggle-primary"
        v-model="toggleValue"
        @change="toggleFilter"
      />
    </label>
  </div>
</template>
