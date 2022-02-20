import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <h1>Hello Emilio</h1>
            <Link href='/contact'><a>Contact Page </a></Link>
            <Link href='/about'><a>About Page </a></Link>
        </div>
    )
}

export default Index;