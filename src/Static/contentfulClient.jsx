import { createClient } from "contentful";

export const client = createClient({
  space: import.meta.env.VITE_PUBLIC_SPACE_ID,
  accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
  host: "preview.contentful.com"
});
