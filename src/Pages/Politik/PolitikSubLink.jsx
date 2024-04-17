//PolitikSubLink.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../Static/contentfulClient';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // Import rehypeRaw
import technicalDifficultiesImage from '../../assets/images/technical-difficulties.jpeg'; // Import the image

const PolitikSubLink = () => {
    const { postId } = useParams();
    const [blogPost, setBlogPost] = useState(null);
    const [breaks, setBreaks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Set loading state to true when starting to fetch data
        client
            .getEntries({ content_type: "ingnNyheder", 'fields.slug': postId })
            .then((res) => {
                if (res.items.length > 0) {
                    const entryId = '4xZWlKUavWJHnIvHZPOEc3'; // Update with the correct EntryID
                    const foundPost = res.items.find(item => item.sys.id === entryId);
                    // Check if the 'Publish' field is set to false
                    if (!foundPost.fields.publish) {
                        // If 'false', set blogPost to null to display technical difficulties image
                        setBlogPost(null);
                    } else {
                        setBlogPost(foundPost);
                    }
                } else {
                    setBlogPost(null);
                }
                setLoading(false); // Set loading state to false after fetching data
            })
            .catch((err) => {
                console.log(err);
                setLoading(false); // Set loading state to false in case of error
            });

        // Fetch breaks
        client
            .getEntries({ content_type: "break" }) // Adjust the content type name for breaks
            .then((res) => {
                setBreaks(res.items); // Set the retrieved break items in the state
            })
            .catch((err) => console.log(err));
    }, [postId]);

    return (
        <div className="container mx-auto px-4 max-w-screen-2xl mb-56 mt-20">
            <div className="max-w-xl mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {blogPost !== null && blogPost.fields.publish !== false ? (
                            <div className="bg-white p-4 rounded-lg">
                                {blogPost.fields && blogPost.fields.blogImage && blogPost.fields.blogImage.fields && (
                                    <img src={blogPost.fields.blogImage.fields.file.url} className="w-full mb-4" alt={blogPost.fields.blogTitle} />
                                )}
                                <h2 className="text-xl font-semibold mb-2">{blogPost.fields?.blogTitle || 'Unknown Title'}</h2>
                                <p className="text-red-600 mb-2">
                                    {blogPost.fields?.createdDate ? (
                                        new Intl.DateTimeFormat('da-DK', {
                                            timeZone: 'Europe/Copenhagen',
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric',
                                        }).format(new Date(blogPost.fields.createdDate))
                                    ) : (
                                        'Unknown Date'
                                    )} -
                                    Af <span className="post-author">{blogPost.fields?.blogAuthor || 'Unknown Author'}</span>
                                </p>
                                <div className="post-content">
                                    {/* Use ReactMarkdown with rehypeRaw to render HTML content */}
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {/* Replace newline characters with <br> tags */}
                                        {blogPost.fields?.postContent.replace(/\n/g, '<br>')}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white p-4 rounded-lg">
                                <img src={technicalDifficultiesImage} className="w-full mb-4" alt="Technical Difficulties" />
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Display Breaks */}
            <div className="mt-8">
                <ul>
                    {breaks.map((breakItem) => (
                        <li key={breakItem.sys.id}>{breakItem.fields?.breakTitle || 'Untitled Break'}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PolitikSubLink;
