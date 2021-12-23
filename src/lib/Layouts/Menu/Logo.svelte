<script>
    export let url = '/';
    export let logo = {
        url: 'https://bulma.io/images/bulma-logo.png',
        alt: '',
        width: '112',
        height: '28'  
    };
</script>

<a class="navbar-item" href="{url}">
    <img 
      src={logo.url} 
      width="{logo.width}" 
      height="{logo.height}"
      alt="{logo.alt}">
</a>