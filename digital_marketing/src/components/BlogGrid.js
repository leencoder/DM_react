import React, { useEffect, useState } from 'react';
import BlogCard from "./BlogCard";

const BlogGrid = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data.json");
            const data = await response.json();
            setBlogPosts(data.blogPosts);
        };

        fetchData();
    }, []);

    return (
        <div className="row row-cols-lg-3 my-4 my-lg-5">
            {blogPosts.map((post, index) => (
                <BlogCard
                    key={index}
                    image={post.image}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    link={post.link}
                />
            ))}
        </div>
    );
};

export default BlogGrid;
