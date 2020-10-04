<template>
  <div class="table__main">
    <table class="table__header">
      <tr>
        <th>BID</th>
        <th>ASK</th>
      </tr>
    </table>
    <table class="table__body">
      <tr>
        <th>Amount</th>
        <th>Price</th>
        <th class="table__mobile-exept">Total</th>
        <th>Amount</th>
        <th>Price</th>
        <th class="table__mobile-exept">Total</th>
      </tr>
      <tr>
        <td>{{ data.lastQty }}</td>
        <td>{{ data.bidPrice }}</td>
        <td class="table__mobile-exept">{{ data.totalBid }}</td>
        <td>{{ data.lastQty }}</td>
        <td>{{ data.askPrice }}</td>
        <td class="table__mobile-exept">{{ data.totalAsk }}</td>
        <td class="table__mobile-exept">
          <button class="table__btn" v-if="isButtonVisible" @click="selectRow">
            Subscribe
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    isButtonVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    selectRow() {
      this.$emit("subscribeOnSymbol");
    },
  },
};
</script>

<style>
.table__main {
  width: 100%;
  min-height: 50vh;
  background-color: #ffffff;
  overflow-y: scroll;
}

.table__header {
  width: 100%;
  border-spacing: 5px;
  background: #e5e5e5;
  height: 5vh;
}

.table__body {
  width: 100%;
  background: #e5e5e5;
  font-size: 1.5em;
}

th,
td {
  text-align: center;
}

.table__btn {
  width: 10vw;
  height: 5vh;
  background-color: green;
  border-radius: 0.5em;
  color: #ffffff;
}

@media (max-width: 320px) {
  .table__mobile-exept {
    display: none;
  }
}
</style>
