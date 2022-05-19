

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
        if(state.initialCount <= state.totalArticles){
            state.showLoadMoreButton = true
        }
        state.showLoadWarning = false
    },
    resetArticle(state){
        state.article = ''
    },
    resetArticles(state){
        state.articles = ''
    },
    setSortLabel(state,id){
        state.sortLabel = id
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
    setShowLoadMoreButton(state,value){
        state.showLoadMoreButton = value
    },
    setShowLoadWarning(state,value){
        state.showLoadWarning = value
    }

}

