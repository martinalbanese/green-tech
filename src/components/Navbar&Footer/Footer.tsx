export const Footer = () => {
    return (
        <>
            <footer className="py-3 my-4 main-color">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className='nav-item'>
                        <a className='nav-link' href='#hero'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#about-us'>Su di noi</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#reviews'>Dicono di noi</a>
                    </li>
                    <li className='nav-item m-1'>
                        <a className='btn btn-outline-light' href='#form'>Partecipa al concorso</a>
                    </li>
                </ul>
                <p className="text-center text-body-secondary text-white">© 2025 Green Tech, Inc</p>
            </footer >
        </>
    )
}