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
    // window.document.getElementById('side-btn-up').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth', }));
    orange_add_remove_classes({ classes: [ 'nav-link', ], elements: [ '.nav-item>a', ], method: 'add', });
    orange_add_remove_classes({ classes: [ 'active', ], elements: [ '.current-cat>a', '.current_page_item>a' ], method: 'add', });
    orange_lightbox_carousel();
    // orange_lightbox_thumbnail();
    // window.rwbp = {
    //     email : 'far820320@gmail.com',
    //     phone : '+5511940058153',
    //     message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis aliquam sapien. Vivamus in augue venenatis augue convallis aliquet.',
    //     lang : 'pt-BR',
    // };
});