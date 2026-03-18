export default function Home() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C2C2A", background: "#fff", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "5rem 2rem 4rem", textAlign: "center", borderBottom: "0.5px solid rgba(0,0,0,0.1)" }}>
        <span style={{ display: "inline-block", background: "#E1F5EE", color: "#0F6E56", fontSize: "12px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "1.5rem" }}>
          Portfolio — Ingénierie des Données
        </span>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
          {[["LQ","#E1F5EE","#0F6E56"],["NF","#EEEDFE","#3C3489"],["NK","#FAECE7","#993C1D"]].map(([label, bg, color], i) => (
            <div key={i} style={{ width: 52, height: 52, borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500, fontSize: 14, border: "2.5px solid #fff", marginLeft: i === 0 ? 0 : -10 }}>
              {label}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#5F5E5A", marginBottom: "0.25rem" }}>Léa · Ndeye Fatou · Nilakshika</p>
        <p style={{ fontSize: 12, color: "#1D9E75", fontWeight: 500, marginBottom: "2rem" }}>M1 Expert en Ingénierie des Données · EPSI 2026</p>
        <h1 style={{ fontSize: "clamp(2.2rem,6vw,4rem)", lineHeight: 1.1, marginBottom: "1rem" }}>
          Nous construisons des <em style={{ color: "#1D9E75" }}>pipelines</em><br />qui passent à l&apos;échelle.
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#5F5E5A", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
          Futures expertes en ingénierie des données, spécialisées en architecture ETL, systèmes distribués et plateformes de données cloud.
        </p>
      </section>

      {/* Compétences */}
      <section style={{ padding: "3.5rem 2rem", maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", color: "#1D9E75", textTransform: "uppercase", marginBottom: "1.5rem" }}>Nos compétences</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {[
            ["🔁","ETL & Pipelines","Conception et automatisation de flux de données de bout en bout"],
            ["☁️","Cloud & Azure","Déploiement d'infrastructures de données scalables sur le cloud"],
            ["⚡","Spark & Kafka","Traitement temps réel et batch avec des moteurs distribués"],
            ["🗄️","Bases de données","Cassandra, PostgreSQL, MongoDB, Elasticsearch"],
            ["📊","Visualisation","Tableaux de bord Kibana, Grafana et Power BI"],
            ["🐳","DevOps & CI/CD","Docker, Airflow, automatisation de pipelines Jenkins"],
          ].map(([icon, title, desc], i) => (
            <div key={i} style={{ background: "#F1EFE8", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontSize: 24, marginBottom: "0.75rem" }}>{icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ fontSize: 12, color: "#5F5E5A", lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid rgba(0,0,0,0.1)" }} />

      {/* Projets */}
      <section style={{ padding: "3.5rem 2rem", maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", color: "#1D9E75", textTransform: "uppercase", marginBottom: "1.5rem" }}>Projets réalisés</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            ["GoodAir — Surveillance de la qualité de l'air", "Plateforme de surveillance en temps réel pour 20 villes françaises. Collecte des données météo et de qualité de l'air, stockage dans un Data Lake Cassandra, visualisation via Kibana.", ["Cassandra","Airflow","Elasticsearch","Docker","Azure"]],
            ["Vélib — Pipeline de streaming temps réel", "Pipeline de bout en bout ingérant les données des stations Vélib via Kafka, traitées avec Spark Structured Streaming, stockées dans PostgreSQL et MongoDB.", ["Kafka","Spark","PostgreSQL","Grafana"]],
            ["Pipeline CI/CD — Next.js sur Heroku", "Pipeline de déploiement automatisé avec Jenkins, Docker et GitHub Webhooks. Workflow DevOps complet du push de code jusqu'à la mise en production.", ["Jenkins","Docker","Heroku","Next.js"]],
          ].map(([title, desc, tags], i) => (
            <div key={i} style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
              <div style={{ width: 10, height: 10, background: "#1D9E75", borderRadius: "50%", marginTop: 5, flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: "0.3rem" }}>{title as string}</h3>
                <p style={{ fontSize: 13, color: "#5F5E5A", lineHeight: 1.6 }}>{desc as string}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "0.75rem" }}>
                  {(tags as string[]).map((tag, j) => (
                    <span key={j} style={{ background: "#E1F5EE", color: "#0F6E56", fontSize: 11, padding: "2px 10px", borderRadius: 20 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid rgba(0,0,0,0.1)" }} />

      {/* Équipe */}
      <section style={{ padding: "3.5rem 2rem", maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", color: "#1D9E75", textTransform: "uppercase", marginBottom: "1.5rem" }}>L&apos;équipe</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[["L","Léa","#E1F5EE","#0F6E56"],["NF","Ndeye Fatou","#EEEDFE","#3C3489"],["N","Nilakshika","#FAECE7","#993C1D"]].map(([initial, name, bg, color], i) => (
            <div key={i} style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, margin: "0 auto 1rem", fontWeight: 500 }}>{initial}</div>
              <h3 style={{ fontSize: 15, fontWeight: 500 }}>{name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "2.5rem", borderTop: "0.5px solid rgba(0,0,0,0.1)", fontSize: 13, color: "#5F5E5A" }}>
        Développé avec <span style={{ color: "#1D9E75", fontWeight: 500 }}>Next.js</span> · Déployé sur <span style={{ color: "#1D9E75", fontWeight: 500 }}>Heroku</span> · M1 Expert en Ingénierie des Données · EPSI 2026
      </footer>

    </main>
  );
}