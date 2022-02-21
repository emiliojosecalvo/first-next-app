import axios from 'axios';

const Index = ({ post }) => {
    return (
        <div  >
            <h1>Hello Emilio</h1>
            <ul>
                {post.map(p => {
                    return <li key={p.id}>{p.title}</li>
                })}
            </ul>
        </div >
    )
}

Index.getInitialProps = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data } = response;
    return { post: data }
}

export default Index;