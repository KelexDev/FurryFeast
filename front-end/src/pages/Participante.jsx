import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";

export default function Participante() {
    const [voto, setVoto] = useState("");
    const [enviado, setEnviado] = useState(false);

    const manejarVoto = (e) => {
        e.preventDefault();
        if (voto) {
            setEnviado(true);
            // Aquí podrías hacer un POST al backend con el voto
            console.log("Voto enviado:", voto);
        }
    };

    return (
        <div className="container py-5 d-flex flex-column align-items-center">
            <div className="card shadow-lg rounded-4 p-4 w-100" style={{ maxWidth: "600px" }}>
                <h2 className="text-center mb-4">Título de la Moción</h2>
                <p className="text-center mb-4">
                    ¿Está usted de acuerdo con la propuesta de modificación de estatutos para la mejora del funcionamiento interno de la organización?
                </p>

                {!enviado ? (
                    <form onSubmit={manejarVoto}>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="voto"
                                id="acuerdo"
                                value="De acuerdo"
                                onChange={(e) => setVoto(e.target.value)}
                                checked={voto === "De acuerdo"}
                            />
                            <label className="form-check-label" htmlFor="acuerdo">
                                De acuerdo
                            </label>
                        </div>

                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="voto"
                                id="desacuerdo"
                                value="En desacuerdo"
                                onChange={(e) => setVoto(e.target.value)}
                                checked={voto === "En desacuerdo"}
                            />
                            <label className="form-check-label" htmlFor="desacuerdo">
                                En desacuerdo
                            </label>
                        </div>

                        <div className="form-check mb-4">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="voto"
                                id="blanco"
                                value="Voto en blanco"
                                onChange={(e) => setVoto(e.target.value)}
                                checked={voto === "Voto en blanco"}
                            />
                            <label className="form-check-label" htmlFor="blanco">
                                Voto en blanco
                            </label>
                        </div>

                        <button className="btn btn-success w-100" type="submit" disabled={!voto}>
                            Enviar Voto
                        </button>
                    </form>
                ) : (
                    <div className="alert alert-success text-center" role="alert">
                        ¡Gracias por votar! Usted seleccionó: <strong>{voto}</strong>
                    </div>
                )}
            </div>
        </div>
    );
}
