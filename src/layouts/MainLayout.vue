<template>
  <div class="wrapper">
    <header class="header">
      <h1 @click="goTo('/')" class="header__logo">Cryptodashboard</h1>
    </header>
    <div class="btns">
      <button class="header__allsymbols" @click="goTo('/')">
        All positions
      </button>
      <button
        class="header__subscribedsymbol"
        @click="toSubscribedCoin('toSubscribedCoin')"
      >
        Subscribed position
      </button>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    toSubscribedCoin(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");

.btns {
  width: 50vw;
  height: 5vh;
  display: flex;
}

.header__allsymbols {
  border-radius: 5%;
  padding: 1em;
  background: rgba(15, 76, 129, 0.8);
  margin-left: 1vw;
  font-family: "Oswald", sans-serif;
  font-size: 1.2em;
  display: flex;
  align-items: center;
}

.header__subscribedsymbol {
  border-radius: 5%;
  padding: 1em;
  background: rgba(123, 239, 178, 1);
  text-align: center;
  font-family: "Oswald", sans-serif;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  margin-left: 1vw;
}
</style>
