<template>
    <div :class="`w-screen fixed top-0 left-0 z-10 backdrop-blur-md bg-white transition-all ${distance > 65 ? 'shadow-lg':''}`">
        <div class="flex items-center justify-end mx-auto py-2 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            <div class="relative mr-4">
            <input type="search" v-model="search" placeholder="search" class="w-40 md:w-60 rounded-md py-1.5 pl-2 pr-3 border-solid border-blueblack border-2" v-on:keyup.enter="setSearch">
            <card-search class="absolute right-2 top-2/4 -translate-y-2/4 transform cursor-pointer" fillColor="#302E53" title="icone de lupa localizado na barra de pesquisa" @click="setSearch"/>
        </div>

        <div class="relative cursor-pointer">
            <div  data-name="order" :aria-expanded="showOrderOpts.toString()" aria-controls="select-order"
                class="rounded-md py-1.5 pl-2 pr-3 border-solid border-blueblack border-2 w-32 md:w-36">
                <div data-name="order" @click="openCloseOpts">
                    {{this.$store.state.articles.sortLabel}}
                </div>
                <chevron-down class="absolute right-2 top-2/4 -translate-y-2/4 transform" fillColor="#302E53" :class="`transition-transform tranform ${showOrderOpts ? 'rotate-180' : ''}`"  />
            </div>
            <div v-show="showOrderOpts" class="absolute left-0 top-full mt-2 flex flex-col w-full" id="select-order">
                <div v-for="optSelect in optionsSelect" :key="optSelect.key" @click="changeOrderValue" ref="itemOrder"
                    :data-value="optSelect.data" :data-field="optSelect.field"  class="select-option bg-white hover:bg-orangeblack :focus:bg-orangeblack transition-colors">
                    {{optSelect.text}}
                </div>
            </div>
        </div>   
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'fixed-menu',
        data() {
            return {
                search: '',
                showOrderOpts:false,
                distance: 0,
                countList: 0,
                optionsSelect:[
                    {
                        key:1,
                        field:'publishedAt',
                        data:'Mais novas',
                        text:'Mais novas'
                    },
                    {
                        key:2,
                        field:'title',
                        data:'Titulo',
                        text: 'Titulo'
                    }
                ]
            }
        },
        methods:{
            openCloseOpts(){
                this.showOrderOpts = !this.showOrderOpts
            },
            InitialResultsReset(){
                this.$store.commit('articles/resetInicialCount')
                this.$store.commit('articles/setShowLoadMoreButton',false)
                this.$store.commit('articles/setShowLoadWarning',true)
            },
            setArticles(){
                this.$store.commit('articles/resetArticles')
                this.$store.dispatch('articles/setArticles')
            },
            setSearch(){
                this.InitialResultsReset()
                this.$store.commit('articles/setTitleSearch',this.search)
                this.setArticles()
            },
            changeOrderValue(ev){
                this.showOrderOpts = false
                this.InitialResultsReset()
                this.$store.commit('articles/setSortLabel',ev.target.dataset.value)
                this.$store.commit('articles/setSort',ev.target.dataset.field)
                this.setArticles()
            },
        },
        mounted() {
            document.addEventListener('click', (ev)=>{
                if(ev.target.dataset.name!='order'){
                    this.showOrderOpts = false
                } 
            },true);
            this.$refs.itemOrder.forEach((el)=>{
                el.addEventListener('mouseover',()=>{
                    this.$refs.itemOrder.forEach((el)=>{
                        el.classList.remove('option-selected')
                    })
                })
            })
            window.addEventListener('keyup',(ev)=>{   
                
                switch(ev.key){

                    case 'Escape':
                        this.showOrderOpts = false
                    break  

                    case 'ArrowUp':
                        if(this.showOrderOpts){
                            ev.preventDefault()
                            this.$refs.itemOrder.forEach((el)=>{
                                el.classList.remove('option-selected')
                            })
                            
                            if(this.countList>0){
                                this.countList--
                                this.$refs.itemOrder[this.countList].classList.add('option-selected')
                            }
                            
                        }
                    break
                    case 'ArrowDown':
                        if(this.showOrderOpts){
                            ev.preventDefault()
                            this.$refs.itemOrder.forEach((el)=>{
                                el.classList.remove('option-selected')
                            })
                            
                            if(this.countList<(this.$refs.itemOrder.length-1)){
                                this.countList++
                                this.$refs.itemOrder[this.countList].classList.add('option-selected')
                            }
                          
                        }
                    break 
                    case 'Enter':
                        if(this.showOrderOpts){
                            this.$refs.itemOrder[this.countList].click()
                            this.$refs.itemOrder.forEach((el)=>{
                                el.classList.remove('option-selected')
                            })
                           
                        }
                    break
                }
               
            })
            
            this.distance = window.pageYOffset;
            window.addEventListener('scroll',()=>{
                this.distance = window.pageYOffset
            },true)
            const urlId = new URLSearchParams(location.search).get('text')
            if(urlId!=null){
                this.search = urlId
            }
        }
    }
</script>

<style lang="postcss">
    .select-option{
        @apply py-1.5 pl-2 pr-3 border-solid border-blueblack  border-2 border-t border-b w-full;
    }
    .select-option:first-child{
        @apply rounded-t-md border-t-2;
    }
    .select-option:last-child{
        @apply rounded-b-md border-b-2;
    }
    .option-selected{
        @apply bg-orangeblack;
    }
</style>