<script>
    import LoginField from '$lib/FormFields/LoginField.svelte';
    import ComparedPasswordFields from '$lib/FormFields/ComparedPasswordFields.svelte';
    import SuccessButton from '$lib/FormFields/SuccessButton.svelte';
    import { createEventDispatcher } from 'svelte';
    import { variables } from '$lib/variables';

    const dispatch = createEventDispatcher();
    
    let login = '';
    let password = '';
    let isEqual = false;

    export let url = '';

    $:disabled = (isEqual && login.length >= 4) ? false : true;

    async function successHandler(_event) {
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
        <!-- field for login-->
        <LoginField bind:login = {login}/>
        <!-- passwords fields -->
        <ComparedPasswordFields bind:password = {password} bind:isEqual = {isEqual} />
        <!-- success button -->
        <SuccessButton 
          on:click={successHandler}
          sender="RegisterForm" 
          disabled={disabled} 
          title = "Регистрация" />
      </div>
    </div>
</div>