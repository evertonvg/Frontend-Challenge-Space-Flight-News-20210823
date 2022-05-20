<template>
    <button @click.prevent="event" :disabled="disabledButton" :type="typeButton" :data-id="dataId" :class="`rounded-md py-1.5 px-4 ${styleButton=='white' ? 'bg-white text-blueblack border-blueblack hover:bg-iceblack'  : 'bg-blueblack text-white hover:bg-orangeblack border-blueblack hover:border-orangeblack'} border-solid  border-2  transition-colors font-bold`">
        {{valueButton}}
    </button>
</template>
<script>
export default {
    name: 'default-button',
    props: ['valueButton','event','typeButton','disabledButton','dataId','styleButton'],
}
</script>