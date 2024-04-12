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

import { sampleComponent } from "./sample-component/sample-component";

function component() {
    const element = document.createElement('div');
    let sampleComponentTest = sampleComponent();
    element.innerHTML = sampleComponentTest.sayHello();
  
    return element;
  
  }
  


  document.body.appendChild(component());