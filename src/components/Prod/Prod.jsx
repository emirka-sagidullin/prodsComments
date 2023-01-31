import React, {useState} from 'react'

const Prod = ({prods, id}) => {
  const [input, setInput] = useState('')

  function addComment(id){
    prods.map(function(prod){
      if(prod.id === id){
        prod.comments.push(input)
        // console.log(prod)
      }
    })
  }
  const comments = prods.map(function(prod){
    if(prod.id === id){
      let comments = prod.comments
      // console.log(comments)
      comments.map((comment) => {
      console.log(comment)  
      return <div>{comment}</div>
    })}
  })

  function changeValue(event){
    setInput(event.target.value)
  }

  const result = prods.map(function (prod) {
   if (prod.id === id){
      return <div key={prod.id} >
        <div >{prod.name}</div>
        <div >{prod.cost}</div>
        <div >{prod.catg}</div>
        <input type="text" placeholder='Комментарий' onChange={(event) =>  setInput(event.target.value)}/>
        <button onClick={() => addComment(id)}>comment</button>
        {comments}
      </div>
    }
  })

  return (
    <div>
      {result}
    </div>
  )
}

export default Prod
