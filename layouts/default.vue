<template>
    <main>
        <header>
            <div class="flex items-center justify-end mx-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl py-2  w-full">
                
                <div class="relative mr-4">
                    <input type="search" v-model="search" placeholder="search" class="w-40 md:w-60 rounded-md py-1.5 pl-2 pr-3 border-solid border-blueblack border-2">
                    <card-search class="absolute right-2 top-2/4 -translate-y-2/4 transform" fillColor="#302E53" title="icone de lupa localizado na barra de pesquisa"/>
                </div>

                <div class="relative cursor-pointer">
                    <div  data-name="order" :aria-expanded="showOrderOpts.toString()" aria-controls="select-order"
                        class="rounded-md py-1.5 pl-2 pr-3 border-solid border-blueblack border-2 w-32 md:w-36">
                        <div data-name="order" @click="openCloseOpts">
                            {{order}}
                        </div>
                        <chevron-down class="absolute right-2 top-2/4 -translate-y-2/4 transform" fillColor="#302E53" :class="`transition-transform tranform ${showOrderOpts ? 'rotate-180' : ''}`"  />
                    </div>
                    <div v-show="showOrderOpts" class="absolute left-0 top-full mt-2 flex flex-col w-full" id="select-order">
                        <div v-for="optSelect in optionsSelect" :key="optSelect.key" @click="changeOrderValue" 
                            :data-value="optSelect.data"  class="select-option bg-white hover:bg-orangeblack transition-colors">
                            {{optSelect.text}}
                        </div>
                    </div>
                </div>   
                
            </div>
            <div class="flex border-b-2 border-blueblack border-solid py-10 flex-col items-center justify-center mx-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
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
export default {
    data() {
        return {
            search: '',
            order: 'Sort',
            showOrderOpts:false,
            optionsSelect:[
                {
                    key:1,
                    data:'Mais antigas',
                    text: 'Mais antigas'
                },
                {
                    key:2,
                    data:'Mais novas',
                    text: 'Mais novas'
                }
            ]
        }
    },
    methods:{
        openCloseOpts(){
            this.showOrderOpts = !this.showOrderOpts
        },
      
        changeOrderValue(ev){
            this.showOrderOpts = false
            this.order = ev.target.dataset.value
        }
    },
    mounted() {
        document.addEventListener('click', (ev)=>{
            if(ev.target.dataset.name!='order'){
                this.showOrderOpts = false
            } 
        });
        
    },
}
</script>
<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
.fade-enter-active, .fade-leave-active {
    transition: all .5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
    transform: translateY(-10px);
}

*{
    font-family:'Roboto Condensed', sans-serif;
    @apply text-grayblack;
}
.select-option{
    @apply py-1.5 pl-2 pr-3 border-solid border-blueblack  border-2 border-t border-b w-full;
}

.select-option:first-child{
    @apply rounded-t-md border-t-2;
}

.select-option:last-child{
    @apply rounded-b-md border-b-2;
}


</style>