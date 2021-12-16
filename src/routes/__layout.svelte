<script>
    import 'bulma/css/bulma.css';
    import { session } from '$app/stores';
    import { user as user_ls } from '$lib/Stores/localStorage.js';

    let user;

    session.subscribe(value => {
      user = value.user;
    });
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        
        <!-- svelte-ignore a11y-missing-attribute -->
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        
        <a class="navbar-item" href="/">Главная</a>
  
        <a class="navbar-item" href="/catalog">Каталог</a>

        <a class="navbar-item" href="/craft">Мастерская</a>

        <a class="navbar-item" href="/news">Новости</a>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="navbar-link">Ещё</a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item" href="/forum">Форум</a>
            <a class="navbar-item" href="/feedback">Обратная связь</a>
            <a class="navbar-item" href="/about">О сервисе</a>
            <a class="navbar-item" href="/contacts">Контакты</a>
            <a class="navbar-item" href="/offer">Оферта</a>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            {#if !user}
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="button is-primary" href="/register">
                <strong>Регистрация</strong>
              </a>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="button is-light" href="/login">Войти</a>
            {:else}
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="button is-primary" href="/profile">
                <strong>{user.login}</strong>
              </a>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="button is-danger" href="/login">Выйти</a>
            {/if}
          </div>
        </div>
      </div>
    </div>
</nav>

<slot></slot>

<footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>OGC</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
</footer>
