<template>
  <form @submit="addItem">
    <input type="text" placeholder="Nhập Mục Tiêu Muốn Đạt Được..." v-model="title" class="add"/>
    <input type="submit" value="Thêm" class="add-btn" />
  </form>
  
</template>

<script>
import { ref } from 'vue'

// import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'AddTodo',
  setup(props, context) {
    const title = ref('')

    const addItem = event => {
      event.preventDefault()

      const newItem = {
        id: title.value,
        title: title.value,
        completed: false
      }

      context.emit('add-todo', newItem)

      title.value = ''
    }

    return {
      title,
      addItem
    }
  }
}
</script>

<style scoped>
form {
  padding: 20px;
  display: flex;
}

input[type='text'] {
  flex: 10;
  padding: 5px;
}

input[type='submit'] {
  flex: 2;
  
}
.add-btn{
  margin: 1px 5px  ;
  color: white;
  background: green;

}

</style>