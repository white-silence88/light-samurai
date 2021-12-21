<script>
    import PasswordField from "$lib/Forms/Fields/PasswordField.svelte";
    
    export let password = '';
    export let isEqual = false;
    let repeatedPassword = '';
    $: {
        isEqual = (password == repeatedPassword && password.length != 0 && repeatedPassword.length != 0);
    }
</script>

<!-- field for password -->
<PasswordField bind:password = {password}/>
<!-- Repeat password field-->
<PasswordField bind:password= {repeatedPassword} name="Повторите пароль"/>
{#if isEqual == false && password.length != 0 && repeatedPassword.length != 0}
    <article class="message is-danger">
        <div class="message-body">
        <string>Ошибка!</string> Пароли не совпадают
        </div>
    </article>
{/if}