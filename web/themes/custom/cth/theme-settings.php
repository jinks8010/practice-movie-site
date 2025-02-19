<?php

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function cth_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
  // Add a text field for a custom footer message.
  $form['custom_footer_text'] = [
    '#type' => 'textfield',
    '#title' => t('Custom Footer Text'),
    '#default_value' => theme_get_setting('custom_footer_text'),
    '#description' => t('Enter a custom footer message for the site.'),
  ];

  // Add a color field for the background color.
  $form['custom_bg_color'] = [
    '#type' => 'color',
    '#title' => t('Background Color'),
    '#default_value' => theme_get_setting('custom_bg_color', '#ffffff'),
    '#description' => t('Choose a background color for the site.'),
  ];

  // Add a checkbox for enabling/disabling dark mode.
  $form['enable_dark_mode'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable Dark Mode'),
    '#default_value' => theme_get_setting('enable_dark_mode', FALSE),
    '#description' => t('Check this box to enable dark mode.'),
  ];
}