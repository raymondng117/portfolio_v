import { Link } from "react-router-dom";


const BlogList = ({title, blogs}) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    {/* add a link hook to wrap the content and direct this to the corresponding blog endpoint, in this case, /blogs/${blog.id} */}
                    {/* this works because during the createtion of each blog pre-review, the blog-id is also corresponding to each link element */}
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;