<template>
<div class="posts">
  <main>
    <h2>Posts</h2>
  <!-- here we loop through the posts -->
    <div class="post" v-for="post in posts" :key="post.id">
      <h3>
      <!-- for each one of them, we’ll render their title, and link off to their individual page -->
        <a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a>
      </h3>
      <div v-html="post.excerpt.rendered"></div>
      <a :href="`blog/${post.slug}`" class="readmore">Read more ⟶</a>
    </div>
  </main>
  </div>
</template>

<script>
export default {
computed: {
  posts() {
    return this.$store.state.posts;
  },
 },
created() {
  this.$store.dispatch("getPosts");
},
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
