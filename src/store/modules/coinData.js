import axios from "axios";

export default {
    state: {
        sybolsList: [],
        singleSymbolData: {}
    },

    mutations: {
        SET_ALL_SYMBOLS(state, symbols) {
            state.sybolsList = symbols;
        },
        SET_SYMBOL_VALUES(state, singleSymbolData) {
            state.singleSymbolData = singleSymbolData;
        },


    },

    actions: {
        getAllSymbols({ commit }) {
            axios.get('https://api.binance.com/api/v1/exchangeInfo').then((response) => {
                const symbolsList = response.data.symbols.map((item)=> item.symbol)

                commit('SET_ALL_SYMBOLS', symbolsList)
            })
        },
        fetchSymbolData({ commit }, symbol) {
            axios.get('https://api.binance.com/api/v3/ticker/24hr',{
                params: {
                    symbol
                }
            }).then((response) => {
                const { askPrice, bidPrice, lastQty } = response.data;
                const totalAsk = lastQty * bidPrice;
                const totalBid = lastQty * askPrice;

                commit('SET_SYMBOL_VALUES', { askPrice, bidPrice, lastQty, totalAsk, totalBid })
            })
        },
    },
}
