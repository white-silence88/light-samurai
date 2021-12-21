<script>
  export let title = "Hero title";
  export let subtitle = "Hero subtitle";
  export let color = "is-info";
  export let size = "";
</script>

<section class="hero {size} {color}">
  <div class="hero-body">
    <p class="title">{title}</p>
    <p class="subtitle">{subtitle}</p>
  </div>
</section>