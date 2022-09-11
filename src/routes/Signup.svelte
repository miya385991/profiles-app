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
  import {token} from '../utils/store'



  let username
  let firstName
  let lastName
  let email
  let password

  const inputUsername = (e) =>{
    username = e.target.value
  }
  const inputFirstName = (e) =>{
    firstName = e.target.value
  }
  const inputLastName = (e) =>{
    lastName = e.target.value
  }
  const inputEmail = (e) =>{
    email = e.target.value
  }
  const inputPassowrd = (e) =>{
    password = e.target.value
  }

  const createUser = async () =>{
    let createUserData = {
      "username": username,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": password,
    }

    let createRequest = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(createUserData)
    }
// ${import.meta.env.VITE_API_URL}
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/`, createRequest)
    const data = await res.json()
    token.set(data.token)
  }




</script>

<Container>
  <Row>
    <Col sm={{ size: 6, order: 2, offset: 3 }}>

          <Card class="mb-3" >
            <CardHeader>
              <CardTitle>SingIn</CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>
                <Label for="exampleEmail">Username</Label>
                <Input placeholder="username" on:input={inputUsername} />
              </CardText>
              <CardText>
                <Label for="exampleFirstName">First Name</Label>
                <Input placeholder="first name" on:input={inputFirstName} />
              </CardText>
              <CardText>
                <Label for="exampleEmail">Last Name</Label>
                <Input placeholder="last name" on:input={inputLastName} />
              </CardText>
              <CardText>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                  on:input={inputEmail}
                />
              </CardText>
              <CardText>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" placeholder="Password" on:input={inputPassowrd} />
              </CardText>
              <CardText>
                <Button color="primary" on:click={createUser}>新規登録</Button>
              </CardText>
              <CardText>
                <Link to="/login">ログインはこちらへ</Link>
              </CardText>
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
    </Col>
  </Row>
</Container>
