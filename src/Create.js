import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIspending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIspending(true)

        fetch('http://localhost:8000/blogs',
        {method: 'POST',
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(blog)
        })
        .then(()=> {
            setIspending(false)
            console.log('new blog added')
            navigate('/');
        })

        
    }

    return ( 
        <div className="create">
            <h2> Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title}
                //catch the input value and update the state
                onChange={(e) => setTitle(e.target.value)}></input>

                <label>Blog body:</label>
                <textarea required value={body}
                onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Blog author</label>
                <select value={author} 
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="mario">Yoshi</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

            </form>
        </div>
     );
}
 
export default CreateBlog;