<template>
    <main role="main">
        <header>
            <fixedMenu/>
            <div class="flex mt-20 border-b-2 border-blueblack border-solid py-10 flex-col items-center justify-center mx-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                <div class="flex border-2 border-blueblack border-solid rounded-full p-8">
                    <rocket-launch fillColor="#302E53" :size="60" title="simbolo de um foguete para cima, na cor azul"/>
                </div>
                <h1 class="mt-6 text-4xl">
                    Space Flight News
                </h1>
            </div>
        </header>
        <transition name="fade">
            <Nuxt/>
        </transition>
    </main>
</template>
<script>
import fixedMenu from '../components/fixed-menu.vue'
export default {
    components:{
        fixedMenu
    }
}
</script>
<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
.fade-enter-active, .fade-leave-active {
    @apply transition ease-in duration-300;
}
.fade-enter-from, .fade-leave-to{
    @apply opacity-0 transform -translate-y-3;
}
.fade-enter-to, .fade-leave-from{
    @apply opacity-100 transform translate-y-0;
}
*{
    @apply text-grayblack font-Condensed;
}

</style>