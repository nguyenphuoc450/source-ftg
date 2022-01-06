<template>
  <footer id="footer">
    <div class="container footer">
      <div class="footer__bottom">
        <p class="footer__bottom-text">
          © 2022 Digiwalls Media, all rights reserved. All trademarks are
          property of their respective owners.
        </p>
        <div class="footer__bottom-socials">
            <a href="" class="footer__bottom-socials-item">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="footer__bottom-socials-item">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="footer__bottom-socials-item">
                <i class="fab fa-twitter"></i>
            </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/color.scss";
#footer {
  background-color: #1c1e22;
  border-radius: 4px;
}
.footer {
    &__bottom {
        // border-top: 1px solid rgba(94,84,84,.1);
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 16px 24px;
        &-text {
            color: $color-title;
            font-size: 12px;
        }
        &-socials {
            &-item {
                padding: 0 12px;
                color: #fff;
                transition: all ease 0.3s;
                &:hover {
                  color: #d9d9d9;
                }
            }
        }
    }
}
</style>
