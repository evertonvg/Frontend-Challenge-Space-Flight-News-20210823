<template>
    <div class="card-container mb-12" :data-id="item.id">
        <div class="image">
          <img :src="item.imageUrl" :key="item.title" loading="lazy" @error="replaceByDefault" class="h-full" >
        </div>
        <div class="content" >
            <h2 class="title">{{item.title}}</h2>
            <div class="date">
              <span>
                {{$dateFns.format(new Date(item.publishedAt),'dd/MM/yyyy')}}
              </span>
              
              <div class="border border-solid border-blueblack py px-2" v-show="showButton">
                {{item.newsSite}}
              </div>
            </div>
            <p v-if="showButton == true">  
              {{item.summary.substring(0, 150) }}{{ item.summary.toString().length>150 ? '...': ''}}
            </p>
            <p v-else>  
              {{item.summary}}
            </p>
            <defaultButton id="showmodal" valueButton="Ver mais" class="mt-4" :dataId="item.id" :event="callArticle" v-show="showButton"></defaultButton>
        </div>
    </div>
</template>
<script>
import defaultButton from '../components/button.vue'
export default {
    name:'card-container',
    props:['item','callArticle','showButton'],
    components:{defaultButton},
    methods:{
      replaceByDefault(e){
        e.target.src = 'https://thumbs.dreamstime.com/b/espa%C3%A7o-rocket-32237994.jpg'
      }
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
    @apply flex flex-col flex-1 items-start justify-start;
  }
  .card-container .content .title{
    @apply font-bold text-2xl mt-2 md:mt-0;
  }
  .card-container .content .date{
    @apply text-xs my-1 flex items-center justify-between w-full;
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