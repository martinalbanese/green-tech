type CardProps = {
    title: string;
    subtitle?: string;
    description: string;
    link1?: string;
    link2?: string;
}

export const Card = ({title, subtitle, description, link1, link2}: CardProps) => {
    return (
        <div
      className="card"
      style={{
        width: "18rem",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1.05)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      <div className="card-body" style={{ textAlign: "center" }}>
        <h5 className="card-title">{title}</h5>
        {subtitle && <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>}
        <p className="card-text">{description}</p>
        {link1 && <a href={link1} className="card-link">Link 1</a>}
        {link2 && <a href={link2} className="card-link">Link 2</a>}
      </div>
    </div>
    )
}