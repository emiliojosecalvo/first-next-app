import Link from 'next/link';

const Navbar = () => {
    const styles = {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '1rem',
        background: 'lightblue',
        margin: 0
    }
    return (
        <div style={styles}>
            <Link href='/'><a>Home</a></Link>
            <Link href='/contact'><a>Contact</a></Link>
            <Link href='/about'><a>About</a></Link>
        </div>
    )
}

export default Navbar;