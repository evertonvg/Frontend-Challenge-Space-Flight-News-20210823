<template>

    <transition name="fade">
        <div id="modal" aria-modal="true" role="news" aria-labelledby="showmodal" class="flex items-center justify-center w-full h-full fixed top-0 left-0 bg-grayblack bg-opacity-75 z-50" @click.self="event">
            <div class="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-auto p-20 bg-white border-2 border-solid border-blueblack opacity-100">
                <div class="flex flex-col" v-if="this.$store.state.articles.article!=''">
        
                    <cardContainer :item="this.$store.state.articles.article" :data-id="this.$store.state.articles.article.id" :showButton="false" />
                    
                    <div class="flex items-center justify-center mt-12" v-show="this.$store.state.articles.article.url" >
                        <defaultButton valueButton="Ir para o site" :event="openLink" :data-link="this.$store.state.articles.article.url"></defaultButton>
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
    methods:{
        openLink(ev){
            window.open(ev.target.dataset.link, '_blank').focus();
        }
    }, 
}
</script>