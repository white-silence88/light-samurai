<script>
    export let nextTitle = 'Вперёд';
    export let prevTitle = 'Назад';
    export let total = 100;
    export let limit = 10;
    let maxPage = total/limit;
    let middlePage = maxPage/2;
</script>

<nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous">{prevTitle}</a>
    <a class="pagination-next">{nextTitle}</a>
    
    <ul class="pagination-list">
      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 45">{middlePage-1}</a></li>
      <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
      <li><a class="pagination-link" aria-label="Goto page 47">{middlePage}</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 86">{maxPage}</a></li>
    </ul>
</nav>