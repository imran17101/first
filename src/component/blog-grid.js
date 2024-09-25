import React from 'react';
import { MdChevronRight } from "react-icons/md";
import BlogImage from '../images/blog-image.png';

const BlogGrid = () => {
    const posts = [
        {
            id: 1,
            image: (BlogImage),
            author: 'CodeTCG',
            date: 'March 26th, 2024',
            title: 'The Most Valuable Magic: The Gathering Cards in Packs Right Now! August 2024',
            snippet: "From Dominaria United to Bloomborrow, here's the big money cards you can open in packs today!",
            link: '/post/1'
        },
        {
            id: 2,
            image: (BlogImage),
            author: 'CodeTCG',
            date: 'March 26th, 2024',
            title: 'The Most Valuable Magic: The Gathering Cards in Packs Right Now! August 2024',
            snippet: "From Dominaria United to Bloomborrow, here's the big money cards you can open in packs today!",
            link: '/post/2'
        },
        {
            id: 3,
            image: (BlogImage),
            author: 'CodeTCG',
            date: 'March 26th, 2024',
            title: 'The Most Valuable Magic: The Gathering Cards in Packs Right Now! August 2024',
            snippet: "From Dominaria United to Bloomborrow, here's the big money cards you can open in packs today!",
            link: '/post/3'
        },
        {
            id: 4,
            image: (BlogImage),
            author: 'CodeTCG',
            date: 'March 26th, 2024',
            title: 'The Most Valuable Magic: The Gathering Cards in Packs Right Now! August 2024',
            snippet: "From Dominaria United to Bloomborrow, here's the big money cards you can open in packs today!",
            link: '/post/3'
        },
        {
            id: 5,
            image: (BlogImage),
            author: 'CodeTCG',
            date: 'March 26th, 2024',
            title: 'The Most Valuable Magic: The Gathering Cards in Packs Right Now! August 2024',
            snippet: "From Dominaria United to Bloomborrow, here's the big money cards you can open in packs today!",
            link: '/post/3'
        },
        {
            id: 6,
            image: (BlogImage),
            author: 'CodeTCG',
            date: 'March 26th, 2024',
            title: 'The Most Valuable Magic: The Gathering Cards in Packs Right Now! August 2024',
            snippet: "From Dominaria United to Bloomborrow, here's the big money cards you can open in packs today!",
            link: '/post/3'
        }
    ];

    return (
        <div className="blog-grid">
            {posts.map(post => (
                <div key={post.id} className="blog-card">
                    <img src={post.image} alt={post.title} className="blog-image" />
                    <div className="blog-content">
                        <p className="author-date">by {post.author}, {post.date}</p>
                        <h3 className="blog-title">{post.title}</h3>
                        <p className="blog-snippet">{post.snippet}</p>
                        <a href={post.link} className="read-more">Read More <MdChevronRight /></a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogGrid;
