<template>
  <div class="w-full h-20 my-10">
     
    <div class="card shadow-xl bg-neutral w-full mb-5">
      <div class="card-body">
        <div class="card-title mb-5">Gaming Scenes</div>
        <div class="flex" role="group">
          
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="changeScene('[scene] LayoutGaming')"
          >
            Overlay
          </button>

          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="changeScene('[scene] WideScreenGaming')"
          >
            WideScreen
          </button>
        </div>
      </div>
    </div>

    <div class="card shadow-xl bg-neutral w-full mb-5">
      <div class="card-body">
        <div class="card-title mb-5">Static Scenes</div>
        <div class="flex" role="group">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="changeScene('[scene] StartingSoon', true)"
          >
            Starting
          </button>

          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="changeScene('[scene] BeRightBack', true)"
          >
            BRB
          </button>

          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="streamEnding()"
          >
            Ending
          </button>
        </div>
      </div>
    </div>

    <div class="card shadow-xl bg-neutral w-full mb-5">
      <div class="card-body">
        <div class="card-title mb-5">Desktop Scenes</div>
        <div class="flex" role="group">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="changeScene('[scene] LayoutDesktop')"
          >
            Overlay
          </button>

          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="changeScene('[scene] WideScreenDesktop')"
          >
            WideScreen
          </button>
        </div>
      </div>
    </div>

    <div class="card shadow-xl bg-neutral w-full mb-5">
      <div class="card-body">
        <div class="card-title mb-5">OBS Filters</div>
        <div class="flex" role="group">
          <Toggle title="Change B&W filter" filterName="B&W" sourceName="LogitechBrioCam" />
          <Toggle title="Change chroma filter" filterName="Chroma Key"  sourceName="LogitechBrioCam"/>
          <Toggle title="Night DayZ" filterName="NightDayZ" sourceName="4KVideoCapture"/>
        </div>
      </div>
    </div>

    <div class="card shadow-xl bg-neutral w-full mb-5">
      <div class="card-body">
        <div class="card-title mb-5">Twitch chat</div>
        <div class="flex" role="group">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="
              twitchChat(
                `Únete al Discord del manguito melocotón bien sabrosón: https://discord.gg/dQZTD5qhBA`
              )
            "
          >
            Discord
          </button>

          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="twitchChat(`Comandos disponibles: !ninovimo`)"
          >
            Commands
          </button>

          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="twitchChat(`!reanimacion`)"
          >
            Fua
          </button>

          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="twitchChat(`!boy`)"
          >
            Boy
          </button>

          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="twitchChat(`!saludo`)"
          >
            Hi
          </button>

          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="twitchChat(`!rodamoh`)"
          >
            Rodamoh
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toggle from "@/components/Toggle.vue";

interface Category {
  sourceName: string;
  visible: boolean;
}

interface Categories {
  categories: {
    gaming: Category;
    desktop: Category;
  };
  miniStream: boolean;
}

export default defineComponent({
  name: "OBSPanel",
  data(): Categories {
    return {
      categories: {
        gaming: {
          sourceName: "COMPO Game catpture",
          visible: false,
        },
        desktop: {
          sourceName: "Display Capture",
          visible: true,
        },
      },
      miniStream: false,
    };
  },

  components: {
    Toggle,
  },

  methods: {
    changeCategory(categoryName: string) {
      const categories = Object.keys(this.categories) as ["gaming", "desktop"];
      categories.map((key) => {
        this.categories[key].visible = categoryName === key;
      });
      const data = {
        instructions: {
          setSceneItemProperties: [
            this.categories["gaming"],
            this.categories["desktop"],
          ],
          displaySource: [
            { sourceName: "Compo MiniStreamCapture", visible: this.miniStream },
          ],
        },
      };
      this.axios
        .post("http://localhost:8081/api/obs/change-items", data)
        .then((response) => {
          console.log(response.data);
        });
    },

    changeScene(sceneName: string, mute = false) {
      const data = {
        instructions: {
          setScene: sceneName,
          mute: [
            {
              item: "Mic/Aux",
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
    twitchChat(message: string) {
      this.axios
        .post("http://localhost:8081/api/obs/twitch-chat", { message })
        .then((response) => {
          console.log(response.data);
        });
    },
    streamEnding() {
      const data = {
        instructions: {
          setScene: "[scene] StreamEnding",
          mute: [
            {
              item: "Mic/Aux",
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
