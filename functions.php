<?php

function my_et_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    	wp_register_style( 'custom-css',get_stylesheet_directory().'/dist/css/styles.css', array(), filemtime( get_stylesheet_directory().'/dist/css/styles.css' ) );
	wp_enqueue_style( 'custom-css' );
	wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/scripts.js', array( 'jquery' ), '0.1.1', true );
}
add_action( 'wp_enqueue_scripts', 'my_et_enqueue_styles' );

/* === Add your own functions below this line ===
 * -------------------------------------------- */

 /*
 add_action( 'after_setup_theme', 'my_custom_image_sizes' );

 function my_custom_image_sizes() {
    if ( function_exists( 'add_image_size' ) ) {
        add_image_size( 'designers-square', 567, 421, true );
        add_image_size( 'hero-rectangle', 1220, 830, true );
        add_image_size( 'square-v1', 345, 378, true );
        add_image_size( 'portrait-lg', 756, 945, true );
        add_image_size( 'portrait-md', 612, 834, true );
        add_image_size( 'square-v2', 800, 800, true );
     }
    }
*/

// This enables the function that lets you set new image sizes
add_theme_support( 'post-thumbnails' );
// These are the new image sizes we cooked up


// Now we register the size so it appears as an option within the editor
/*
add_filter( 'image_size_names_choose', 'my_custom_image_sizes_chooser' );
function my_custom_image_sizes_chooser( $sizes ) {
    return array_merge( $sizes, array(
        'designers-square' => __( 'Designers square' ),
        'hero-rectangle' => __( 'Hero (rectangle)' ),
        'square-v1' => __( 'Square medium' ),
        'square-v2' => __( 'Square large' ),
        'portrait-lg' => __( 'Portrait Large' ),
        'portrait-md' => __( 'Portrait Medium' ),
    ) );
}
*/


    
?>
