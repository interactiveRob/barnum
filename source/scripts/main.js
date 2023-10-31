import 'bootstrap';
import Example from '@/components/Example';

//run scripts when jQuery is ready
document.addEventListener('DOMContentLoaded', function () {
   Example.init({
      selector: `.selector`,
   });
});

//run scripts on window load
window.addEventListener('load', () => {});