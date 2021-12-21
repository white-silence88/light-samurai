<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    let opened = false;

    $: isActive = opened ? "is-active" : "";

    function sayClick() {
        opened = !opened;
        dispatch('click', opened);
    }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a on:click={sayClick}
    role="button" 
    class="navbar-burger {isActive}" 
    aria-label="menu" 
    aria-expanded="false">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
</a>