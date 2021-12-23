<script>
    export let user;
</script>

<div class="navbar-item">
    {#if !user}
        <div class="buttons">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="button is-primary" href="/register">
                <strong>Регистрация</strong>
            </a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="button is-light" href="/login">Войти</a>
        </div>
    {:else}
        <div class="navbar-item has-dropdown is-hoverable">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="navbar-link is-arrowless">
                {user.login}
            </a>

            <div class="navbar-dropdown is-right">
                <a class="navbar-item" href="/profile">
                    Профиль
                </a>
                <a class="navbar-item" href="/comments">
                    Коментарии
                </a>
                <a class="navbar-item" href="/logout">
                    Выйти
                </a>
            </div>
        </div>
    {/if}
</div>