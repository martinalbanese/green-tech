import { useEffect, useState } from "react";
import { usePostSubmission } from "../../hooks/usePostSubmissions";

export const Form = () => {
    const [school, setSchool] = useState("");
    // Initialize level to an empty string to ensure a selection is made
    const [level, setLevel] = useState<number | string>(""); 
    const [province, setProvince] = useState("");
    const [className, setClassName] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [projectName, setProjectName] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);

    const [emailError, setEmailError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const { submit, loading, error, success } = usePostSubmission();

    const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const countWords = (text: string) => text.trim().split(/\s+/).length;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormMessage(null); // Clear previous messages

        let valid = true;

        setEmailError("");
        setDescriptionError("");

        if (!validateEmail(email)) {
            setEmailError("Inserisci un'email valida.");
            valid = false;
        }

        if (countWords(description) > 3000) {
            setDescriptionError("La descrizione non può superare le 3000 parole.");
            valid = false;
        }

        if (valid) {
            // Ensure level is a number before submitting
            const formData = {
                school,
                level: Number(level), // Convert level to number here
                province,
                className,
                contactPerson,
                email,
                description,
                projectName
            };
            await submit(formData); // Await the submission
        }
    };

    // Effect to handle success or error messages from the submission hook
    useEffect(() => {
        if (success) {
            setFormMessage({ type: 'success', text: "Form inviato con successo!" });
            // Optionally clear the form here after successful submission
            setSchool("");
            setLevel("");
            setProvince("");
            setClassName("");
            setContactPerson("");
            setEmail("");
            setDescription("");
            setProjectName("");
            setTermsAccepted(false);
        } else if (error) {
            setFormMessage({ type: 'error', text: "Errore nell'invio della candidatura. Riprova." });
        }
    }, [success, error]);

    // Check if all required fields are filled and validations pass
    const isFormValid =
        school &&
        level !== "" && // Check if level has been selected
        province &&
        className &&
        contactPerson &&
        email &&
        description &&
        termsAccepted &&
        projectName &&
        validateEmail(email) &&
        countWords(description) <= 3000;

    return (
        <section className="d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container" style={{ maxWidth: "800px" }}>
                <div className="card shadow">
                    <div className="card-body">
                        <h2 className="text-center mb-4" style={{ color: "#3A5A40" }}>
                            Partecipa al concorso
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nome del progetto</label>
                                <input
                                    type="text"
                                    className="form-control border-success rounded-pill w-100"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    required // Make field required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nome della scuola</label>
                                <input
                                    type="text"
                                    className="form-control border-success rounded-pill w-100"
                                    value={school}
                                    onChange={(e) => setSchool(e.target.value)}
                                    required // Make field required
                                />
                            </div>

                            <div className="mb-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                                <select
                                    className="form-select border-success rounded-pill w-100"
                                    value={level}
                                    onChange={(e) => setLevel(Number(e.target.value))}
                                    required // Make field required
                                >
                                    <option value="">Seleziona il grado</option>
                                    <option value={0}>Scuola Secondaria di Primo Grado (FIRST)</option>
                                    <option value={1}>Scuola Secondaria di Secondo Grado (SECOND)</option>
                                </select>

                                <div>
                                    <label className="form-label">Provincia</label>
                                    <input
                                        type="text"
                                        className="form-control border-success rounded-pill w-100"
                                        value={province}
                                        onChange={(e) => setProvince(e.target.value)}
                                        required // Make field required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Classe partecipante</label>
                                <input
                                    type="text"
                                    className="form-control border-success rounded-pill w-100"
                                    value={className}
                                    onChange={(e) => setClassName(e.target.value)}
                                    required // Make field required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Nome del docente</label>
                                <input
                                    type="text"
                                    className="form-control border-success rounded-pill w-100"
                                    value={contactPerson}
                                    onChange={(e) => setContactPerson(e.target.value)}
                                    required // Make field required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email del docente</label>
                                <input
                                    type="email"
                                    className={`form-control border-success rounded-pill w-100 ${emailError && "is-invalid"}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required // Make field required
                                />
                                {emailError && <div className="text-danger mt-1">{emailError}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Descrizione</label>
                                <textarea
                                    className={`form-control border-success rounded-pill w-100 ${descriptionError && "is-invalid"}`}
                                    placeholder="Inserisci una descrizione di massimo 3000 parole"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    required // Make field required
                                />
                                {descriptionError && <div className="text-danger mt-1">{descriptionError}</div>}
                            </div>

                            <div className="form-check mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="terms"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                    required // Make field required
                                />
                                <label className="form-check-label" htmlFor="terms">
                                    Accetto i termini del concorso
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="btn w-100 rounded-pill"
                                style={{ backgroundColor: "#3A5A40", color: "white" }}
                                disabled={!isFormValid || loading} // Disable button also when loading
                            >
                                {loading ? "Invio in corso..." : "Invia la candidatura"}
                            </button>
                            
                            {/* Display form messages */}
                            {formMessage && (
                                <p style={{ textAlign: "center", marginTop: "20px", color: formMessage.type === 'error' ? 'red' : 'green' }}>
                                    {formMessage.text}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
