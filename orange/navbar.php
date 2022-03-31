<nav class="navbar navbar-expand-lg navbar-light">
<div class="container-fluid">
<a class="d-lg-none navbar-brand" href="<?php echo home_url( '/' ) ?>"><?php echo get_bloginfo('name'); ?></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<?php
    $JSON = get_json_file('/data.json');
    $is_wplists = orange_wp_list([ 'type' => 'category', 'exclude' => $JSON->app->category->exclude ]);
    $is_wplists = str_replace('cat-item', 'nav-item', $is_wplists);
    $is_wplists = str_replace('children', 'dropdown-menu', $is_wplists);
    echo $is_wplists;
?>
</ul>
<?php echo orange_search_form([ 'name' => 'search' ]); ?>
</div>
</div>
</nav>