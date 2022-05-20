export default {
    setTotalArticles(state){
        this.$axios.$get(`${state.state.urlCount}?title_contains=${state.state.titleSearch}`)
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
        state.dispatch('setTotalArticles')
        this.$axios.$get(`${state.state.url}${state.state.initialCount}&title_contains=${state.state.titleSearch}&_sort=${state.state.sort}`)
        .then((res)=>{
            state.commit('setArticles',res)
            if(Object.keys(res).length<=0){  
                state.commit('setErrorMsg','Não existem artigos correspondentes a pesquisa.')
            }
        })
        .catch((err)=>{
            switch(err.response.status){
                case 500:
                    state.commit('setErrorMsg','Erro interno de servidor')
                break
                case 404:
                    state.commit('setErrorMsg','Artigos não encontrados')
                break
                default:
                    state.commit('setErrorMsg','Não foi possivel requerir os artigos, tente mais tarde.')
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
            switch(err.response.status){
                case 500:
                    state.commit('setErrorMsgModal','Erro interno de servidor')
                break
                case 404:
                    state.commit('setErrorMsgModal','Artigo não encontrado')
                break
                default:
                    state.commit('setErrorMsgModal','Não foi possivel requerir o artigo, tente mais tarde.')
            }
            
        })
    }

}

