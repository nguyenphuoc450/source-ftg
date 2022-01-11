<template>
  <div class="games-filter container">
    <p class="games-filter__total">
      {{ totalGames }} free-to-play games found in our list!
    </p>
    <div class="options">
      <div
        class="options__wrapper"
      >
        <a class="options__item">
          <span class="options__item-name">{{ platform.name }}:</span>
          <span class="options__item-current">
            {{ platform.current }}
            <i class="fas a2 fa-chevron-down"></i>
          </span>
          <ul class="options__dropdown">
            <li
              class="options__dropdown-item"
              v-for="children in platform.children"
              :key="children"
              v-on:click="handleSelectCategory(children)"
            >
              <router-link v-bind:to="{ name: 'GamesCategory', params: {category: handleFormatCategory(children)}}">
                {{ children }}
              </router-link>
            </li>
          </ul>
        </a>
      </div>
      <div
        class="options__wrapper"
      >
        <a class="options__item">
          <span class="options__item-name">{{ genres.name }}:</span>
          <span class="options__item-current">
            {{ genres.current }}
            <i class="fas a2 fa-chevron-down"></i>
          </span>
          <ul class="options__dropdown">
            <li
              class="options__dropdown-item"
              v-for="children in genres.children"
              :key="children"
              v-on:click="handleSelectCategory(children)"
            >
              <router-link v-bind:to="{ name: 'GamesCategory', params: {category: handleFormatCategory(children)}}">
                {{ children }}
              </router-link>
            </li>
          </ul>
        </a>
      </div>
      <div
        class="options__wrapper"
      >
        <a class="options__item">
          <span class="options__item-name">{{ sortBy.name }}:</span>
          <span class="options__item-current">
            {{ sortBy.current }}
            <i class="fas a2 fa-chevron-down"></i>
          </span>
          <ul class="options__dropdown">
            <li
              class="options__dropdown-item"
              v-for="children in sortBy.children"
              :key="children"
              v-on:click="handleSelectCategory(children)"
            >
              <router-link v-bind:to="{ name: 'GamesCategory', params: {category: handleFormatCategory(children)}}">
                {{ children }}
              </router-link>
            </li>
          </ul>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "GamesFilter",
  props: {
    totalGames: null,
  },
  data() {
    return {
      platform: {
          name: "Platform",
          current: "All Platforms",
          children: ["Windows (PC)", "Browser (Web)", "All Platform"],
      },
      genres: {
          name: "Genre/Tag",
          current: "All Genres",
          children: [
            "All Genres",
            "MMO",
            "MMORPG",
            "Shooter",
            "Strategy",
            "Moba",
            "Card",
            "Racing",
            "Sports",
            "Social",
            "Fighting",
            "MMOFPS",
            "Action RPG",
            "Sanbox",
            "Open World",
            "Survival",
            "Battle Royale",
            "MMOTPS",
            "Anime",
            "PVP",
            "PVE",
            "Pixel",
            "MMORTS",
            "Fantasy",
            "Sci-Fi",
            "Action",
            "Voxel",
            "Zombie",
            "Turn-based",
            "First Person View",
            "Third Person View",
            "Top-Down View",
            "3D Graphics",
            "2D Graphics",
            "Tank",
            "Space",
            "Sailing",
            "Side Scroller",
            "Superhero",
            "Permadeath",
          ],
      },
      sortBy: {
          name: "Sort by",
          current: "Relevance",
          children: ["Relevance", "Popularity", "Release Date", "Alphabetical"],
      },
    }
  },
  methods: {
     handleSelectCategory(category) {
      let categoryFormat = category.toLowerCase().replace(/[\s\uFEFF\xA0]/g, '-');
      let url = ''
      if(categoryFormat.includes('pc')) {
        url = 'platform=pc'
        this.platform.current = category
      }
      else if(categoryFormat.includes('browser')) {
        url = 'platform=browser'
        this.platform.current = category
      }
      else if(categoryFormat.includes('all-platform')) {
        url = ''
        this.platform.current = category
      }
      else if( categoryFormat.includes('relevance') ||
          categoryFormat.includes('popularity') ||
          categoryFormat.includes('release') ||
          categoryFormat.includes('alphabetical')
      ) {
        url = `sort-by=${categoryFormat}`
        this.sortBy.current = category
      }
      else if(categoryFormat.includes('all-genres')) {
        url = ''
        this.genres.current = category
      }
      else {
        url = `category=${categoryFormat}`
        this.genres.current = category
      }
      this.$emit('onSelectCategory', url)
    },
    // Format value: Open World -> open-world
    handleFormatCategory(category) {
      let categoryFormat = category.toLowerCase().replace(/[\s\uFEFF\xA0]/g, '-');
      return categoryFormat
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";

.games-filter {
  padding: 12px 0;
  &__total {
    color: $color-gray;
  }
  .options {
    display: grid;
    grid-template: auto / auto auto auto auto;
    padding: 24px 0;
    border-bottom: 1px solid rgba(94, 84, 84, 0.5);
    &__item {
      position: relative;
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 100%;
        width: 100%;
        height: 10px;
        background-color: transparent;
      }
      &:hover {
        .options__dropdown {
          display: block;
        }
      }
      &-name {
        color: $color-gray;
      }
      &-current {
        cursor: pointer;
        i {
          color: $color-blue;
        }
      }
    }
    &__dropdown {
      position: absolute;
      top: 110%;
      width: 100%;
      max-height: 200px;
      overflow-y: auto;
      background-color: #3a3f44;
      border-radius: 4px;
      display: none;
      z-index: 10;
      &::-webkit-scrollbar {
        width: 5px;
        background-color: #1c1e22;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgb(122, 130, 136);
      }
      &-item {
        a {
          display: block;
          padding: 8px 24px;
          transition: all ease 0.3s;
          cursor: pointer;
          color: $text-color;
          font-size: 14px;
        }
        &:hover {
          color: $color-hover;
          background-color: $text-dark;
        }
      }
    }
  }
}
</style>
