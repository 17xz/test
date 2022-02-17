import React from 'react';
import Head from 'next/head';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const layout = ({ children }) => {
    return ( < div > <
        Head >
        <
        title > Amn < /title> <
        link rel = "icon"
        href = "/favicon.svg" / > <
        /Head> <
        link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
        rel = "stylesheet"
        integrity = "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
        crossorigin = "anonymous" >
        <
        /link> <
        NavBar / > < main > { children } < /main> < Footer / > < /div >

    )
}

export default layout