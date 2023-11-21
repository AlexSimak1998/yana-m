import { createStore } from 'vuex';

export default createStore({
    state:{
        dateBackend:[],
        currentCard:{}
    },
    actions:{ 
      async  DateFromBackend(ctx){
            const res = await fetch(
                'https://back.miktadov.com/api/yana/productions/'
            )
            const dateBackend = await res.json()
            this.dateBackend = dateBackend
            ctx,this.commit('uppdateDateBackend',dateBackend)
        }

    },
    mutations:{
        uppdateDateBackend(state, dateBackend){
            state.dateBackend = dateBackend
        },
        setCurrentCard(state,card){
            state.currentCard = card
        }
    },
    getters:{
        DateBackend(state){
            return state.dateBackend
        },
        getCurrentCard(){
            return state.currentCard
        }
    },
})