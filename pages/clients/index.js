import Link from "next/link";

function Clients() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {/* 방법 1 */}
        {clients.map((client) => (
          <li key={client.key}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
        {/* 방법 2 */}
        {clients.map((client) => (
          <li key={client.key}>
            <Link
              href={{
                pathname: "/client/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;
