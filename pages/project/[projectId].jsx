import { useRouter } from "next/router";

function ProjectDetail() {
  const router = useRouter();
  const projectId = router.query.projectId;
  return (
    <>
      <h1>Detailes about Project</h1>
      <h1>number of {projectId}</h1>
    </>
  );
}

export default ProjectDetail;
