<template>
  <div class="loading">
    <div class="loading-circle"></div>
  </div>
</template>

<script>
export default {
name: 'Loading'
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/color.scss';

.loading {
  padding: 200px 0;
  text-align: center;
  &-circle {
    border: 6px solid #f3f3f3;
    border-radius: 50%;
    border-top: 6px solid $color-blue;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>