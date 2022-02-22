
const Post = ({ id }) => {//get the id from the query string as a prop
    return (
        <>
            <h1>ID of the post #{id}</h1>
        </>
    )
};

Post.getInitialProps = async ({ query }) => {//get data from the query
    return query;//return all the data from the query as a prop
}

export default Post;