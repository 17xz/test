import React from 'react'

export const getStaticProps = async() => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=9"
    );
    const data = await res.json();

    return {
        props: { posts: data },
    };
};
const blog = ({ posts }) => {
    return ( < div className = "container pt-4" >
        <
        div className = "row" >
        <
        h1 > Blog < /h1> <
        hr / >
        <
        /div> <
        div className = "row" > {
            posts.map((post) => ( <
                div className = "col-12 col-md-4"
                key = { post.id } >
                <
                div className = "card mb-4" >
                <
                img src = { `https://source.unsplash.com/720x400/?${post.id}` }
                className = "card-img-top"
                alt = "dd" /
                >
                <
                div className = "card-body" >
                <
                h5 className = "card-title" > { post.title } < /h5>  <
                a className = "btn btn-primary" > Go somewhere < /a>  < /
                div > < /
                div > <
                /div>
            ))
        } <
        /div > < /
        div >
    )
}

export default blog