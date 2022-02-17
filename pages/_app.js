import Layout from "../layout/layout";
import React from 'react';





export default function App({ Component, pageProps }) {
    return ( <
        Layout > <
        Component {...pageProps }
        / >< /Layout >
    );
}