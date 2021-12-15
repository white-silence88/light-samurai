<script>
    import LoginField from '$lib/FormFields/LoginField.svelte';
    import ComparedPasswordFields from '$lib/FormFields/ComparedPasswordFields.svelte';
    import SuccessButton from '$lib/FormFields/SuccessButton.svelte';
    
    let login = '';
    let password = '';
    let isEqual = false;
    $:disabled = (isEqual && login.length >= 4) ? false : true;
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
        <SuccessButton sender="RegisterForm" disabled={disabled} title = "Регистрация" />
      </div>
    </div>
</div>