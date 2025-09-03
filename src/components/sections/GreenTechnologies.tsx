export const GreenTechnologies = () => {
    return (
        <div>
            <div className="d-none d-lg-block" id="about-us">
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Costruiamo insieme un futuro dove l’innovazione parla il linguaggio della sostenibilità.</h1>
                            <p className="lead">
                                La nostra missione è coinvolgere le nuove generazioni nella costruzione di un futuro più sostenibile, 
                                offrendo loro uno spazio dove le idee per il cambiamento possano nascere, crescere e diventare realtà.
                                Attraverso questo portale, GreenTech vuole dare voce agli studenti, raccogliendo soluzioni creative 
                                per la tutela dell’ambiente e trasformandole in progetti concreti grazie al supporto della nostra azienda.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right-vision"></div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Energia Solare</h1>
                            <p className="lead">
                                Abbiamo finanziato l'installazione di numerosi pannelli solari 
                                all'interno di campi non coltivati e parcheggi di supermercati, per
                                favorire il raccoglimento di energia sostenibile.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Energia Eolica</h1>
                            <p className="lead">
                                Abbiamo installato numerosi generatori eolici nel sud dell'Italia, per
                                sfruttare il vento e raccogliere energia sostenibile. 
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heroes */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left"></div>
                        <div className="mt-2">
                            <h1>Energia Solare</h1>
                            <p className="lead">
                                Abbiamo finanziato l'installazione di numerosi pannelli solari 
                                all'interno di campi non coltivati e parcheggi di supermercati, per
                                favorire il raccoglimento di energia sostenibile.
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                            <h1>Energia Eolica</h1>
                            <p className="lead">
                                Abbiamo installato numerosi generatori eolici nel sud dell'Italia, per
                                sfruttare il vento e raccogliere energia sostenibile.
                            </p>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}