<script lang="ts">
  import { Link } from "svelte-routing";
  import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
    CardTitle,
    Form,
    FormGroup,
    Input,
    Label,
    Col,  
    Container,
    Row,
  } from "sveltestrap";

  import Cookies from 'js-cookie'
  import {token} from '../utils/store'

  let username = ''
  let password = ''

  
  
  const inputUsername = (e) =>{
    username = e.target.value
  }
  
  const inputPassword = (e) =>{
    password = e.target.value
  }
  const submitLogin = async () =>{
    let formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    
    let request = {
      method:'POST',
      body:formData
    }
    const res = await fetch(`${import.meta.env.VITE_API_URL}/token`, request)
    const data = await res.json()
    
    token.set(data.token)
    

  }


</script>

<Container>
  <Row>
    <Col sm={{ size: 6, order: 2, offset: 3 }}>
          <Card class="mb-3">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>
                <Label for="exampleEmail">Username</Label>
                <Input placeholder="username" 
                on:input={inputUsername}
                />
              </CardText>
              <CardText>
                <Label for="examplePassword">Password</Label>
                <Input type="password"
                name="password"
                 placeholder="Password"
                 on:input={inputPassword}
                  />
              </CardText>
              <CardText>
                <Button  color="primary" on:click={submitLogin}>ログイン</Button>
              </CardText>
              <CardText>
                <Link to="/signup">新規登録はこちらへ</Link>
              </CardText>
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
    </Col>
  </Row>
</Container>
