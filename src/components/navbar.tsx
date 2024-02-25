import logo from '../assets/logo.svg'

export default function NavBar() {

    return <>
        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="nav-buttons">
                <a href="#" className="login-button">Log in</a>
                <button className="button">Sign Up</button>
            </nav>
        </header>
    </>
}