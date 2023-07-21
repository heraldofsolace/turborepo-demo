<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'
import { type Blog } from 'types'

const blogs = ref<Blog[]>([])

axios.get('http://localhost:8000/blogs').then(res => {
  blogs.value = res.data.blogs
})
</script>

<template>
  <main>
    <div v-for="blog in blogs" :key="blog.id">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.content }}</p>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
