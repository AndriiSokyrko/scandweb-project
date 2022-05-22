import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            cards: [
                {
                    id: 1,
                    name: 'JVC200123',
                    typeProduct: 'Furniture',
                    sku: '1',
                    price: 10,
                    size: 700,

                },
                {
                    id: 2,
                    name: 'JVC200123',
                    typeProduct: 'Book',
                    sku: '1',
                    price: 20,
                    width: 200,
                    height: 100,
                    length:50
                },
                {
                    id: 3,
                    name: 'JVC200123',
                    typeProduct: 'DVD',
                    sku: '1',
                    price: 30,
                    size: 2,

                },
                {
                    id: 4,
                    name: 'JVC200123',
                    typeProduct: 'Furniture',
                    sku: '1',
                    price: 40,
                    width: 200,
                    height: 100,
                    length:50
                },
                {
                    id: 5,
                    name: 'JVC200123',
                    typeProduct: 'Book',
                    sku: '1',
                    price: 50,
                    width: 200,
                    height: 100,
                    length:50
                },
                {
                    id: 6,
                    name: 'JVC200123',
                    typeProduct: 'DVD',
                    sku: '1',
                    price: 60,
                    size: 20,

                },
                {
                    id: 7,
                    name: 'JVC200123',
                    typeProduct: 'Furniture',
                    sku: '1',
                    price: 70,
                    weight: 5

                },
                {
                    id: 8,
                    name: 'JVC200123',
                    typeProduct: 'Furniture',
                    sku: '1',
                    price: 80,
                    size: 2,

                },
            ],
            typeProduct: [
                {id: 1, name: 'Furniture'},
                {id: 2, name: 'Book'},
                {id: 3, name: 'DVD'},
            ],
            massDelete: []

        }
    },
    mutations: {
        addCard( state , payload){
                 let temp = {}
                     Object.keys(payload).forEach(key =>{
                    if( payload[key] !=='' ){
                        temp[key] =  payload[key]
                    }
               })
            if(!Object.keys(payload).length) return;
                 state.cards.push(temp)
            console.log(state.cards);
        },
        addToMassDelete(state, id){
            console.log(id);
          state.massDelete.push(id);
        },
        massDelete(state){
            console.log(state.massDelete );
            console.log(state.cards);
            let temp = state.cards.reduce((acc, elm) => {
                if(state.massDelete.indexOf(elm.id) === -1) acc.push(elm);
                return acc;
            },[])
            state.cards = temp;
            console.log(temp);
        }
    },
    actions:{
        addCard({commit}, payload){
            commit('addCard',payload);
        },
        addToMassDelete({commit},id){
            commit('addToMassDelete',id);
        },
        massDelete({commit}){
            commit('massDelete');
        }
    },
    getters: {
        getCardAll: state => state.cards,
        getLastId: state => state.cards[state.cards.length-1].id +1,
        getTypeProducts: state => state.typeProduct
    }
})

 export default store;