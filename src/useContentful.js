// useContentful.js
import { createClient } from 'contentful';

const useContentful = () => {
    const client = createClient({
        space: import.meta.env.VITE_PUBLIC_SPACE_ID,
        accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
        host: "preview.contentful.com"
    });

    const getGalleries = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "INGN-Nyheder",
                select: "fields",
            });

            const sanitizedEntries = entries.items.map((item) => {
                const fields = item.fields;
                const image = fields.image ? fields.image.fields : null; 
                return {
                    ...fields,
                    image
                };
            });

            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching galleries:", error);
            return []; // Return an empty array in case of error
        }
    };

    return { getGalleries };
};

export default useContentful;