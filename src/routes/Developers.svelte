
<script lang="ts">
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardText,
    Container,
    Row,
    Col
  } from "sveltestrap";

  let endopoint = import.meta.env.VITE_API_URL;

  const getProjects = async () => {
    const res = await fetch(`${endopoint}/profile/`);
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
    {#each project as pf}
    <Col>
      <Card body color="light" class="mb-3 projects">
        <CardHeader>
          <CardTitle>{pf.nick_name}</CardTitle>
        <img
          src={`${endopoint}/${pf.image_url}`}
          alt="{pf.image_id}"
          class="developers_icon"
          />
        </CardHeader>
        <CardBody>
          <CardText>{pf.location}</CardText>
          <CardText>{pf.short_intro}</CardText>
          <CardText>{pf.bio}</CardText>
          <CardText>{pf.created}</CardText>
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
      .developers_icon{
        height: 250px;
        object-fit: contain;
        width: 100%;
      }
    </style>