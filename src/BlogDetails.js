import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";


const BlogDetails = () => {
    // the variable of destruction in {} should be corresponding to the one you set where you called the component, in this case, which is the "id" in the App.js
    // associated with <Route path='blogs/:id' element = {<BlogDetails />}>
    // catch the id on the browser bar and return it 
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)

    const navigate = useNavigate()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}

            <button onClick={handleClick}>Delete</button>
        </div>


    );
}

export default BlogDetails;