export const state = () => ({
	posts: [],
});

export const mutations = {
	updatePosts: (state, posts) => {
		state.posts = posts;
	},
};

export const actions = {
 async getPosts({ state, commit }) {
   if (state.posts.length) return
   try {
     let posts = await fetch( `https://zeitgeist.digital/wp-json/wp/v2/posts`
     ).then(res => res.json())
     posts = posts
       .filter(el => el.status === "publish")
       .map(({ id, slug, title, excerpt, date, tags, content }) => ({
         id,
         slug,
         title,
         excerpt,
         date,
         tags,
         content
       }))
     commit('updatePosts', posts)
   } catch (err) {
     console.log(err)
   }
}
}