export default {
    setTotalArticles(state){
        this.$axios.$get('/articles/count')
        .then((res)=>{
            state.commit('setTotalArticles',res)
        })
        .catch((err)=>{
            switch(err){
                case 'Error: Network Error':
                    state.commit('setErrorMsg','Erro de conexão com a internet')
                break
                default:
                    state.commit('setErrorMsg','não foi possivel requerir os artigos, tente mais tarde.')
            }
        })
    },
    setArticles(state){
        this.$axios.$get(`${state.state.url}${state.state.initialCount}&title_contains=${state.state.titleSearch}&_sort=${state.state.sort}`)
        .then((res)=>{
            state.commit('setArticles',res)
            if(Object.keys(res).length<=0){  
                state.commit('setErrorMsg','Não existem artigos correspondentes a pesquisa.')
            }
        })
        .catch((err)=>{
            switch(err){
                case 'Error: Network Error':
                    state.commit('setErrorMsg','Erro de conexão com a internet')
                break
                default:
                    state.commit('setErrorMsg','não foi possivel requerir os artigos, tente mais tarde.')
            }
            
        })
    },
    
    setArticle(state,id){
        this.$axios.$get(`${state.state.urlUniqueArticle}${id}`)
        .then((res)=>{
            state.commit('setArticle',res)
            if(res.count<=0){
                state.commit('setErrorMsg','Não existe artigo com esse id')
            }
        })
        .catch((err)=>{
            switch(err){
                case 'Error: Network Error':
                    state.commit('setErrorMsg','Erro de conexão com a internet')
                break
                default:
                    state.commit('setErrorMsg','não foi possivel requerir os artigos, tente mais tarde.')
            }
            
        })
    }

}

