
import './App.css';
import comment from './comment.js'

function App() {
  const name = 'sophia';
  const post = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
}
const comments = post.comments.map(comment => (<comment text={comment}/>))
// comments= [ <comments text={post.comments[0], <comments text={post.comments[1]/> <comments text= {post.post.comments[1]} />]
  return (
    <div>
 
     <p>{name}</p>
     <p>{post.title}</p>
     <p>{post.author}</p>
     <p>{post.body}</p>
     <h3>Comments</h3>
     <p>{post.comments[0]}</p>

    </div>
  )
}

export default App;
