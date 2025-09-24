# Provident Notary & Support Co. Website

A professional notary services website built with React, featuring a clean design with navy backgrounds and white text.

## 🚀 Features

- **Professional Design**: Clean, modern layout with navy and gold color scheme
- **Mobile Responsive**: Optimized for all devices
- **Contact Form**: Netlify Forms integration for lead generation
- **FAQ Section**: Expandable FAQ to answer common client questions
- **Real Testimonials**: Client reviews and testimonials
- **Service Information**: Detailed service offerings and pricing
- **Business Hours**: Clear contact information and availability

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/BTheCoderr/Provident-Notary-and-Support.git
   cd Provident-Notary-and-Support
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The website will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized files for production.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

1. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login and connect your GitHub account
   - Select this repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `18` (in Environment Variables)

3. **Custom Domain** (Optional)
   - Add your custom domain in Netlify dashboard
   - Configure DNS settings with your domain provider

### Option 2: Vercel

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import this GitHub repository
   - Deploy automatically

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   "homepage": "https://yourusername.github.io/Provident-Notary-and-Support",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📝 Content Customization

### Update Contact Information
- Edit `src/components/Contact.js` for phone numbers, email, hours
- Update business hours and emergency availability

### Modify Services
- Edit `src/components/Services.js` to update service offerings
- Add or remove service categories as needed

### Update FAQ
- Edit `src/components/FAQ.js` to modify questions and answers
- Add new FAQ items in the `faqData` array

### Change Colors/Branding
- Update color variables in CSS files
- Replace logo files in `public/` directory
- Modify `public/favicon.svg` for custom favicon

## 📧 Form Configuration

The contact form uses Netlify Forms. To configure:

1. **Deploy to Netlify** (forms work automatically)
2. **Access form submissions** in Netlify dashboard under "Forms"
3. **Set up email notifications** in Netlify form settings
4. **Add spam protection** with reCAPTCHA if needed

## 🔧 Technical Details

- **Framework**: React 18
- **Styling**: CSS Modules
- **Forms**: Netlify Forms
- **Deployment**: Optimized for static hosting
- **Performance**: Lighthouse score optimized
- **SEO**: Meta tags and semantic HTML

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly navigation
- Optimized images and fonts
- Fast loading times

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Alt text for images
- Clean URL structure
- Fast loading times

## 📞 Support

For technical support or customization requests, contact:
- Email: info@providentnotary.com
- Phone: (555) 123-4567

## 📄 License

This project is proprietary to Provident Notary & Support Co.