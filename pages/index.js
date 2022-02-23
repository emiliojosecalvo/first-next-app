import axios from 'axios';
import Link from 'next/link';

const Index = ({ posts }) => {
    return (
        <div  >
            <h1>Hello Emilio</h1>
            <ul>
                {posts.map(post => {
                    return <li key={post.id}><Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}><a>{post.title}</a></Link></li>
                })}
            </ul>
        </div >
    )
}

Index.getInitialProps = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data } = response;
    return { posts: data }
}

export default Index;