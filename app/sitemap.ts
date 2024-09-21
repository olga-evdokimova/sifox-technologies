import { NextResponse } from 'next/server';

export async function GET() {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
    <url>
      <loc>https://www.sifoxtech.com/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
      <loc>https://www.sifoxtech.com/privacy-policy</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
      <loc>https://www.sifoxtech.com/products/en/1</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
      <loc>https://www.sifoxtech.com/products/fr/1</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
      <loc>https://www.sifoxtech.com/not-found</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  </urlset>`;

    const response = NextResponse.json(sitemap);
    response.headers.set('Content-Type', 'application/xml');
    return response;
}
