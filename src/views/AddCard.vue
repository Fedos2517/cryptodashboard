<template>
  <div class="wrapper">
    <div class="cards">
      <div class="cards__header">
      </div>
      <div class="tablebox">
        <DataTable
            v-if="coinData"
            :data="coinData"
            :isButtonVisible="false"
        >
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from "../components/baseComponents/DataTable";


export default {
  name: 'Home',
  components: {
    DataTable
  },

  data() {
    return {
      websocket: null,
      coinData: null,
      test: '123123'
    }
  },
  methods: {
    updateSymbolData(singleSymbolData){
      this.coinData = singleSymbolData;
    },
  },
  mounted() {
    const that = this;
    const selectedSymbol = this.$route.params.coin.toLowerCase();

    this.websocket = new WebSocket(`wss://stream.binance.com:9443/ws/${selectedSymbol}@ticker`);
    this.websocket.onmessage = function(event) {
      const data = JSON.parse(event.data);

      that.updateSymbolData({
        lastQty: parseFloat(data.Q).toFixed(3),
        bidPrice: parseFloat(data.b).toFixed(3),
        totalBid: parseFloat(data.Q * data.b).toFixed(3),
        askPrice: parseFloat(data.a).toFixed(3),
        totalAsk: parseFloat(data.Q * data.a).toFixed(3)
      });
    }
  }

}
</script>
