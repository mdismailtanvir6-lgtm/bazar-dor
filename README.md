# বাজার দর (Bazar Dor)

A modern Bangla marketplace price tracker for everyday essentials. The app helps users explore current commodity prices, compare price trends by category, review product details, and manage a personalized user profile with email and social authentication.

Built with Next.js and Tailwind CSS, this project brings a clean, responsive storefront experience to market-price discovery in Bangladesh.

## Product overview

বাজার দর gives users a quick and easy way to:

- Browse essential product categories like rice, oil, vegetables, fish, meat, eggs, and spices
- View price cards with current rates and trend indicators
- Explore product details with market-wise pricing summaries
- Filter and sort products within categories
- Sign up or sign in using email/password and Google/GitHub social login
- Manage a personal profile after authentication

This project is designed for a consumer-facing market intelligence experience, focused on everyday shopping decisions and price transparency.

## Key features

- Responsive marketplace homepage with hero banner and price highlights
- Dynamic product categories and category landing pages
- Product listing views with sort options and pricing summary
- Detailed product pages showing market price comparisons
- User authentication with Better Auth
- MongoDB integration for persistent auth/session data
- Social login support for Google and GitHub
- Interactive profile page and user settings
- Clean Bengali-first UI with modern e-commerce styling

## Tech stack

- Next.js 16
- React 19
- Tailwind CSS
- Better Auth
- MongoDB / MongoDB adapter
- Lucide React icons
- react-fast-marquee
- react-hot-toast

## Project structure

```bash
bazar-dor/
├── public/
│   ├── bazar-hero.png
│   └── logo-icon.png
├── src/
│   ├── app/
│   │   ├── api/auth/[...all]/route.js
│   │   ├── categories/[slug]/page.js
│   │   ├── products/[id]/page.js
│   │   ├── profile/page.js
│   │   ├── sign-in/page.js
│   │   ├── sign-up/page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── auth/
│   │   ├── category/
│   │   ├── index/
│   │   ├── layout/
│   │   ├── product/
│   │   ├── product-details/
│   │   └── user/
│   ├── lib/
│   │   ├── auth.js
│   │   ├── auth-client.js
│   │   └── utils.js
│   └──
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── README.md
```

## Getting started

### Prerequisites

- Node.js 18+ or newer
- pnpm (recommended; this repo already declares `pnpm@12.9.1`)
- MongoDB Atlas or a local MongoDB instance
- Google OAuth client credentials
- GitHub OAuth app credentials

### Install dependencies

```bash
pnpm install
```

### Environment configuration

Create a `.env.local` file in the project root and add the following values:

```bash
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_PUBLIC_URL=http://localhost:3000
BETTER_AUTH_LOCAL_URL=http://localhost:3000

MONGODB_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority

BETTER_AUTH_GOOGLE_CLIENT_ID=your-google-client-id
BETTER_AUTH_GOOGLE_CLIENT_SECRET=your-google-client-secret

BETTER_AUTH_GITHUB_CLIENT_ID=your-github-client-id
BETTER_AUTH_GITHUB_CLIENT_SECRET=your-github-client-secret
```

### Run locally

```bash
pnpm dev
```

Then open:

```bash
http://localhost:3000
```

## Available scripts

```bash
pnpm dev     # start the app in development mode
pnpm build   # create a production build
pnpm start   # run the production server
pnpm lint    # run ESLint checks
```

## How the app works

### Marketplace data

The app fetches product and category information from the Programming Hero Bazaar API, then renders the data in a marketplace-style interface.

### Authentication

The project uses Better Auth with MongoDB adapters to power:

- Email/password sign-up and sign-in
- Social sign-in via Google and GitHub
- Session handling and user profile access

### Product experience

Users can:

- View market prices from the homepage
- Open category pages for specific product groups
- Compare price changes and unit rates
- Navigate to product detail pages for deeper market breakdowns

## Product positioning

This app is best described as a Bangla consumer market intelligence dashboard for everyday price tracking. It is designed for shoppers who want fast access to current price trends without browsing multiple sources or markets.

## Roadmap ideas

- Add search and filter by product name
- Add favorites or saved products
- Add dashboard analytics for price changes over time
- Add admin-managed product data source configuration
- Add dark mode and enhanced mobile UX
- Integrate more local market sources and historical pricing data

## Notes

- The project is mobile-friendly and designed for a simple shopping/market-price experience.
- Some sections and product data are data-driven from external APIs, so network connectivity and API availability affect the content shown.
- For production deployment, secure environment variables and OAuth credentials using a managed secret system.

## License

This project is currently unlicensed unless otherwise specified by the repository owner.

## Contributing

Contributions are welcome. If you want to improve the product experience, UI, auth flow, or data handling:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Open a pull request with a clear summary
