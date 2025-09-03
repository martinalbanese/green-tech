import { GridDisplay } from "../GridDisplay"
import { Review } from "../Review"
import { useState, useEffect } from "react"

type ReviewProps = {
    name: string;
    reviewBody: string;
}

export const Reviews = () => {
    // Stato per contenere le recensioni, inizialmente vuoto
    const [reviews, setReviews] = useState<ReviewProps[]>([])

    // TODO: Sostituire con fetch reale
    useEffect(() => {
        // Simulazione dati dal backend
        const fetchReviews = async () => {
            // qui poi farai la chiamata fetch a API
            const datiBackend: ReviewProps[] = [
                { name: "Martina", reviewBody: "Bellissima iniziativa!" },
                { name: "Luca", reviewBody: "Abbiamo partecipato con entusiasmo!" },
                { name: "Gianluca", reviewBody: "Bellissima iniziativa!" },
            ]
            setReviews(datiBackend)
        }

        fetchReviews()
    }, [])

    return (
        <section style={{ marginTop: "40px" }} id="reviews">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Dicono di noi</h2>
            <GridDisplay gap="20px">
                {reviews.map((r, index) => (
                    <Review key={index} reviewerName={r.name} reviewBody={r.reviewBody} />
                ))}
            </GridDisplay>
        </section>

    )
}
