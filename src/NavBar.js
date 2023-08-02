function NavBar(parametros) {

    return (
        <nav className="flex gap-4">
            <a href="#">{parametros.link1}</a>
            <a href="#">{parametros.link2}</a>
            <a href="#">{parametros.link3}</a>
        </nav>
    )
}


export default NavBar