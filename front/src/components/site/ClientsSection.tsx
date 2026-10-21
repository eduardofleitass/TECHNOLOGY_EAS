import { clients } from "../../data/site";

export function ClientsSection() {
  return (
    <section className="section section-plain clients" id="clientes">
      <div className="container">
        <div className="section-head centered">
          <p className="eyebrow eyebrow-dash">{clients.eyebrow}</p>
          <h2 className="section-title">{clients.title}</h2>
        </div>

        <ul className="clients-row">
          {clients.items.map((client) => (
            <li key={client.name} className="client-logo">
              <span className="client-name">{client.name}</span>
              <span className="client-sector">{client.sector}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
