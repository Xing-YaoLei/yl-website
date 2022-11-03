<script setup lang="ts">
import SlideBar from '@/components/SlideBar.vue';
</script>

<template>
    <main class="container">
        <SlideBar></SlideBar>
        <router-view></router-view>
    </main>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    background-color: #fff;
    border-radius: 20px;
}
</style>
