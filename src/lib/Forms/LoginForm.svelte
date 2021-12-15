<script>
    import LoginField from '$lib/FormFields/LoginField.svelte';
    import PasswordField from '$lib/FormFields/PasswordField.svelte';
    import SuccessButton from '$lib/FormFields/SuccessButton.svelte';
    import { createEventDispatcher } from 'svelte';
    import { variables } from '$lib/variables';

    const dispatch = createEventDispatcher();

    let login = '';
    let password = '';

    export let url = '';
    export let user = undefined;

    $:disabled = (login.length >= 4 && password.length >=7) ? false : true;

    async function handleSuccess(_event) {
      if (url) {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({ login, password }),
          headers: {
            'Content-Type': 'application/json',
            'origin': variables.basePath || 'http://localhost:3000'
          }
        });
        const {data, meta} = await response.json();
        saySuccess(data, meta.token);
      }
    } 

    function saySuccess(user, token) {
      dispatch('success', {user, token});
    }
</script>

<div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">		  
      <div class="content">
        <!-- Login field -->
        <LoginField bind:login = {login}/>
        <!-- field for password -->
        <PasswordField bind:password = {password}/>
        <!-- success button -->
        <SuccessButton
          on:success={handleSuccess} 
          title = "Войти" 
          sender="LoginForm" 
          disabled={disabled}/>
      </div>
    </div>
</div>