<?php
/**
 * Template Name: Jakarta Butuh Kita Campaign Page
 * The template for displaying Jakarta Butuh Kita Campaign pages.
 *
 */

use P4\MasterTheme\Context;
use P4\MasterTheme\Post;
use Timber\Timber;
$context        = Timber::get_context();
$post           = new Post(); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
$page_meta_data = get_post_meta( $post->ID );
$page_meta_data = array_map( 'reset', $page_meta_data );
$template_path = get_post_meta(get_the_ID(), '_wp_page_template', true);
$template_theme = wp_get_theme()->get_page_templates();

$post_slug = ($template_theme[$template_path] == 'Jakarta Butuh Kita Campaign Page') ? $post->slug : '';

$context['post']                = $post;
$context['header_video'] = get_stylesheet_directory_uri().'/assets/media/ndcseries.mp4';
$context['bg_form'] = get_stylesheet_directory_uri().'/assets/static/images/Group 687.png';
$context['post_slug']                = $post_slug;

Context::set_header( $context, $page_meta_data, $post->title );
Context::set_og_meta_fields( $context, $post );
Timber::render( [ 'jakarta-kita-bisa.twig' ], $context );
?>
