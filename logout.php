<?php
require 'config/constants.php';

// destroy all sessions and redirect to homepage
session_destroy();
header('location: ' . ROOT_URL);
die();
