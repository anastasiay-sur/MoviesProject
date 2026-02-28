function Header() {
        return <header className="navbar"> 
            <div className="navbar__logo">
                <a href="/">
                    <h1>MoviesProject</h1>
                </a>
            </div>

            <nav className="navbar__nav">  
                <ul className="nav-links">
                    <li><a href="page1.html">Новинки</a></li>
                    <li><a href="page2.html">Фильмы</a></li>
                    <li><a href="page3.html">Сериалы</a></li>
                </ul>
            </nav>
        </header>
}

export default Header