<script setup>
</script>
<template>
  <div id="about" class="bg-[#333] px-[20px]  pb-24 pt-[20px] sm:py-32">
    <button class="btn w-[100%] bg-[red] flex items-center   h-[60px] text-[18px]">Добавить урок <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-[10px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</button>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
b{
    font-family: s;
    animation-name: shadow;
    animation-duration: 5s;
    animation-iteration-count: infinite;
}
@keyframes shadow {
    0%{
        text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.527);
        letter-spacing: 6px;
    }
    25%{
        text-shadow: -5px 5px 0 rgba(0, 0, 0, 0.527);
        letter-spacing: 18px;
    }
    50%{
        text-shadow: 5px -5px 0 rgba(0, 0, 0, 0.527);
        letter-spacing: 14px;
    }
    75%{
        text-shadow: -5px -5px 0 rgba(0, 0, 0, 0.527);
        letter-spacing: 18px;
    }
    100%{
        text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.527);
        letter-spacing: 6px;
    }
}
.fontSize{
    text-transform: lowercase !important;
    font-family: s !important;
}
#about{
    height: calc(100vh - 120px);
    overflow-y: scroll;
}
@media screen and (max-width: 425px) {
  .fontSize{
    font-size: 10px !important;
  }
}
</style>