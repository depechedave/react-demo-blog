export default function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      <h2>Demo React Blog</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
