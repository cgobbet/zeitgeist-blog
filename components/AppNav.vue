<template>
  <div class="nav">
    <ul>
      <li>
        <nuxt-link exact to="/" class="padding-title">
          <!-- <app-icon></app-icon>BlogName -->
          <img src="../static/zeit-icon-white.png"/>Digital Zeitgeist
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";

export default {
  components: {
    AppIcon
  }
};
</script>

<style lang="scss" scoped>

img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

.nav {
  font-family: 'Oswald', sans-serif;
  background: #000;
  color: #fff;
  padding: 1em 100px;

  a {
    color: #fff;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}

div {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}

</style>
