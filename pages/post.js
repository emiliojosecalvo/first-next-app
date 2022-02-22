import { withRouter } from 'next/router';
const Post = ({ id }) => {
    return (
        <>
            <h1>ID of the post #{id}</h1>
        </>
    )
};

Post.getInitialProps = async ({ query }) => {
    return query;
}

export default Post;