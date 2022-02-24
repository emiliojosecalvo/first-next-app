import axios from 'axios';

const Post = ({ id, comments }) => {
    return (
        <>
            <h1>Post #{id}</h1>
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h3>{comment.email}</h3>
                        <p>{comment.body}</p>
                    </div>
                )
            })};
        </>
    )
};

Post.getInitialProps = async ({ query }) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}/comments`);
    const { data } = response;
    return { ...query, comments: data };
}

export default Post;