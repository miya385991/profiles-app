<script lang="ts">
  import { Button, Nav, NavItem } from "sveltestrap";
  import { Link, Route, navigate } from "svelte-routing";
  import { onMount, onDestroy } from "svelte";

  import Home from "./Header.svelte";

  import Cookies from "js-cookie";
  import { token } from "../utils/store";

  let getToken = Cookies.get('token');
  
  
  const userLogout = ()=>{
    token.remove()
    Cookies.remove('token')
  }
  
  $: if (getToken) {
    Cookies.set('token',getToken)
    navigate('/', {replace:true})
  }else{
    token.subscribe(token =>getToken =token)
  }
</script>

<header>
  <Link to="/">
    <img src="./src/assets/svelte.svg" />
  </Link>

  <div class="nav__bar">
    <nav>
      <ul class="nav__links">
        <li>
          <Link to="/developers" >Developers</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {#if getToken}
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Button outline color="danger" on:click={userLogout} >LogOut</Button>
          </li>
        {:else}
          <li>
            <Link to="/signup"
              ><Button color="secondary"  >SignUp / Login</Button
              ></Link
            >
          </li>
        {/if}
      </ul>
    </nav>
  </div>
</header>

<style>
  li,
  a,
  button {
    font-size: 500;
    text-decoration: none;
  }
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 10px;
    background-color: rgb(168, 204, 196);
  }

  .logo {
    cursor: pointer;
    margin-right: auto;
  }

  .nav__links {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav__links li a {
    transform: all 0.3 ease 0s;
    color: #fff;
  }

  .nav__links li a:hover {
    color: #00b7a9;
  }

  .nav__bar {
    width: 80%;
  }

</style>
