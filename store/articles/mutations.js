

export default {
    setTotalArticles(state,value){
        state.totalArticles = value
    },
    setArticle(state,value){
        state.article = value
    },
    setTitleSearch(state,value){
        state.titleSearch = value
    },
    setArticles(state,value){
        state.articles = value
        if(state.initialCount < state.totalArticles){
            state.showLoadMoreButton = true
        }else{
            state.showLoadMoreButton = false
        }
        state.showLoadWarning = false
    },
    resetArticle(state){
        state.article = ''
    },
    resetArticles(state){
        state.articles = ''
    },
    resetInicialCount(state){
        state.initialCount = 10
    },
    setSortLabel(state,id){
        if(id=='title'){
            state.sortLabel = 'Titulo'
        }else{
            if(id=="publishedAt"){
                state.sortLabel = 'Mais antigas'
            }else{
                state.sortLabel = id
            }
        }
    },
    setCount(state){
  
        if(state.initialCount <= state.totalArticles){
            state.initialCount = state.initialCount + 10
        }else{
            return
        }
    },
    setSort(state,value){
        state.sort = value
    },
    setErrorMsg(state,value){
        state.errorMsg = value
    },
    setErrorMsgModal(state,value){
        state.errorMsgModal = value
    },
    setShowLoadMoreButton(state,value){
        state.showLoadMoreButton = value
    },
    setShowLoadWarning(state,value){
        state.showLoadWarning = value
    }

}

