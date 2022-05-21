<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text mr-2">{{ title }}</span>
      <input
        type="checkbox"
        class="toggle toggle-primary"
        v-model="toggleValue"
        @change="toggleFilter"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      toggleValue: true,
    };
  },

  props: ["title", "filterName", "sourceName"],

  methods: {
    toggleFilter() {
      console.log('filter: ', this.sourceName);
      
      const data = {
        instructions: {
          setFilter: [
            {
              sourceName: this.sourceName,
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
