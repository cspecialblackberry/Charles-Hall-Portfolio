import Nav from './Nav'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header>
                <h1><Link>Charles Hall</Link></h1>
                <Nav></Nav>
            </header>
        </>
    )
}

