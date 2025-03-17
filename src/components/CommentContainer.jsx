import React from 'react'

let commentData = 
    [
        {
          "id": 1,
          "username": "TechGuru",
          "avatar": "https://i.pravatar.cc/40?img=1",
          "comment": "This video really helped me understand the concept, thanks!",
          "timestamp": "2 hours ago",
          "likes": 5,
          "replies": []
        },
        {
          "id": 2,
          "username": "CodeMaster",
          "avatar": "https://i.pravatar.cc/40?img=2",
          "comment": "Can someone explain the part at 4:32? I'm confused.",
          "timestamp": "1 hour ago",
          "likes": 2,
          "replies": [
            {
              "id": 3,
              "username": "DevDude",
              "avatar": "https://i.pravatar.cc/40?img=3",
              "comment": "@CodeMaster It’s about async functions, check MDN docs too!",
              "timestamp": "45 minutes ago",
              "likes": 1
            }
          ]
        },
        {
          "id": 4,
          "username": "ReactQueen",
          "avatar": "https://i.pravatar.cc/40?img=4",
          "comment": "🔥🔥🔥 Loved this! Subscribed!",
          "timestamp": "30 minutes ago",
          "likes": 8,
          "replies": []
        }
      ]
      

const fetchData = async() => {
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/comments?key=AIzaSyAXgE-YmlcxYIziBtJ-gQnoogPOUgZSX1M HTTP/1.1")
    const dataJson = await data.json()
    console.log(dataJson);
    
}
fetchData()
const Comment = ({comment}) =>(
    <div className='flex items-start mb-4'>
        <img src={comment.avatar} alt="img" className='rounded-full p-2' />
      <div>
        <p className='m-2 font-bold'>{comment.username} <span>{comment.timestamp}</span> </p>
        <p>{comment.comment}</p>
        <p>Likes: {comment.likes}</p>
      </div>
      <div className=''>
      
      </div>
    </div>
  );
const CommentContainer = () => {
  return (
    <div className= 'm-5 p-2'>
        <h1 className='text-2xl font-bold px-2 py-3'>
           Comments 
        </h1>
         {commentData.map(comment => (
             <Comment comment={comment}/>

         ))}
        
    </div>
  )
}

export default CommentContainer