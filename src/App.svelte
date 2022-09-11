<script lang="ts">

  import { Router, Link, Route } from "svelte-routing";
  import Header from "./UI/Header.svelte";
  import Home from "./routes/Home.svelte"
  import Projects from "./routes/Projects.svelte";
  import About from "./routes/About.svelte";
  import Developers from "./routes/Developers.svelte";
  import Login from "./routes/Login.svelte";
  import Signup from "./routes/Signup.svelte";
  import ProfileForm from "./routes/ProfileForm.svelte";
</script>
<Router>
  <Header />

  <main>
    <div>
      <Route path="/" component="{Projects}" />
      <Route path="/home" component="{Home}" />
      <Route path="/developers" component="{Developers}" />
      <Route path="/projects" component="{Projects}" />
      <Route path="/about" component="{About}" />
      <Route path="/login" component="{Login}" />
      <Route path="/signup" component="{Signup}" />
      <Route path="/profileForm" component="{ProfileForm}" />
    </div>
  </main>
  
</Router>
