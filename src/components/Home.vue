<template>
  <div id="home">
    <div class="hero-body">
      <div class="container ">
        <form>
          <div class="field has-addons">
            <div class="control is-expanded">
              <input v-model="newTodo" class="input" type="text" placeholder="O que precisa ser feito?">
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="addTodo()">Adicionar</button>
            </div>
          </div>
        </form>
        <h2 class="subtitle">
          <ul>
            <li v-for="todo in todos">
              <div class="view">
                <input class="toggle" type="checkbox" v-model="todo.completed">
                <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
                <a class="destroy" @click="removeTodo(todo)">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </a>
              </div>
            </li>
          </ul>
        </h2>
      </div>
    </div>
  </div>
</template>
<script>

var STORAGE_KEY = 'todos-vuejs-2.0'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export default {
  name: 'home',
  data () {
    return {
      todos: todoStorage.fetch(),
      newTodo: ''
    }
  },
  methods: {
    addTodo: function () {
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false
      })
      this.newTodo = ''
    },
    removeTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  }
}
</script>

<style scoped>
.fa-times {
  vertical-align: bottom;
}
</style>
