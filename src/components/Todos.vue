<template>
  <AddTodo @add-todo="addTodo" />
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todoProps="todo"
    @item-completed="markComplete"
    @delete-item="deleteTodo"
  />
</template>

<script>
import { ref } from 'vue'

// import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default {
  name: 'Todos',
  components: { TodoItem, AddTodo },
  setup() {
    const todos = ref([])

    // const getAllTodos = async () => {
    //   try {
    //     const res = await axios.get(
    //       'http://localhost:8080/api/contacts/'
    //     )
    //     console.log(res.data)
    //     todos.value = res.data
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // getAllTodos()

    const markComplete = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    }

    const deleteTodo = async id => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/$(id)`)
        
        todos.value = todos.value.filter(todo => todo.id !== id)
      } catch (error) {
        console.log(error)
      }
    }
    
// https://jsonplaceholder.typicode.com/todos/
    const addTodo = async newTodo => {
      try {
        const res = await axios.post(
         'https://jsonplaceholder.typicode.com/todos/' , newTodo
        )
        todos.value.push(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    // const addTodo = async newTodo => {
      
    // // eslint-disable-next-line no-unused-vars
    // const res = await axios.post('http://localhost:8080/api/contacts/', newTodo)
    //     .then(response => {
    //         console.value('Saved');
    //         this.setState(prevState=>({
    //           title: [newTodo, ...prevState.title]
    //         }))
    //         console.value(response.data);
    //         console.value(this.state.title);
    //     });
    // }
//
    return {
      todos,
      markComplete,
      deleteTodo,
      addTodo
    }
  }
}
</script>

<style></style>
