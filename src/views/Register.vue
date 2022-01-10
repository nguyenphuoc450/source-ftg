<template>
  <section>
      <div class="wrapper">
        <div class="image"></div>
        <div class="wrapper-form">
          <h1 class="title">
            Create My Account!
          </h1>
          <form action="">
            <div class="form-group">
              <input type="text" name="username" placeholder="Username">
            </div>
            <div class="form-group">
              <input type="email" name="email" placeholder="Email Address">
            </div>
            <div class="form-group row">
              <input type="password" name="password" placeholder="Password">
              <input type="password" name="confirm-password" placeholder="Confirm Password">
            </div>
            <button class="form-btn">Create Account</button>
            <p class="form-note">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            <div class="border-line"></div>
            <p class="form-link">Already a member? <router-link v-bind:to="{ name: 'Login' }"> Log In <i class="fas fa-chevron-right small"></i></router-link></p>
          </form>
        </div>
      </div>
  </section>
</template>

<script>
export default {
name:'Register'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/color.scss';
.wrapper {
  max-width: 1000px;
  margin: 48px auto;
  display: grid;
  grid-template-columns: 45% 55%;
  background-color: #32383e;
  .image {
    background-image: url(../assets/register.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .wrapper-form {
    padding: 48px;
    .title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 24px;
    }
    .form-group {
      margin-bottom: 16px;
      &.row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 12px;
      }
      input {
        display: block;
        width: 100%;
        padding: 12px 16px;
        background-color: #1c1e22;
        border: 1px solid rgba(0,0,0,.6);
        border-radius: 4px;
        outline: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: $color-gray;
        transition: all ease 0.3s;
        &:focus {
          border-color: $color-blue;
        }
      }
    }
    .form-btn {
      display: block;
      width: 100%;
      padding: 12px 16px;
      color: #fff;
      background-color: #3a3f44;
      border: 1px solid #22241d;
      text-align: center;
      font-size: 18px;
      line-height: 1.5;
      border-radius: 4px;
      transition: all ease 0.3s;
      cursor: pointer;
      &:hover {
        background-color: #22241d;
      }
    }
    .form-note {
      margin-top: 8px;
      font-size: 12px;
      color: $color-gray;
      font-weight: 400;
    }
  }
  .border-line {
    margin: 16px 0;
    border-top: 1px solid rgba(94,84,84,.1);
  }
  .form-link {
    text-align: center;
    font-size: 12px;
    color: $text-color;
    a {
      color: $color-blue;
    }
  }
}
</style>