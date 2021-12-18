<script>
    import 'bulma/css/bulma.css';

    import { session } from '$app/stores';
    import Footer from '$lib/PageBlocks/Footer.svelte';
    import Navbar from '$lib/PageBlocks/Navbar.svelte';

    import { token } from '$lib/Stores/localStorage.js';
    import { variables } from '$lib/variables.js';

    let user;
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

<Navbar user={user} />

<slot></slot>

<Footer />