<script>
  import Buttons from '$lib/Layouts/Menu/Buttons.svelte';
  import Burger from '$lib/Layouts/Menu/Burger.svelte';
  import More from '$lib/Layouts/Menu/More.svelte';
  import Logo from '$lib/Layouts/Menu/Logo.svelte';
  import LoginOrRegister from '$lib/Layouts/Menu/LoginOrRegister.svelte';

  export let user;
  
  export let moreTitle = 'Ещё';

  export let color = 'is-dark';
  
  export let buttons = {
    main: [],
    more: []
  };
  
  let mainButtons = buttons.main ? buttons.main : [];
  let moreButtons = buttons.more ? buttons.more : [];

  export let logo = {
    url: 'https://bulma.io/images/bulma-logo-white.png',
    alt: '',
    width: '112',
    height: '28'  
  };

  let mobileMenuOpened = false;

  $: isActive = mobileMenuOpened ? 'is-active' : '';

  function burgerClickHandler(event) {
    mobileMenuOpened = event.detail;
  }
</script>

<nav class="navbar {color}" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <Logo url="/" logo={logo} />
      <Burger on:click={burgerClickHandler} />
    </div>
  
    <div id="navbar-top-menu" class="navbar-menu {isActive}">
      <div class="navbar-start">
        {#if mainButtons.length > 0}
          <Buttons items={mainButtons} />
        {/if}
        
        {#if moreButtons.length > 0}
          <More title={moreTitle} items={moreButtons} />
        {/if}
      </div>
  
      <div class="navbar-end">
        <LoginOrRegister user={user} />
      </div>
    </div>
</nav>