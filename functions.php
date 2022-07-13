<?php

/**
 * Additional code for the child theme goes in here.
 */
add_action( 'wp_enqueue_scripts', 'enqueue_child_styles', 99);

function enqueue_child_styles() {
	// $slug = get_post_field( 'post_name', get_post() );
	// if ($slug == 'jakarta-butuh-kita') {
	if ( is_page_template('page-templates/custom-campaign.php') ) {
		$css_creation = filectime(get_stylesheet_directory() . '/assets/build/style.css');
		wp_enqueue_style( 'child-fullpage', get_stylesheet_directory_uri() . '/assets/static/fullpage.min.css', [], $css_creation );
		wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/assets/build/style.css', [], $css_creation );
	}
}

add_action( 'wp_enqueue_scripts', 'load_jkb_js', 99);

function load_jkb_js() {
	// $slug = get_post_field( 'post_name', get_post() );
	// if ($slug == 'jakarta-butuh-kita') {
	if ( is_page_template('page-templates/custom-campaign.php') ) {
		$js_creation = filectime(get_stylesheet_directory() . '/assets/build/web-dist.js');
		wp_enqueue_script('child-scrolloverflow', get_stylesheet_directory_uri() . '/assets/static/scrollOverflow.min.js', [], true );
		wp_enqueue_script('child-fullpagejs', get_stylesheet_directory_uri() . '/assets/static/fullpage.min.js', [], true );
		wp_enqueue_script('child-js', get_stylesheet_directory_uri() . '/assets/build/web-dist.js', [], $js_creation );
	}
}
function defer_parsing_of_js( $url ) {

	if ( is_user_logged_in() ) return $url; //don't break WP Admin

	if ( FALSE === strpos( $url, '.js' ) ) return $url;

	if ( strpos( $url, 'jquery.js' ) ) return $url;

	return str_replace( 'src', 'defer src', $url );
}

add_filter( 'script_loader_tag', 'defer_parsing_of_js', 10 );