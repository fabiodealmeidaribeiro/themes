import {
    orange_add_element_styles,
    orange_add_remove_classes,
    orange_create_attribute,
    orange_create_element,
    orange_create_text,
    orange_get_bounding,
    orange_get_class,
    orange_get_first_uppercase,
    orange_get_ID,
    orange_get_name,
    orange_get_selector,
    orange_get_selectors,
    orange_get_tag,
    orange_get_validation,
    orange_is_this,
    orange_lightbox_carousel,
    orange_lightbox_thumbnail,
    orange_remove_attribute,
    orange_set_attribute,
    orange_set_height,
    orange_set_scroll,
} from './--master.js';

document.addEventListener("DOMContentLoaded", () => {
    orange_add_remove_classes({ classes: [ 'align-items-stretch', 'd-flex', 'g-0', 'row', ], elements: [ '#footer-row', ], method: 'add', });
    orange_add_remove_classes({ classes: [ 'col-lg' ], elements: [ 'article', '.post-highlight', '.post-postcustom', '.widget-container', ], method: 'add', });

    

    orange_add_remove_classes({ classes: [ 'nav-link', ], elements: [ '.nav-item>a', ], method: 'add', });
    orange_add_remove_classes({ classes: [ 'active', ], elements: [ '.current-cat>a', '.current_page_item>a' ], method: 'add', });
    orange_lightbox_carousel();

    // orange_lightbox_thumbnail();

    window.addEventListener('scroll', () => {
        let navPosition = 0;
        navPosition += document.querySelector('nav').getBoundingClientRect()['top'];
        navPosition += document.querySelector('nav').getBoundingClientRect()['height'];
        navPosition <= window.pageYOffset
        ? orange_add_remove_classes({ classes: [ 'transparent', ], elements: [ 'nav', ], method: 'add', })
        : orange_add_remove_classes({ classes: [ 'transparent', ], elements: [ 'nav', ], method: 'remove', });
    });

    window.document.getElementById('side-button-up').addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
    }));

    window.document.getElementById('side-button-down').addEventListener('click', () => window.scrollTo({
        top: document.querySelector('#container').getBoundingClientRect()['height'] - window.innerHeight,
        behavior: 'smooth',
    }));

    // window.addEventListener('scroll', () => {
    //     const windowTop = window.pageYOffset + window.innerHeight / 4 * 1;
    //     document.querySelectorAll('[data-animation]').forEach((element) => {
    //         if (windowTop > element.offsetTop) {
    //             element.classList.add('animation');
    //         } else { 
    //             element.classList.remove('animation');
    //         }
    //     });
    // });

});