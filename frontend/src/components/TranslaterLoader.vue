<template>
  <div>
    <span :class="[isDarkMode ? 'loader-dark' : 'loader-light']"></span>
  </div>
</template>
<script>
export default {
  computed: {
    isDarkMode() {
      return this.$store.state.darkMode;
    },
  },
};
</script>
<style scoped>
.loader-dark {
  width: 60px;
  height: 40px;
  position: relative;
  display: inline-block;
  --base-color: #263238; /*use your base color*/
}
.loader-dark::before {
  content: "";
  left: 0;
  top: 0;
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  background-image: radial-gradient(
      circle 8px at 18px 18px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 4px at 18px 0px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 4px at 0px 18px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 4px at 36px 18px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 4px at 18px 36px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 4px at 30px 5px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 4px at 30px 5px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 4px at 30px 30px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 4px at 5px 30px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 4px at 5px 5px,
      var(--base-color) 100%,
      transparent 0
    );
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 3s linear infinite;
}
.loader-dark::after {
  content: "";
  left: 35px;
  top: 15px;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  background-image: radial-gradient(
      circle 5px at 12px 12px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 2.5px at 12px 0px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 2.5px at 0px 12px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 2.5px at 24px 12px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 2.5px at 12px 24px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 2.5px at 20px 3px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 2.5px at 20px 3px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 2.5px at 20px 20px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 2.5px at 3px 20px,
      var(--base-color) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 2.5px at 3px 3px,
      var(--base-color) 100%,
      transparent 0
    );
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 4s linear infinite reverse;
}
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}



.loader-light {
    width: 60px;
    height: 40px;
    position: relative;
    display: inline-block;
    --base-color: #ffffff; /*use your base color*/
  }
  .loader-light::before {
    content: "";
    left: 0;
    top: 0;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #000000;
    background-image: radial-gradient(
        circle 8px at 18px 18px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 18px 0px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 0px 18px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 36px 18px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 18px 36px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 30px 5px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 30px 5px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 30px 30px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 5px 30px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 4px at 5px 5px,
        var(--base-color) 100%,
        transparent 0
      );
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 3s linear infinite;
  }
  .loader-light::after {
    content: "";
    left: 35px;
    top: 15px;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #000000;
    background-image: radial-gradient(
        circle 5px at 12px 12px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 12px 0px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 0px 12px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 24px 12px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 12px 24px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 20px 3px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 20px 3px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 20px 20px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 3px 20px,
        var(--base-color) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 2.5px at 3px 3px,
        var(--base-color) 100%,
        transparent 0
      );
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 4s linear infinite reverse;
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
</style>
