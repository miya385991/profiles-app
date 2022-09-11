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
  import {Link} from 'svelte-routing'
  import Cookies from 'js-cookie'
  import {token} from '../utils/store'



  let getToken = Cookies.get('token')


  let endopoint = import.meta.env.VITE_API_URL;
  const getProfile = async () => {
    const res = await fetch(`${endopoint}/portfolio/`,
    {
      method:"GET",
      headers:{
        'Content-type':'application/json',
        Authorization:`Bearer ${getToken}`
      }
    });
    const data = await res.json();
    return data;
  };
  let profiles = getProfile();
  
</script>

  <Container>
    
    {#await profiles}
    <p>プロフィールを登録してください。登録は<Link to="/profileForm">こちら</Link>から</p>
    {:then pt}
  
  <Row>
    <Col xs="4">
    <div class="profile">
      <h2>{pt.profile.nick_name}</h2>
      <Image fluid src={`${endopoint}/${pt.profile.image_url}`}  />
      <p>{pt.profile.location}</p>
      <p>{pt.profile.short_intro}</p>
      <p>{pt.profile.bio}</p>
    </div>
  </Col>
  <Col xs="8">
    <div class="contents">
      <div class="skill">
        <h3>スキル</h3>
        <Row cols={5} class="skill_contents">
          {#each pt.skill as skill}
          <Col >{skill.name}</Col>
          {/each}
        </Row>
      </div>
      <h3>メディア</h3>
      <Row cols={5} class="media">
        {#each pt.media as media}
        <Col>
          <Link to={media.linked}>
          <h3>{media.name}</h3>
          <p>Link先はこちら</p></Link>
        </Col>
        {/each}
      </Row>

  </div>
</Col> 
</Row>
      <Row cols={2}>
        {#each pt.project as pj}
        <Col>
        <Card body color="light" class="mb-3 projects">
          <CardHeader>
          <CardTitle>{pj.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <img
          class='user_icon'
          src={`${endopoint}/${pj.image_url}`}
          alt="project_icon"
          />
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
  .user_icon{
    height: 250px;
    object-fit: contain;
    width: 100%;
  }
</style>