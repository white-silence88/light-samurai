<script>
    export let password = '';
    export let name = 'Пароль';
</script>

<div class="field">
    <div class="control">
        <label for="password-field" class="label">{name}</label>
        <input
            bind:value = {password} 
            id="password-field" 
            class="input" 
            type="password" 
            placeholder="Введите пароль">
        {#if password.length < 7 && password.length > 0}
            <p class="help is-danger">Пароль должен быть не меньше 7 символов</p>
        {/if}
    </div>
</div>