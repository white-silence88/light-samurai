<script>
  import Buttons from '$lib/Layouts/Menu/Buttons.svelte';
  import Burger from '$lib/Layouts/Menu/Burger.svelte';

  export let user;
  export let mainButtons = [];
  export let moreBUttons = [];
  export let logo = {
    url: "https://bulma.io/images/bulma-logo.png",
    alt: ""
  };

  let mobileMenuOpened = false;

  $: isActive = mobileMenuOpened ? "is-active" : "";

  function burgerClickHandler(event) {
    mobileMenuOpened = event.detail;
  }
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <img 
              src={logo.url} 
              width="112" 
              height="28"
              alt={logo.alt}>
        </a>
        
        <Burger on:click={burgerClickHandler}/>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu {isActive}">
      <div class="navbar-start">
        <Buttons items={mainButtons} />
  
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