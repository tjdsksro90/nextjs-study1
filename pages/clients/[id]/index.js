import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    // 방법 1
    router.push("/client/max/projecta");
    // 방법 2
    router.push({
      pathname: "/client/[id]/[clentprojectid]",
      query: { id: "max", clentprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>ClientProjectsPage</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
