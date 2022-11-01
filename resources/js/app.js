import './bootstrap';
import '../css/bootstrap_assets/css/bootstrap/bootstrap-rtl.css'
import '../css/bootstrap_assets/css/bootstrap/bootstrap.css'
import '../css/bootstrap_assets/css/daterangepicker.css'
import '../css/bootstrap_assets/css/fontawesome.css'
import '../css/bootstrap_assets/css/fullcalendar@5.2.0.css'
import '../css/bootstrap_assets/css/jquery-jvectormap-2.0.5.css'
import '../css/bootstrap_assets/css/jquery.mCustomScrollbar.min.css'
import '../css/bootstrap_assets/css/leaflet.css'
import '../css/bootstrap_assets/css/line-awesome.min.css'
import '../css/bootstrap_assets/css/magnific-popup.css'
import '../css/bootstrap_assets/css/MarkerCluster.css'
import '../css/bootstrap_assets/css/MarkerCluster.Default.css'
import '../css/bootstrap_assets/css/select2.min.css'
import '../css/bootstrap_assets/css/slick.css'
import '../css/bootstrap_assets/css/star-rating-svg.css'
import '../css/bootstrap_assets/css/trumbowyg.min.css'
import '../css/bootstrap_assets/css/wickedpicker.min.css'
import '../css/styles.css'

import { createApp, h } from 'vue';
import {createInertiaApp, Head, Link} from '@inertiajs/inertia-vue3';
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
            .component("Link", Link)
            .component("Head", Head)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

InertiaProgress.init({
    color: '#d94f00',
    showSpinner: true
});
