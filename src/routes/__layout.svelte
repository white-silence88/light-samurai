<script>
    import 'bulma/css/bulma.css';

    import { session } from '$app/stores';
    import Footer from '$lib/Layouts/Footer.svelte';
    import Navbar from '$lib/Layouts/Navbar.svelte';

    import { token } from '$lib/Stores/localStorage.js';
    import { variables } from '$lib/variables.js';

    let user;
    let buttons = [
      {href: "/", title: "Главная"},
      {href: "/catalog", title: "Каталог"},
      {href: "/craft", title: "Мастерская"},
      {href: "/news", title: "Новости"}
    ]

    const url = `${variables.apiPath || 'http://localhost:8822'}/api/v1/user/autologin`

    session.subscribe(value => {
      if (value.token && value.user) {
        user = value.user;
        token.set(value.token);
      }
    });

    token.subscribe(async value => {
      !user && value && await getUserByToken(value);
    });

    async function getUserByToken(token) {
      const response = await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
          'origin': variables.basePath || 'http://localhost:3000'
        }
      });
      const { data, meta } = await response.json();
      session.set({ user: data, token: meta.token });
    }
</script>

<Navbar 
  user={user} 
  mainButtons={buttons}/>

<slot></slot>

<Footer />