<template>
  <div class="container" v-if="game.id">
    <div class="games-detail">
      <div class="games-detail__sidebar">
        <div class="games-detail__sidebar-image">
          <img v-bind:src="game.thumbnail" v-bind:alt="game.thumbnail" />
        </div>
        <div class="games-detail__sidebar-info">
          <span class="games-detail__sidebar-info-badge">{{ badgeText }}</span>
          <a
            v-bind:href="game.game_url"
            class="games-detail__sidebar-info-play-now btn-primary"
            >PLAY NOW</a
          >
        </div>
      </div>
      <div class="games-detail__content">
        <!-- <h1 class="games-detail__content-name title">{{ game.title }}</h1> -->
        <div class="about">
          <h3 class="about-title title">About {{ game.title }}</h3>
          <span class="border-line"></span>
          <p class="about-description">{{ game.description }}</p>
        </div>
        <div class="additional-info">
          <h3 class="additional-info__title title">Additional Information</h3>
          <span class="border-line"></span>
          <div class="additional-info__list">
            <div class="additional-info__list-item">
              <p class="additional-info__list-item-title">Title</p>
              <p class="additional-info__list-item-text">{{ game.title }}</p>
            </div>
            <div class="additional-info__list-item">
              <p class="additional-info__list-item-title">Developer</p>
              <p class="additional-info__list-item-text">{{ game.developer }}</p>
            </div>
            <div class="additional-info__list-item">
              <p class="additional-info__list-item-title">Publisher</p>
              <p class="additional-info__list-item-text">{{ game.publisher }}</p>
            </div>
            <div class="additional-info__list-item">
              <p class="additional-info__list-item-title">Release Date</p>
              <p class="additional-info__list-item-text">{{ game.release_date }}</p>
            </div>
            <div class="additional-info__list-item">
              <p class="additional-info__list-item-title">Genre</p>
              <p class="additional-info__list-item-text">{{ game.genre }}</p>
            </div>
            <div class="additional-info__list-item">
              <p class="additional-info__list-item-title">Platform</p>
              <p class="additional-info__list-item-text">{{ game.platform }}</p>
            </div>
          </div>
        </div>
          <div class="screenshots">
            <h3 class="screenshots__title title">
              {{ game.title }} Screenshots
            </h3>
            <span class="border-line"></span>
            <div class="screenshots__list">
              <a
                class="screenshots__list-item"
                target="_blank"
                v-for="item in game.screenshots"
                :key="item.id"
                v-bind:href="item.image"
              >
                <img v-bind:src="item.image" v-bind:alt="item.image" />
              </a>
            </div>
          </div>
          <div class="system">
            <h3 class="system__title title">
              Minimum System Requirements ({{ game.platform }})
            </h3>
            <span class="border-line"></span>
            <div class="system__list">
              <div
                class="system__list-item"
                v-for="(system, index) in game.minimum_system_requirements"
                :key="index"
              >
                <p class="system__list-item-title">{{ index }}</p>
                <p class="system__list-item-text">{{ system }}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="loadding" v-else>
      Loadding...
  </div>
</template>

<script>
export default {
  name: "GamesDetail",
  props: {
    game: null,
    badgeText: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";

.games-detail {
  display: grid;
  grid-template: auto / 30% 70%;
  grid-gap: 15px;
  padding: 60px 0;
  .border-line {
    display: block;
    width: 100%;
    border-bottom: 1px solid rgba(94, 84, 84, 0.5);
  }
  &__sidebar {
    &-image {
      img {
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
    }
    &-info {
      display: flex;
      margin-top: 24px;
      &-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        background: $color-dark;
        border-radius: 4px;
        cursor: default;
      }
      &-play-now {
        margin-left: 12px;
        width: calc(70% - 12px);
        text-align: center;
      }
    }
  }
  &__content {
    .about {
      padding-bottom: 12px;
      &-title {
        margin-bottom: 8px;
      }
      &-description {
        margin-top: 12px;
        color: $text-color;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .additional-info {
      padding: 12px 0;
      &__title {
          margin-bottom: 8px;
      }
      &__list {
          display: grid;
          grid-template: auto auto / auto auto auto;
          &-item {
              margin-top: 12px;
              &-title {
                  color: $color-gray;
              }
              &-text {
                  margin-top: 6px;
                  color: $text-color;
              }
          }
      }
    }
    .screenshots {
        padding: 24px 0;
        &__title {
            margin-bottom: 8px;
        }
        &__list {
            display: flex;
            align-items: center;
            justify-content: space-around;
            &-item {
                padding: 12px 6px 0;
                img {
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
    }
    .system {
        padding: 24px 0;
        &__title {
            margin-bottom: 8px;
        }
        &__list {
            display: grid;
            grid-template: auto auto auto / auto auto;
            &-item {
                margin-top: 12px;
                &-title {
                    color: $color-gray;
                    text-transform: capitalize;
                }
                &-text {
                    margin-top: 6px;
                    color: $text-color;
                }
            }
        }
    }
  }
}
.loadding {
    padding: 120px 0;
    text-align: center;
}
</style>
