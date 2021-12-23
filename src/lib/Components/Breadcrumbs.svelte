<script>
    export let items = [
        {href: "#", title: 'Bulma', active: false},
        {href: "#", title: 'Documents', active: false},
        {href: "#", title: 'Components', active: false},
        {href: "#", title: 'Breadcrumbs', active: true},
    ];
</script>

<nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
        {#each items as {href, title, active}}
            {#if active}
                <li class="is-active">
                    <a href="{href}" aria-current="page">{title}</a>
                </li>
            {:else}
                <li><a href="{href}">{title}</a></li>
            {/if}
        {/each}
    </ul>
</nav>