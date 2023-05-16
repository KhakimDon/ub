<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import BottomNavigation from "./components/BottomNavigation.vue";
import { mapGetters } from "vuex";
import "./assets/style.css";
</script>

<script>
export default{
  mounted(){
    setTimeout(() => {
      document.querySelector(".preloader").classList.add("hidden")  
    }, 1000);
    console.log(this.arr);
  },
  computed:{
    ...mapGetters(["arr"])
  }
}
</script>

<template>
  <div class="preloader">
    <span>bubble</span>
    <p>Бабли свой результат</p>
  </div>
  <header class="sticky bg-[#444] top-0 h-[50px] z-[999] w-[100%] flex items-center justify-center">
    <span class="logo">bubble</span>

    <svg
    class="w-6 h-6 absolute text-[#666] right-[15px]"
   
    @click="this.$router.push(`/info`)"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>


  </header>
  <BottomNavigation class="z-[999] fixed b-0" />


  <!-- <header>
    <h1 class="bg-[red] text-[100px]">hello world</h1>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<style scoped>

header{
  background: inherit;
}
.hidden{
  transform: scale(2);
  opacity: 0  ;
  transition-duration: 1s;
}
.red{
  stroke: red;
}
.logo{
  color: white !important;
  font-family: sdeco;
  text-shadow: 2px 2px 0px #555;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
.preloader{
  height: 100vh;
  width: 100%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  left: 0;
  top: 0;
  background: linear-gradient(135deg,blueviolet,rgb(141, 66, 210),rgb(60, 0, 117));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.preloader span{
  display: block;
  text-align: center;
  font-family: sdeco;
  font-size: 7vw;
  color: white;
}
.preloader p{
  display: block;
  text-align: center;
  font-weight: 1000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
}
</style>
