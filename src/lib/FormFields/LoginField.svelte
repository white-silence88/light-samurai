<script>
    export let login='';
</script>

<div class="field">
    <div class="control">
        <label for="login-field" class="label">Имя пользователя</label>
        <input
            bind:value={login}
            id="loging-field" 
            class="input" 
            type="text" 
            placeholder="Введите имя пользователя">
        {#if login.length < 4 && login.length > 0}
            <p class="help is-danger">Имя пользователя должно быть не меньше 4 символов</p>
        {/if}
    </div>
</div>