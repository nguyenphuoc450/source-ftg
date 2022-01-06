<template>
  <div class="games-filter container">
    <p class="games-filter__total">
      {{ totalGames }} free-to-play games found in our list!
    </p>
    <div class="options">
      <div
        class="options__wrapper"
        v-for="option in filters"
        :key="option.name"
      >
        <a class="options__item">
          <span class="options__item-name">{{ option.name }}:</span>
          <span class="options__item-current">
            {{ option.current }}
            <i class="fas a2 fa-chevron-down"></i>
          </span>
          <ul class="options__dropdown">
            <li
              class="options__dropdown-item"
              v-for="children in option.children"
              :key="children"
            >
              {{ children }}
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
      filters: [
        {
          name: "Platform",
          current: "All Platforms",
          children: ["Windows (PC)", "Browser (Web)", "All Platform"],
        },
        {
          name: "Genre/Tag",
          current: "All Genres",
          children: [
            "MMO",
            "MMORPG",
            "Shooter",
            "Strategy",
            "Moba",
            "Card Games",
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
        {
          name: "Sort by",
          current: "Relevance",
          children: ["Relevance", "Popularity", "Release Date", "Alphabetical"],
        },
      ],
    };
  },
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
      overflow: auto;
      background-color: #3a3f44;
      border-radius: 4px;
      display: none;
      &::-webkit-scrollbar {
        width: 5px;
        background-color: #1c1e22;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgb(122, 130, 136);
      }
      &-item {
        padding: 8px 24px;
        color: $text-color;
        font-size: 14px;
        transition: all ease 0.3s;
        cursor: pointer;
        &:hover {
          color: $color-hover;
          background-color: $text-dark;
        }
      }
    }
  }
}
</style>
