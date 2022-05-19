<template>
  <section class="pb-20 mt-12">
    <div class="mx-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl py-4">
      <div class="mx-auto flex flex-col lg:max-w-xl xl:max-w-2xl">
        <transition-group name="fade">
          <div class="card-container mb-12" v-for="article in $store.state.articles.articles" :key="article.id" :data-id="article.id">
            <div class="image">
              <picture>
                <source :srcset="article.imageUrl" media="(min-width: 600px)">
                <img :src="article.imageUrl" :key="article.title" loading="lazy" onerror="https://thumbs.dreamstime.com/b/espa%C3%A7o-rocket-32237994.jpg" class="h-full ">
              </picture>
            </div>
            <div class="content" >
              <h2 class="title">{{article.title}}</h2>
              <div class="date">{{$dateFns.format(new Date(article.publishedAt),'dd/MM/yyyy')}}</div>
              <p>
                {{article.summary}}
              </p>
              
            <defaultButton valueButton="Ver mais" class="mt-4" :dataId="article.id" :event="callArticle"></defaultButton>
            </div>
          </div>
        </transition-group>
      </div>
      <modal v-show="showModal" :event="openCloseModal"></modal>
      <transition name="fade">
        <p class="flex items-center justify-center" v-show="$store.state.articles.errorMsg">{{$store.state.articles.errorMsg}}</p>
      </transition>
      <transition name="fade">
        <div class="flex items-center justify-center mt-20" v-show="showLoadMoreButton && !$store.state.articles.errorMsg">
            <defaultButton valueButton="carregar mais" :event="loadMoreArticles" styleButton="white"></defaultButton>
        </div>
      </transition >
      <transition name="fade">
        <div v-show="loading" class="flex items-center justify-center mt-20">
          <rocket class="animate-bounce" fill="#302E53" title="foguete com efeito de bounce durante tela de carregamento dos artigos" /> carregando
        </div>
      </transition>
      
    </div>
  </section>
</template>

<script>

import defaultButton from '../components/button.vue'
import modal from '../components/modal.vue'

export default {
  name: 'IndexPage',
  components:{
    defaultButton,modal
  },
  data() {
    return {
      loading:true,
      articles: null,
      totalArticles: null,
      initialCount:10,
      showLoadMoreButton:false,
      initialURL:``,
      showModal:false
    }
  },
  methods:{
    async loadMoreArticles(){
      
      await this.$store.commit('articles/setCount')
      
      this.showLoadMoreButton = false
      this.loading = true
      
      await this.$store.dispatch('articles/setArticles')
      this.loading = false
      if(this.$store.state.articles.initialCount <= this.$store.state.articles.totalArticles){
        this.showLoadMoreButton = true
      }
    },
    openCloseModal(){
      this.showModal = !this.showModal
    },
    async callArticle(ev){
      this.openCloseModal()
      await this.$store.commit('articles/resetArticle')
      await this.$store.dispatch('articles/setArticle',ev.target.dataset.id)
    }
  },
  async mounted(){
    this.$store.dispatch('articles/setTotalArticles')
    this.$store.dispatch('articles/setArticles')
    .then(()=>{
      this.loading = false
      this.showLoadMoreButton = true
    })
    
  }
}
</script>
<style lang="postcss">
  .card-container{
    @apply w-full flex flex-col justify-between;
  }
  .card-container:nth-child(odd),.card-container:nth-child(even){
    @apply flex-col;
  }
  .card-container:nth-child(odd) .content{
    @apply pl-0;
  }
  .card-container:nth-child(even) .content{
    @apply pr-0;
  }
  .card-container .image{
    @apply relative w-full h-56 overflow-hidden;
  }
  .card-container .image img{
    @apply absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 h-full max-w-none w-auto;
  }
  .card-container .content{
    @apply flex flex-col flex-1 items-start justify-center;
  }
  .card-container .content .title{
    @apply font-bold text-2xl mt-2 md:mt-0;
  }
  .card-container .content .date{
    @apply text-xs my-1;
  }
  @media(min-width: 768px){
    .card-container:nth-child(odd){
      @apply flex-row;
    }
    .card-container:nth-child(even){
      @apply flex-row-reverse;
    }
    .card-container:nth-child(odd) .content{
      @apply pl-12;
    }
    .card-container:nth-child(even) .content{
      @apply pr-12;
    }
    .card-container .image{
      @apply w-64;
    }
  }
  
  
  
</style>
