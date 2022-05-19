

export default {
    setTotalArticles(state,value){
        state.totalArticles = value
    },
    setArticle(state,value){
        state.article = value
    },
    setArticles(state,value){
        state.articles = value
    },
    resetArticle(state){
        state.article = ''
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
    }

}

