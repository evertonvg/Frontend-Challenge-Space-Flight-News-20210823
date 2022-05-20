<template>
  <section class="pb-20 mt-12">
    <div class="mx-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl py-4">

      <div class="mx-auto flex flex-col lg:max-w-xl xl:max-w-2xl">
        <transition-group name="fade">
          <cardContainer  v-for="article in $store.state.articles.articles" :key="article.id" :item="article" :callArticle="callArticle" :data-id="article.id" :showButton="true" />
        </transition-group>
      </div>
      
      <modal v-show="showModal" :event="openCloseModal"></modal>

      <p class="flex items-center justify-center" v-show="$store.state.articles.errorMsg">{{$store.state.articles.errorMsg}}</p>

      <div class="flex items-center justify-center mt-20" v-show="$store.state.articles.showLoadMoreButton && !$store.state.articles.errorMsg">
          <defaultButton valueButton="carregar mais" :event="loadMoreArticles" styleButton="white"></defaultButton>
      </div>

      <div v-show="$store.state.articles.showLoadWarning==true && !$store.state.articles.errorMsg" class="flex items-center justify-center mt-20">
        <rocket class="animate-bounce" fill="#302E53" title="foguete com efeito de bounce durante tela de carregamento dos artigos" /> carregando
      </div>
      
    </div>
  </section>
</template>

<script>

import defaultButton from '../components/button.vue'
import modal from '../components/modal.vue'
import cardContainer from '../components/card-container.vue'
export default {
  name: 'IndexPage',
  components:{
    defaultButton,modal,cardContainer
  },
  data() {
    return {
      showModal:false
    }
  },
  methods:{
     loadMoreArticles(){
      this.$store.commit('articles/setShowLoadMoreButton',false)
      this.$store.commit('articles/setShowLoadWarning',true)
      this.$store.commit('articles/setCount')
      this.$store.dispatch('articles/setArticles')
      
      if(this.$store.state.articles.initialCount <= this.$store.state.articles.totalArticles){
        this.showLoadMoreButton = true
      }
    },
    openCloseModal(){
      this.showModal = !this.showModal
      if(this.showModal==true){
        document.body.style.overflow = 'hidden'
      }else{
        document.body.style.overflow = 'auto'
      }
    },
     callArticle(ev){
      this.openCloseModal()
      this.$store.commit('articles/setErrorMsgModal','')
      this.$store.commit('articles/resetArticle')
      this.$store.dispatch('articles/setArticle',ev.target.dataset.id)
    }
  },
  mounted(){
    

    window.addEventListener('keyup',(ev)=>{
      switch(ev.key){
          case 'Escape':
              this.showModal = false
          break
      }
    })
    
    const urlId = new URLSearchParams(location.search)
    if(urlId.get('text')!=null){
      this.$store.commit('articles/setTitleSearch',urlId.get('text'))
    }
    if(urlId.get('order')){
      this.$store.commit('articles/setSort',urlId.get('order'))
      this.$store.commit('articles/setSortLabel',urlId.get('order'))
    }
    if(urlId.get('id')!=null){
      this.$store.commit('articles/resetArticle')
      this.$store.dispatch('articles/setArticle',urlId.get('id'))
      this.openCloseModal()
    }
    this.$store.dispatch('articles/setArticles')
    
  }
}
</script>