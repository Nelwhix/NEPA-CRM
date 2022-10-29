import './bootstrap';
import '../css/vendor_assets/css/bootstrap/bootstrap-rtl.css'
import '../css/vendor_assets/css/bootstrap/bootstrap.css'
import '../css/vendor_assets/css/daterangepicker.css'
import '../css/vendor_assets/css/fontawesome.css'
import '../css/vendor_assets/css/fullcalendar@5.2.0.css'
import '../css/vendor_assets/css/jquery-jvectormap-2.0.5.css'
import '../css/vendor_assets/css/jquery.mCustomScrollbar.min.css'
import '../css/vendor_assets/css/leaflet.css'
import '../css/vendor_assets/css/line-awesome.min.css'
import '../css/vendor_assets/css/magnific-popup.css'
import '../css/vendor_assets/css/MarkerCluster.css'
import '../css/vendor_assets/css/MarkerCluster.Default.css'
import '../css/vendor_assets/css/select2.min.css'
import '../css/vendor_assets/css/slick.css'
import '../css/vendor_assets/css/star-rating-svg.css'
import '../css/vendor_assets/css/trumbowyg.min.css'
import '../css/vendor_assets/css/wickedpicker.min.css'
import '../css/style.css'

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
