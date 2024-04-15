// //Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../../Static/contentfulClient';
import entryIdMapping from "../../Static/entryIdMapping";

const Home = ({ setSelectedPost }) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [breakingNewsTitle, setBreakingNewsTitle] = useState('No Breaking News');

    useEffect(() => {
        client
            .getEntries({ content_type: "ingnNyheder" }) // Use the correct content type name
            .then((res) => {
                setBlogPosts(res.items); // Set the retrieved items in the state
                // Set breaking news title
                if (res.items.length > 0) {
                    setBreakingNewsTitle(res.items[0].fields?.blogTitle || 'No Breaking News');
                }
            })
            .catch((err) => console.log(err));

        // Check if screen size is small
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize); // Add event listener for resize

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleReadMore = (postId) => {
        const route = entryIdMapping[postId];
        if (route) {
            window.location.href = route;
        } else {
            console.error("Route not found for post:", postId);
        }
    };

    return (
        <div className="container mx-auto px-4 max-w-screen-2xl mb-12">
            {/* Breaking News Section */}
            <div id="breaking-news-container" className={`relative overflow-hidden ${isSmallScreen ? 'max-w-00px' : ''}`}>
                <div id="breaking-news-colour" className="slideup animated w-full bg-blue-500"></div>
                <span className="breaking-news-title delay-animated slidein absolute top-0 left-0 text-xs font-bold px-2 py-1">// BREAKING //</span>
                <div className="breaking-news-headline delay-animated2 fadein marquee absolute block font-medium text-white text-xs mt-8 ml-20">
                    <h2 className="text-xl font-medium text-center">{breakingNewsTitle}</h2>
                </div>
            </div>

            {/* Blog Posts Section */}
            <div className={`grid ${isSmallScreen ? 'grid-cols-1' : 'grid-cols-6'} gap-4 mt-8 ${isSmallScreen ? 'justify-start' : ''}`}>
                {blogPosts.map((post, index) => (
                    <div
                        key={post.sys.id}
                        className={`grid-item ${
                            isSmallScreen
                                ? 'col-span-1'
                                : index === 0
                                    ? 'col-span-6 row-span-2'
                                    : index >= 1 && index <= 2
                                        ? 'col-span-3 row-span-2'
                                        : index >= 3 && index <= 4
                                            ? 'col-span-3 row-span-2'
                                            : index >= 5 && index <= 6
                                                ? 'col-span-3 row-span-2'
                                                : index >= 7 && index <= 8
                                                    ? 'col-span-3 row-span-2'
                                                    : ''
                        }`}
                        style={{ maxWidth: isSmallScreen ? '300px' : 'none' }} // Set max-width to 400px when isSmallScreen is true
                    >
                        <div className="bg-white rounded-lg overflow-hidden">
                            <div className="p-4">
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
                            {post.fields && post.fields.blogImage && post.fields.blogImage.fields && (
                                <img src={post.fields.blogImage.fields.file.url} className="w-full" alt={post.fields.blogTitle} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

