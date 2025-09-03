export const Hero = () => {
    return (
        <div className="p-5 mb-4 bg-dark header" id="hero">
            <div className="container-fluid py-5 text-white d-flex justify-content-start">
                <div>
                    <h1 className="display-5 fw-bold">Salviamo il mondo, un'idea alla volta</h1>
                    <p className="col-md-8 fs-4">Tu e la tua classe avete un'idea green che potrebbe aiutarci nella nostra missione?</p>
                    <a type="button" href="#form" className="btn main-color btn-lg text-white">Partecipa al concorso</a>
                </div>
            </div>
        </div>
    )
}