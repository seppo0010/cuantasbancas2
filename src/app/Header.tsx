export default function Header() {
    return (
        <header className="hero is-light">
            <div className="hero-body py-5">
                <div className="has-text-centered">
                    <h1 className="title is-1 mb-1">¿Cuántas bancas?</h1>
                    <h2 className="subtitle is-3 mb-1">El simulador electoral</h2>
                    <p className="has-text-grey is-size-5 mb-1">Versión 2025 de elecciones nacionales argentinas</p>
                    <p className="is-size-6">
                        Es parte del proyecto electoral{' '}
                        <a 
                            href="https://financiamientopolitico.poderciudadano.org/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="has-text-link"
                        >
                            Dinero y Política
                        </a>
                        {' '}de Poder Ciudadano
                    </p>
                </div>
            </div>
        </header>
    );
}
