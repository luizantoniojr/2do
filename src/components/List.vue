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
        <div class="level-left">
          <p class="level-item">
            <a v-bind:class="{'filtro-selecionado':visibility=='all'}" v-on:click="visibility='all'">Todos</a>
          </p>
          <p class="level-item">
            <a v-bind:class="{'filtro-selecionado':visibility=='active'}" v-on:click="visibility='active'">Ativos</a>
          </p>
          <p class="level-item">
            <a v-bind:class="{'filtro-selecionado':visibility=='completed'}" v-on:click="visibility='completed'">Completos</a>
          </p>
        </div>
        <hr v-show="filteredTodos.length > 0">
        <h2 class="subtitle">
          <ul>
            <li v-for="todo in filteredTodos">
              <div class="view">
                <input class="toggle" type="checkbox" v-model="todo.completed">
                <label v-bind:class="{'completed':todo.completed}">{{ todo.title }}</label>
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

var filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

export default {
  name: 'app-list',
  data () {
    return {
      todos: todoStorage.fetch(),
      newTodo: '',
      visibility: 'all'
    }
  },
  computed: {
    filteredTodos: function () {
      return filters[this.visibility](this.todos)
    },
    remaining: function () {
      return filters.active(this.todos).length
    },
    allDone: {
      get: function () {
        return this.remaining === 0
      },
      set: function (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
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

.completed {
  text-decoration: line-through;
}

.filtro-selecionado {
  font-size: 19px;
  font-weight: bold;
}
</style>
