import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.sifoxtech.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.sifoxtech.com/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.sifoxtech.com/products/en/b2b-data-voice-sms-gifting',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/en/b2b-voice-and-data-distribution-reselling',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/en/b2b-resource-management-platform',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/en/b2b-reverse-billing',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/en/b2c-airtime-credit',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // {
        //     url: 'https://www.sifoxtech.com/products/en/b2c-content-services',
        //     lastModified: new Date(),
        //     changeFrequency: 'monthly',
        //     priority: 0.7,
        // },
        {
            url: 'https://www.sifoxtech.com/products/en/b2c-buy-for-me',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/en/b2c-data-voice-cost-sharing',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/en/b2c-data-sharing',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/en/b2c-reverse_call',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // {
        //     url: 'https://www.sifoxtech.com/products/fr/b2b-data-sponsorship-or-gifting',
        //     lastModified: new Date(),
        //     changeFrequency: 'monthly',
        //     priority: 0.7,
        // },
        {
            url: 'https://www.sifoxtech.com/products/fr/b2b-voice-and-data-distribution-reselling',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/fr/b2b-resource-management-platform',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/fr/b2b-reverse-billing',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/fr/b2c-airtime-credit',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // {
        //     url: 'https://www.sifoxtech.com/products/fr/b2c-content-services',
        //     lastModified: new Date(),
        //     changeFrequency: 'monthly',
        //     priority: 0.7,
        // },
        {
            url: 'https://www.sifoxtech.com/products/fr/b2b-data-voice-sms-gifting',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/fr/b2c-data-voice-cost-sharing',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/fr/b2c-data-sharing',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/products/fr/b2c-reverse_call',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.sifoxtech.com/not-found',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.1,
        },
    ];
}
