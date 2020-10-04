<template>
    <div class="wrapper">
        <div class="cards">
            <div class="cards__header">
            </div>
            <div class="selectbox">
              <v-select
                  v-model="selectedSymbol"
                  :options="sybolsList"
                  :clearable="false"
              ></v-select>
            </div>
            <div class="tablebox">
              <DataTable
                v-if="singleSymbolData"
                :data="singleSymbolData"
                @subscribeOnSymbol="subscribeOnSymbol"
                :isButtonVisible="true"
              >
              </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import DataTable from "../components/baseComponents/DataTable";


    export default {
        name: 'Home',
        components: {
          DataTable
        },

        data() {
            return {
              isSymbolSelected: false,
              selectedSymbol: "BTCUSDT"
            }
        },
        computed: mapState({
          sybolsList: state => state.coinData.sybolsList,
          singleSymbolData: state => state.coinData.singleSymbolData,
        }),
        methods: {
            getSectedSybol(){
              this.$store.dispatch('fetchSymbolData' , this.selectedSymbol)
            },
            subscribeOnSymbol(){
              const coin = this.selectedSymbol;

              this.$router.push(`/subscribe/${coin}`)
            }
        },
      watch: {
        selectedSymbol: function () {
          this.$store.dispatch('fetchSymbolData' , this.selectedSymbol)
        },
      },
        mounted() {
          this.$store.dispatch('getAllSymbols')
          this.getSectedSybol();
        },

    }
</script>
