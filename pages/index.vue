<template>
<div class="posts">
  <main>
    <h2>Digital Zeitgeist</h2>
    <h4>Life read in Ones and Zeroes</h4>
  <!-- here we loop through the posts -->
    <div class="post" v-for="post in posts" :key="post.id">
      <h3>
      <!-- for each one of them, we’ll render their title, and link off to their individual page -->
        <a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a>
      </h3>
      <div v-html="post.excerpt.rendered"></div>
      <a :href="`blog/${post.slug}`" class="readmore">...</a>
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
body {
  padding: 0.3rem;
}

a {
  text-decoration: none;
  /* text-decoration-color: #21ff21; */
}

a.readmore {
  font-family: 'ITC Bauhaus', sans-serif;
  font-size: 0.8em;
}

h2 {
  font-family: 'Futura', sans-serif;
  font-size: 2rem;
  padding: 1rem 0 1rem 0;  
}

h3 {
  font-family: 'Oswald', sans-serif;
  color: 'black;';
  font-weight: regular;
  padding: 1rem 0 1rem 0;
}

h4 {
  font-family: 'ITC Bauhaus', sans-serif;
  font-size: 1rem;  
}

p {
  font-family: 'Ideal-Grotesk', sans-serif;
}

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

.h4 {
  font-weight: 300;
  font-size: 42px;
  color: "black";
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
