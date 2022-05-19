<template>
    <div class="card-container mb-12" :data-id="item.id">
        <div class="image">
            <picture>
            <source :srcset="item.imageUrl" media="(min-width: 600px)">
            <img :src="item.imageUrl" :key="item.title" loading="lazy" onerror="https://thumbs.dreamstime.com/b/espa%C3%A7o-rocket-32237994.jpg" class="h-full ">
            </picture>
        </div>
        <div class="content" >
            <h2 class="title">{{item.title}}</h2>
            <div class="date">{{$dateFns.format(new Date(item.publishedAt),'dd/MM/yyyy')}}</div>
            <p>
                {{item.summary.substring(0, 150) }}{{ item.summary.toString().length>150 ? '...': ''}}
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
    components:{defaultButton}
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