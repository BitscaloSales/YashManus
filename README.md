# YashSphere AI - Cloud Contact Center Solutions Website

A modern, responsive website for YashSphere AI, showcasing cloud contact center solutions with Amazon Connect and Microsoft Dynamics 365 Contact Center.

## 🚀 Features

- **Modern Design**: Professional SaaS-style design with blue/teal color palette
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Semantic HTML structure and SEO-friendly content
- **Contact Forms**: Functional contact forms with email integration
- **8 Complete Pages**: Homepage, product pages, pricing, about, resources, contact, and more

## 📋 Pages Included

1. **Homepage** - Hero section, product overview, business outcomes
2. **Amazon Connect** - Detailed product page with pricing and features
3. **Microsoft Dynamics 365** - Complete product information and benefits
4. **Migrations** - 5-step migration process and planning tools
5. **Pricing** - Transparent pricing tiers starting from $2.5K
6. **About** - Company information, team, and values
7. **Resources** - Blog with 6 SEO-optimized articles
8. **Contact** - Multiple contact methods and functional forms

## 🛠️ Tech Stack

- **React 18** - Modern JavaScript framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality component library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd yashsphere-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🚀 Deployment

### Netlify (Recommended)

1. **Automatic Deployment**:
   - Connect your GitHub repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Manual Deployment**:
   - Run `npm run build`
   - Upload the `dist` folder to Netlify

### Other Platforms
- **Vercel**: Works out of the box with GitHub integration
- **GitHub Pages**: Requires additional configuration for SPA routing
- **AWS S3 + CloudFront**: Upload dist folder to S3 bucket

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Contact.jsx     # Contact page
│   ├── Pricing.jsx     # Pricing page
│   └── ...            # Other pages
├── assets/             # Images and static assets
├── App.jsx             # Main app component
└── main.jsx           # Entry point
```

## 🎨 Customization

### Colors
The website uses a blue/teal color palette defined in Tailwind CSS:
- Primary: Blue tones
- Secondary: Teal accents
- Warm accents: Orange/yellow for highlights

### Logo
Replace `src/assets/yashsphere-logo.png` with your own logo file.

### Content
All content is easily editable in the respective page components under `src/pages/`.

### Contact Information
Update contact details in:
- `src/pages/Contact.jsx`
- `src/components/Footer.jsx`

## 📧 Contact Forms

Forms are configured to use `mailto:` links that open the user's email client with pre-populated information sent to `Bitscalo_Sales@outlook.com`.

To upgrade to server-side form handling, consider:
- Netlify Forms (built-in with Netlify)
- Formspree
- EmailJS
- Custom backend API

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for YashSphere AI.

## 📞 Support

For technical support or questions:
- Email: Bitscalo_Sales@outlook.com
- Phone: +91-9306410903

---

**Built with ❤️ for YashSphere AI**

