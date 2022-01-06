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
              <p class="additional-info__list-item-text">
                {{ game.developer }}
              </p>
            </div>
            <div class="additional-info__list-item">
              <p class="additional-info__list-item-title">Publisher</p>
              <p class="additional-info__list-item-text">
                {{ game.publisher }}
              </p>
            </div>
            <div class="additional-info__list-item">
              <p class="additional-info__list-item-title">Release Date</p>
              <p class="additional-info__list-item-text">
                {{ game.release_date }}
              </p>
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
          <h3 class="screenshots__title title">{{ game.title }} Screenshots</h3>
          <span class="border-line"></span>
          <div class="screenshots__list">
            <div
              class="screenshots__list-item"
              target="_blank"
              v-for="item in game.screenshots"
              :key="item.id"
              v-on:click="openModalImage(item.image)"
            >
              <img v-bind:src="item.image" v-bind:alt="item.image" />
            </div>
          </div>
        </div>
        <div class="system">
          <h3 class="system__title title">
            Minimum System Requirements <span>({{ game.platform }})</span>
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
    <div
      class="modal-screenshot"
      ref="modalScreenshot"
      v-show="isActiveModal"
      v-on:click="closeModalScreenshot"
    >
      <div class="modal-screenshot__image">
        <img src="" alt="" ref="screenshotImage" v-on:click.stop="" />
      </div>
      <div class="modal-screenshot__close" ref="iconCloseModalScreenshot">
        <i class="fas fa-times"></i>
      </div>
    </div>
  </div>
  <Loading v-else/>
</template>

<script>
import Loading from "../../components/Loading.vue"
export default {
  name: "GamesDetail",
  components: {
    Loading
  },
  props: {
    id: null,
  },
  data() {
    return {
      game: [],
      badgeText: "FREE",
      isActiveModal: false,
    };
  },
  methods: {
    openModalImage(imagePath) {
      let modalImagePath = imagePath;
      this.$refs.screenshotImage.src = modalImagePath;
      this.isActiveModal = true;
    },
    closeModalScreenshot() {
      this.isActiveModal = false;
    }
  },
  mounted() {
    // Get data from api
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" +
        this.id,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "fc992028d5mshf0e2294d608259ep117215jsna8b9ca2ee164",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.game = data;
      })
      .catch((error) => console.log("Error:", error));
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";

.games-detail {
  display: grid;
  grid-template: auto / 30% 70%;
  grid-gap: 15px;
  align-items: start;
  padding: 60px 0;
  .border-line {
    display: block;
    width: 100%;
    border-bottom: 1px solid rgba(94, 84, 84, 0.5);
  }
  &__sidebar {
    position: sticky;
    top: 70px;
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
      padding: 12px 0;
      &__title {
        margin-bottom: 8px;
      }
      &__list {
        display: flex;
        align-items: center;
        justify-content: space-around;
        &-item {
          padding: 12px 6px 0;
          cursor: pointer;
          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .system {
      padding: 12px 0;
      &__title {
        margin-bottom: 8px;
        span {
          color: $color-gray;
          font-size: 18px;
          font-weight: 400;
        }
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
.modal-screenshot {
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: fadeIn ease 0.3s;
  cursor: pointer;
  z-index: 10000;
  &__image {
    max-width: 50%;
    height: 100%;
    margin: 0 auto;
    cursor: default;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__close {
    position: fixed;
    top: 10px;
    right: 20px;
    color: #fff;
    font-size: 36px;
    cursor: pointer;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
