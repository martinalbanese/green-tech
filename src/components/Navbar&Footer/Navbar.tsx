export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
                <h2 className='navbar-brand'>Green Tech</h2>

                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#hero'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#about-us'>Su di noi</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#reviews'>Dicono di noi</a>
                        </li>
                    </ul>

                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <a className='btn btn-outline-light' href='#form'>Partecipa al concorso</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}