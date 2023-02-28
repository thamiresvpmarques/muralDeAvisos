module.exports = {

    posts: [

        {id:"lwskdosijrfio",
         title: "teste post",
         description:"descrição"}
    ],

    getAll(){
       return this.posts;
    },
    newPosts(title, description){

      this.posts.push({id:geradorDeId(), title, description})
    }
}
function geradorDeId(){
    return Math.random().toString(36).substring(2, 9)
  }