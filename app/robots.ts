import { NextResponse } from 'next/server';

export async function GET() {
    const response = NextResponse.json({
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/app/privacy-policy', '/app/not-found'],
            },
        ],
        sitemap: 'https://www.sifoxtech.com/sitemap.ts',
    });

    response.headers.set('Content-Type', 'application/json');
    return response;
}
