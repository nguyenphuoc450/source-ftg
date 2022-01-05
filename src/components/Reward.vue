<template>
  <section id="reward">
    <div class="container reward">
      <div class="reward__image">
        <img src="../assets/reward.jpg" alt="" />
      </div>
      <div class="reward__content">
        <h3 class="reward__content-title title">
          More Fun and More Rewarding!
        </h3>
        <p class="reward__content-description">
          We are FreeToGame, a new gaming platform that brings all the best
          Free-to-Play Multiplayer Games and MMO Games into one place while
          rewarding gamers with free premium loot and exlusive perks. Plus
          maintain your own games library, track what you've played and search
          for what to play next!
        </p>
        <div class="reward__content-links">
          <router-link
            v-bind:to="{ name: 'Register' }"
            class="reward__content-links-join-now btn-primary"
          >
            JOIN NOW
          </router-link>
          <router-link
            v-bind:to="{ name: 'Home' }"
            class="reward__content-links-learn-more btn-secondary"
          >
            Learn More
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Reward",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/color.scss";

#reward {
  padding: 24px 0 48px;
}
.reward {
  display: grid;
  grid-template: auto / auto auto;
  grid-gap: 30px;
  align-items: center;
  padding: 24px;
  background-color: #23262b;
  border: 1px solid rgba(28, 28, 28, 0.6);
  &__image {
      img {
          width: 100%;
          object-fit: cover;
      }
  }
  &__content {
      &-title {
          font-size: 24px;
      }
      &-description {
          margin: 12px 0;
          color: $text-color;
          line-height: 24px;
      }
      &-links {
          margin-top: 12px;
          display: flex;
          &-join-now {
              padding: 12px 16px;
          }
          &-learn-more {
              padding: 12px 16px;
              margin-left: 12px;
          }
      }
  }
}
</style>
