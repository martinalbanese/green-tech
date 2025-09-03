import { Card } from "./Card";

type ProjectProps = {
    projectName: string;
    description: string;
    schoolName: string;
}

export const Project = ({projectName, description, schoolName}: ProjectProps) => {
    return (
        <Card 
            title={projectName}
            subtitle={schoolName}
            description={description}
        />
    )
}