//Teknologi.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { client } from '../../Static/contentfulClient';
import entryIdMapping from "../../Static/entryIdMapping";

const Teknologi = () => {
    const { postId } = useParams();
    const [blogPosts, setBlogPosts] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        client
            .getEntries({ content_type: "ingnNyheder", 'fields.slug': postId })
            .then((res) => {
                if (res.items.length > 0) {
                    setBlogPosts(res.items.slice(6, 7)); 
                } else {
                    setBlogPosts([]);
                }
            })
            .catch((err) => console.log(err));
    }, [postId]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576); // Adjust the breakpoint as needed
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize); // Add event listener for resize

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container mx-auto px-4 max-w-screen-2xl">
            <h1 className="text-3xl font-bold mb-4">Teknologi</h1>
            <br />
            <div className={`max-w-xl mx-auto ${isSmallScreen ? 'sm:max-w-full' : 'sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'} flex flex-col gap-4`}>
                {blogPosts.length > 0 ? (
                    blogPosts.map((blogPost) => (
                        <Link key={blogPost.sys.id} to={entryIdMapping[blogPost.sys.id]} className="hover:underline">
                            <div className="bg-white p-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                {blogPost.fields && blogPost.fields.blogImage && blogPost.fields.blogImage.fields && (
                                    <img 
                                        src={blogPost.fields.blogImage.fields.file.url} 
                                        className={`w-full h-auto mb-4 rounded-lg ${isSmallScreen ? 'object-contain' : ''}`} 
                                        alt={blogPost.fields.blogTitle} 
                                    />
                                )}
                                <h2 className="text-xl font-semibold mb-2">{blogPost.fields?.blogTitle || 'Unknown Title'}</h2>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No blog posts found with the specified slug.</p>
                )}
            </div>
        </div>
    );
};

export default Teknologi;
