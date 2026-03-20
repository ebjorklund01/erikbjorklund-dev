# erikbjorklund.dev

Personal portfolio site for Erik Bjorklund. Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

**Live site:** https://erikbjorklund.dev

## Development

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build + type check
npm run lint     # ESLint
```

## Hosting

### Vercel

The site is deployed on [Vercel](https://vercel.com) under the `ebjorklund01` account. Every push to `main` triggers an automatic production deployment — no manual steps needed.

- **Project dashboard:** https://vercel.com/ebjorklund01s-projects/erikbjorklund-dev
- **Analytics:** Vercel Analytics is enabled via the `@vercel/analytics` package, visible in the Vercel dashboard

### Domain & DNS

The domain `erikbjorklund.dev` is registered through **Cloudflare**, which also manages DNS.

| Record | Type | Name | Value |
|--------|------|------|-------|
| Apex domain | A | @ | 216.198.79.1 |

The Cloudflare proxy is **disabled** (grey cloud) on this record — Vercel requires direct DNS resolution to provision and renew SSL certificates automatically.

SSL is handled by Vercel via Let's Encrypt and renews automatically.

### Search

- **Google Search Console:** site is verified and sitemap submitted at `https://erikbjorklund.dev/sitemap.xml`
- `robots.txt` is generated at `https://erikbjorklund.dev/robots.txt`
