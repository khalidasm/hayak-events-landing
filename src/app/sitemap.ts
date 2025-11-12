import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hayaksa.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'ar']
  const staticPages = ['', '/privacy', '/terms']
  
  const routes: MetadataRoute.Sitemap = []
  
  // Add root URL (default locale)
  routes.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
  })
  
  // Add all locale-specific pages
  staticPages.forEach((page) => {
    locales.forEach((locale) => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            ar: `${baseUrl}/ar${page}`,
          },
        },
      })
    })
  })

  return routes
}

