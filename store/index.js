// state holds the posts, or whatever info we need to store
// mutations will hold functions that will update the state.
// actions can make asynchronous API calls

/*
this is where we will eventually hold the data for all 
of our posts
*/
export const state = () => ({
	'posts: []',
	// value: 'posts: []',
});

export const getters = {
	getterValue: state => {
		return state.posts;
	},
};

export const mutations = {
	updatePosts: (state, posts) => {
		state.posts = posts;
	},
};

export const actions = {
 async getPosts({ state, commit }) {
   if (state.posts.length) return
   try {
     let posts = await fetch( `https://thinking.media/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
     ).then(res => res.json())
     posts = posts
       .filter(el => el.status === "publish")
       .map(({ id, slug, title, excerpt, date, tags, content }) => ({
         id
         slug,
         title,
         excerpt,
         date,
         tags,
         content
       }))
     commit("updatePosts", posts)
   } catch (err) {
     console.log(err)
   }
}