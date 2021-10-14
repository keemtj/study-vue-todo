<template>
  <li>{{ todo.text }}</li>
  <input type="checkbox" checked="{{todo.checked}}" />
  <button>X</button>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: Object,
  },
};
</script>
<style lang=""></style>
