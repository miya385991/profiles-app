
<script lang="ts">
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardText,
    Image,
    Container,
    Row,
    Col
  } from "sveltestrap";

  let endopoint = import.meta.env.VITE_API_URL;

  const getProjects = async () => {
    const res = await fetch(`${endopoint}/project/`);
    const data = await res.json();
    return data;
  };
  let projects = getProjects();

</script>

  <Container>
    {#await projects}
    <p>Loading...</p>
    {:then project}

  <Row cols={3}>
    {#each project as pj}
    <Col>
      <Card body color="light" class="mb-3 projects">
        <CardHeader>
          <CardTitle>{pj.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
          <img
          src={`${endopoint}/${pj.image_url}`}
          alt="project_icon"
          class="project_icon"
          />
          </CardText>
          <CardText>{pj.description}</CardText>
          <p><a href={pj.demo_link}>プロジェクトに移動</a></p>
          <p><a href={pj.source_link}>souceに移動</a></p>
          <p>{pj.created}</p>
        </CardBody>
      </Card>
    </Col>
    {/each}
  </Row>

    {:catch error}
    <p>Something went wrong: {error}</p>
    {/await}
    </Container>
  

    <style>
      .project_icon{
        height: 250px;
        object-fit: contain;
        width: 100%;
      }
    </style>