import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
    const currentPage = useLocation().pathname
    return(
        <> 
            <nav>
                <Link to='/' className={currentPage==='/' ? 'currentLink nav-link' : 'nav-link'} >About Me</Link>
                <Link to='/Portfolio' className={currentPage==='/Portfolio' ? 'currentLink nav-link' : 'nav-link'}>Portfolio</Link>
                <Link to='/Contact' className={currentPage==='/Contact' ? 'currentLink nav-link' : 'nav-link'}>Contact</Link>
                <Link to='/Resume' className={currentPage==='/Resume' ? 'currentLink nav-link' : 'nav-link'}>Resume</Link>
            </nav>
        </>
    )
}

export default Nav