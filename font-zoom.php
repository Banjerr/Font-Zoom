<?php
/**
* Plugin Name: Font Zoom
* Plugin URI: http://benjaminredden.we.bs
* Description: Zooms in/out on text
* Version: 1.0
* Author: Ben Redden
* Author URI: http://benjaminredden.we.bs
* License: WTFPL
* License URI: http://www.wtfpl.net/txt/copying/
*/


// enqueue fontZoom script
function fontZoom_script() {
	wp_enqueue_script( 'text-resize', plugins_url('/js/text-resize.js',__FILE__), array(), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'fontZoom_script' );
