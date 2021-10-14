<template>
  <section>
    <transition-group name="list" tag="ul">
      <li class="todolist" v-for="(todo, index) in propsdata" :key="index">
        <div class="checkBtn">
          <font-awesome-icon :icon="checkIcon" />
        </div>
        <div class="todo">
          {{ todo }}
        </div>
        <div class="removeBtn" @click="removeTodo(todo)">
          <font-awesome-icon :icon="trashIcon" />
        </div>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      checkIcon: faCheck,
      trashIcon: faTrash,
    };
  },
  components: { FontAwesomeIcon },
  props: ["propsdata"],
  methods: {
    removeTodo(todo, index) {
      this.$emit("removeTodo", todo, index);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
}
.todolist {
  width: 100%;
  display: flex;
  list-style: none;
  margin-top: 10px;
}
.todo {
  flex: 1;
  display: inline-block;
}
.checkBtn,
.removeBtn {
  color: #42b983;
}
.removeBtn:hover {
  color: red;
  cursor: pointer;
}
</style>
