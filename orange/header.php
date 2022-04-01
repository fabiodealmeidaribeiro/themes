<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
<?php orange_head(); ?>
<body <?php body_class(''); ?>>
<?php echo orange_side_button(); ?>
<div id="container">
<?php
    require require_file('/navbar.php');
    echo orange_header([ 'type' => 'bloginfo' ]);
?>