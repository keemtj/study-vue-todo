<template>
  <div>
    <div class="inputBox">
      <input
        class="todoInput"
        type="text"
        placeholder="ENTER TODO"
        v-model="newTodoItem"
        v-on:keyup.enter="addTodo"
      />
      <div class="addBtn" v-on:click="addTodo">
        <font-awesome-icon :icon="icon" />
      </div>
    </div>

    <modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h1>경고!</h1>
      </template>
      <template v-slot:body>
        <p>할일을 입력하세요</p>
      </template>
      <template v-slot:footer>
        <button @click="showModal = false">닫기</button>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
      icon: faPlus,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit("addTodo", value);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: { FontAwesomeIcon, Modal },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.inputBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.todoInput {
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  border: 2px solid #42b983;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: none;
  outline: none;
}
.addBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #42b983;
  width: 50px;
  height: 50px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
}
</style>
