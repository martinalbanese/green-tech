import { GridDisplay } from "../GridDisplay";
import { Project } from "../Project";
import { useSubmissions } from "../../hooks/useGetSubmissions";

export const ProjectList = () => {
  const { submissions, loading, error } = useSubmissions();

  if (loading) return <p style={{ textAlign: "center", marginTop: "20px" }}>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;
  if (!submissions || submissions.length === 0) return <p>Nessun progetto trovato.</p>;

  return (
    <section style={{ marginTop: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Gli altri progetti in gara</h2>
      <GridDisplay gap="20px">
        {submissions.map((p, index) => (
          <Project
            key={index}
            projectName={p.projectName}
            description={p.description}
            schoolName={p.school}
          />
        ))}
      </GridDisplay>
    </section>
  );
};
