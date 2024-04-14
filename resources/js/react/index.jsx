import React, {Suspense} from "react";
import '../../css/app.css';
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.min.css';
import '@splidejs/react-splide/css';
import {createRoot} from 'react-dom/client';
import './translations/i18n';
import Loading from "./components/allComponents/Loading.jsx";
import App from "./App.jsx";
import ScrollProvider from "./providers/ScrollProvider.jsx";

const root = createRoot(document.getElementById('react-app'));
root.render(<Suspense fallback={<Loading fullScreen dark/>}>
    <ScrollProvider>
        <div data-scroll-container>
            <App/>
        </div>
    </ScrollProvider>
</Suspense>);
