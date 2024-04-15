/**
 * Global CSS imports
 */
import "./reset.css";
import "./main.css";

/**
 * Font Awesome
 */
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { dropdownController } from "./dropdown-controller/dropdown-controller";

dropdownController.initialize();
