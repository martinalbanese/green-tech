import { Card } from "./Card";

type ReviewProps = {
    reviewerName: string;
    reviewBody: string;
}

export const Review = ({reviewerName, reviewBody}: ReviewProps) => {
    return (
        <Card 
            title={reviewerName} 
            description={reviewBody}
        />
    )
}