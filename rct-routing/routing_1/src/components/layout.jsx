import { Link } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/classlist'>Classlist</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}