//Home.jsx
import React, { useEffect, useState } from 'react';
import { client } from '../../Static/contentfulClient';
import entryIdMapping from "../../Static/entryIdMapping";
import TechnicalDifficultiesImage from '../../assets/images/technical-difficulties.jpeg'; // Import the image

const Home = ({ setSelectedPost }) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [breakingNewsPost, setBreakingNewsPost] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const res = await client.getEntries({ content_type: "ingnNyheder" });
                setBlogPosts(res.items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
                setLoading(false);
            }
        };

        fetchBlogPosts();

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchBreakingNewsPost = async () => {
            try {
                const res = await client.getEntries({ content_type: "ingnNyheder" });
                const entryId = '2BEVzt02xl4VJrBTqgF0IP'; // Replace 'YOUR_ENTRY_ID' with the desired entry ID
                const foundPost = res.items.find(item => item.sys.id === entryId);
                setBreakingNewsPost(foundPost);
            } catch (error) {
                console.error('Error fetching breaking news post:', error);
            }
        };

        fetchBreakingNewsPost();
    }, []);

    const handleReadMore = (postId) => {
        const route = entryIdMapping[postId];
        if (route) {
            window.location.href = route;
        } else {
            console.error("Route not found for post:", postId);
        }
    };

    if (loading) {
        return null; // Show nothing while loading
    }

    return (
        <div className="container mx-auto px-4 max-w-screen-2xl mb-40" style={{ marginTop: '6rem' }}>
            {/* Breaking News Section */}
            {breakingNewsPost && (
                <div id="breaking-news-container" className={`relative overflow-hidden ${isSmallScreen ? '' : ''}`}>
                    <div id="breaking-news-colour" className="slideup animated w-full bg-blue-500"></div>
                    <span className="breaking-news-title delay-animated slidein absolute top-0 left-0 text-xs font-bold px-2 py-1">// BREAKING //</span>
                    <div className="breaking-news-headline delay-animated2 fadein marquee absolute block font-medium text-white text-xs mt-8 ml-20">
                        <h2 className="text-xl font-medium text-center">{breakingNewsPost?.fields?.blogTitle || 'Unknown Title'}</h2>
                    </div>
                </div>
            )}

            {breakingNewsPost && (
                <div className="bg-white rounded-lg overflow-hidden">
                    <div className="p-4">
                        <p className="text-red-600 mb-2">
                            {breakingNewsPost.fields?.createdDate ? (
                                new Intl.DateTimeFormat('da-DK', { // Use Danish locale
                                    timeZone: 'Europe/Copenhagen',
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric',
                                }).format(new Date(breakingNewsPost.fields.createdDate))
                            ) : (
                                'Unknown Date'
                            )} -
                            Af <a href="https://nittartagaq.netlify.app/" className="post-author">{breakingNewsPost.fields?.blogAuthor || 'Unknown Author'}</a>
                        </p>
                        <p className="mb-4">{breakingNewsPost.fields?.blogSummary || 'No summary available'}</p>
                        <button className="button button1 block mb-4 font-bold" onClick={() => handleReadMore(breakingNewsPost.sys.id)}>Læs mere</button>
                    </div>
                    {breakingNewsPost.fields && breakingNewsPost.fields.blogImage && breakingNewsPost.fields.blogImage.fields && breakingNewsPost.fields.publish ? (
                        <img src={breakingNewsPost.fields.blogImage.fields.file.url} className="w-full" alt={breakingNewsPost.fields.blogTitle} />
                    ) : (
                        <img src={TechnicalDifficultiesImage} className="w-full" alt="Technical Difficulties" />
                    )}
                </div>
            )}

            {/* Blog Posts Section */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-8`}>
                {/* Latest News Section */}
                {blogPosts.filter(post => post.sys.id !== breakingNewsPost?.sys.id).map((post, index) => (
                    <div
                        key={post.sys.id}
                        className={`grid-item ${
                            isSmallScreen
                                ? 'col-span-1'
                                : index === 0  ? 'col-span-1 md:col-span-2' : (index >= 1 && index <= 4) || (index >= 7 && index <= 11) ? 'col-span-1' : 'col-span-1 md:col-span-2'
                        }`}
                        style={{ display: 'flex', flexDirection: index === 5 || index === 6 ? 'row' : 'column' }} // Adjust flex direction for index 5 and 6
                    >
                        <div className="bg-white rounded-lg overflow-hidden" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div className="p-4" style={{ flex: 1 }}>
                                <h2 className="text-xl font-semibold mb-2">{post.fields?.blogTitle || 'Unknown Title'}</h2>
                                <p className="text-red-600 mb-2">
                                    {post.fields?.createdDate ? (
                                        new Intl.DateTimeFormat('da-DK', { // Use Danish locale
                                            timeZone: 'Europe/Copenhagen',
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric',
                                        }).format(new Date(post.fields.createdDate))
                                    ) : (
                                        'Unknown Date'
                                    )} -
                                    Af <a href="https://nittartagaq.netlify.app/" className="post-author">{post.fields?.blogAuthor || 'Unknown Author'}</a>
                                </p>
                                <p className="mb-4">{post.fields?.blogSummary || 'No summary available'}</p>
                                <button className="button button1 block mb-4 font-bold" onClick={() => handleReadMore(post.sys.id)}>Læs mere</button>
                            </div>
                            {post.fields && post.fields.blogImage && post.fields.blogImage.fields && post.fields.publish ? (
                                <img src={post.fields.blogImage.fields.file.url} className="w-full" alt={post.fields.blogTitle} style={{ flex: 1 }} />
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
