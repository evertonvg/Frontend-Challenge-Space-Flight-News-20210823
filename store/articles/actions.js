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
        this.$axios.$get(`${state.state.url}${state.state.initialCount}`)
        .then((res)=>{
            state.commit('setArticles',res)
            if(res.count<=0){
                state.commit('setErrorMsg','Não existem artigos')
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

