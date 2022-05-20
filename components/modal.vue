<template>

    <transition name="fade">
        <div id="modal" aria-modal="true" role="news" aria-labelledby="showmodal" class="flex items-center justify-center w-full h-full fixed top-0 left-0 bg-grayblack bg-opacity-75 z-50" @click.self="event">
            <div class="max-w-xs sm:max-w-xl md:max-w-2xl xl:max-w-3xl h-auto px-10 py-10 md:px-16 md:py-14 overflow-scroll lg:overflow-hidden max-h-screen bg-white border-2 border-solid border-blueblack opacity-100 relative">
                <close fill="#302E53" title="botão de fechar modal" class="absolute top-3 right-3 md:top-4 md:right-4 cursor-pointer" @click="event"/>
                <div class="flex flex-col" v-if="this.$store.state.articles.article!=''">
        
                    <cardContainer :item="this.$store.state.articles.article" :data-id="this.$store.state.articles.article.id" :showButton="false" />
                    
                    <div class="flex items-center justify-center" v-show="this.$store.state.articles.article.url" >
                        <defaultButton valueButton="Ir para o site" :event="openLink" :data-link="this.$store.state.articles.article.url"></defaultButton>
                    </div>

                </div>
                
                <div v-show="this.$store.state.articles.article=='' && this.$store.state.articles.errorMsgModal==''" class="flex items-center justify-center mt-10">
                    <rocket class="animate-bounce" fill="#302E53" title="foguete com efeito de bounce durante tela de carregamento dos artigos" /> carregando
                </div>
                <p v-show="this.$store.state.articles.errorMsgModal!=''">{{this.$store.state.articles.errorMsgModal}}</p>
                
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