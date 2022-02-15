<template>
  <section id="community-recommend">
    <div class="container community-recommend">
      <h3 class="community-recommend__title title">
        Community Recommendations
      </h3>
      <div class="community-recommend__list-card">
        <div
          class="card"
          v-for="game in allGamesCommunityRecommend"
          :key="game.id"
        >
          <router-link
            class="card__game shadow"
            v-bind:to="{ name: 'GamesDetail', params: { id: game.id } }"
          >
            <img v-bind:src="game.thumbnail" v-bind:alt="game.thumbnail" />
            <div class="card__game-body">
              <h4 class="card__game-body-name title text-line-clamp-1">
                {{ game.title }}
              </h4>
              <span class="card__game-body-badge badge">{{ textBadge }}</span>
            </div>
          </router-link>
          <div class="card__cmt">
            <p class="card__cmt-text">
              <i class="fas fa-quote-left pr-2"></i>
              {{ game.short_description }}
            </p>
            <div class="card__cmt-author">
              <img src="../../assets/default-small.png" alt="" />
              <p class="card__cmt-author-name">By {{ game.developer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "GamesCommunityRecommend",
  computed: {
    ...mapGetters(['textBadge', 'allGamesCommunityRecommend'])
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";

#community-recommend {
  padding: 24px 0;
}
.community-recommend {
  &__title {
    margin-bottom: 12px;
  }
  &__list-card {
    display: grid;
    grid-template: auto / auto auto;
    grid-gap: 15px;
    .card {
      display: grid;
      grid-template: auto / auto auto;
      grid-gap: 15px;
      padding: 24px;
      align-items: center;
      background-color: #1c1e22;
      border: 0 solid rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      &__game {
        background-color: #32383e;
        border-radius: 4px;
        transition: all ease 0.3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.02);
          box-shadow: 0 0.9rem 1rem rgba(0, 0, 0, 0.199);
        }
        img {
          width: 100%;
          object-fit: cover;
          border-radius: 4px 4px 0 0;
        }
        &-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          &-name {
            font-size: 18px;
          }
        }
      }
      &__cmt {
        &-text {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 7;
          overflow: hidden;
          color: $text-color;
          line-height: 1.4;
        }
        &-author {
          margin-top: 12px;
          display: flex;
          align-items: center;
          color: $text-color;
          img {
            width: 32px;
            height: 32px;
            object-fit: cover;
          }
        }
      }
    }
  }
}
// Responsive
@media screen and (max-width: 767px) {
  .community-recommend {
    &__list-card {
      grid-template-columns: 1fr;
    }
  }
}
</style>
