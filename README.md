# Aponi.ai Website

A modern, responsive website for Aponi.ai - an AI-powered platform that helps CFOs, HR leaders, and private equity firms reduce severance costs, legal exposure, and reputational risk.

## Project Overview

This is a [Next.js](https://nextjs.org) project featuring three distinct page designs that showcase Aponi.ai's capabilities in workforce management and risk assessment.

## Project Structure

```
aponi-ai/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page (Page 1)
│   ├── blog/              
│   │   └── page.tsx       # Blog page (Page 2)
│   ├── more/              
│   │   └── page.tsx       # Additional info page (Page 3)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── public/                # Static assets
├── lib/                   # Utility functions
└── components/            # React components (if any)
```

## Features

- **Three distinct page designs**:
  - Page 1: Professional gradient-based landing page with animated backgrounds
  - Page 2: Modern blog layout with card-based articles and newsletter signup
  - Page 3: Bold, futuristic dark theme with cyberpunk aesthetics

- **Responsive Design**: Fully responsive across all devices
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Contact Forms**: Integrated contact forms on each page
- **Modern UI**: Tailwind CSS for utility-first styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aponi-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page auto-updates as you edit files.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management and effects

## Page Descriptions

### Page 1 (Home) - `/`
- Gradient-based design with animated blob backgrounds
- Hero section with company tagline
- Features grid showcasing AI capabilities
- Statistics display with hover effects
- Integrated contact form with business hours

### Page 2 (Blog) - `/blog`
- Modern blog layout with featured article section
- Card-based article grid with category tags
- Hover effects with animated arrows
- Newsletter subscription section
- Read time indicators and publication dates

### Page 3 (More) - `/more`
- Futuristic dark theme with grid pattern overlay
- Animated feature showcase with rotating highlights
- Bold typography and gradient text effects
- Cyberpunk-inspired design elements
- Contact form with uppercase styling

## Deployment

### Netlify

The site is configured for deployment on Netlify. The `netlify.toml` file contains the necessary configuration.

To deploy:
1. Push your changes to the main branch
2. Netlify will automatically build and deploy

### Vercel

Alternatively, deploy using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

© 2024 Aponi.ai. All rights reserved.
