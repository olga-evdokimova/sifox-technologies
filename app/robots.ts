import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/not-found", "/privacy-policy"],
            },
        ],
        sitemap: "https://www.sifoxtech.com/sitemap.ts",
    };
}
