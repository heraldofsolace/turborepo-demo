import { useEffect, useState } from 'react'
import { Blog } from 'types'
import './App.css'
import axios from 'axios'

function App() {
  const [ blogs, setBlogs ] = useState<Blog[]>([])

  useEffect(() => {
    axios.get('http://localhost:8000/blogs').then((res) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      setBlogs(res.data.blogs as Blog[])
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
    {blogs.map((blog: Blog) => (
      <div key={blog.id}>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    ))}
    </>
  )
}

export default App
