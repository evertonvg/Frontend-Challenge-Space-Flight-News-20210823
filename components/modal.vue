<template>

    <transition name="fade">
        <div class="flex items-center justify-center w-full h-full fixed top-0 left-0 bg-grayblack bg-opacity-75 z-50" @click.stop="event">
            <div class="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-auto p-20 bg-white border-2 border-solid border-blueblack opacity-100">
                <div class="flex flex-col" v-if="this.$store.state.articles.article!=''">
                    <div class="card-container">
                        <div class="image">
                            <picture>
                                <source :srcset="this.$store.state.articles.article.imageUrl" media="(min-width: 600px)">
                                <img :src="this.$store.state.articles.article.imageUrl" :alt="this.$store.state.articles.article.title"  loading="lazy" onerror="https://thumbs.dreamstime.com/b/espa%C3%A7o-rocket-32237994.jpg">
                            </picture>
                        </div>
                        <div class="content">
                            <h2 class="title">{{this.$store.state.articles.article.title}}</h2>
                            <div class="date">{{$dateFns.format(new Date(this.$store.state.articles.article.publishedAt),'dd/MM/yyyy')}}</div>
                            <p>
                                {{this.$store.state.articles.article.summary}}
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-center mt-12">
                        <defaultButton valueButton="Ir para o site"></defaultButton>
                    </div>
                </div>
                <div v-else class="flex items-center justify-center mt-20">
                    <rocket class="animate-bounce" fill="#302E53" title="foguete com efeito de bounce durante tela de carregamento dos artigos" /> carregando
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import defaultButton from '../components/button.vue'
export default {
    name:'modal',
    components:{
        defaultButton
    },
    props: ['event'],
    mounted() {
        
    },
}
</script>
<style lang="postcss" scoped>

</style>