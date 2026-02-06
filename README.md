# �� Script Injection Master Guide

Interactive visual reference guide for implementing tracking scripts across 13+ website platforms.

## �� Overview

This comprehensive guide provides step-by-step instructions for injecting tracking scripts (Google Analytics, Facebook Pixel, etc.) into various website builders and CMS platforms.

## �� Platforms Covered

1. **WordPress** - Plugin and theme methods
2. **Segment** - Analytics hub integration
3. **Shopify** - E-commerce tracking
4. **Wix** - Custom code panel
5. **Squarespace** - Code injection
6. **Webflow** - Designer tools
7. **HubSpot** - Marketing automation
8. **Weebly** - Small business builder
9. **GoDaddy** - Website builder
10. **Duda** - Agency platform
11. **Hostinger** - Web hosting
12. **Custom HTML** - Developer options
13. **And more...**

## �� Features

- ✅ **Interactive Tabs** - Click to navigate between platforms
- ✅ **Visual Path Guides** - Step-by-step navigation indicators
- ✅ **Code Examples** - Ready-to-use tracking scripts
- ✅ **Checklists** - Verify implementation
- ✅ **Pro Tips** - Best practices and warnings
- ✅ **Comparison Table** - Quick platform overview
- ✅ **Responsive Design** - Works on all devices

## �� File Structure

```
script-injection-guide/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## ��️ Installation

1. **Download all files** to the same folder
2. **Open index.html** in your browser
3. That's it! No build process needed.

## �� Usage

### For GitHub Pages:
1. Create a new repository
2. Upload `index.html`, `styles.css`, and `script.js`
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name/`

### For Local Use:
Simply double-click `index.html` to open in your browser.

## �� Customization

### Change Colors
Edit `styles.css` and modify the color variables:
```css
--primary: #6366f1;      /* Main blue color */
--secondary: #8b5cf6;    /* Purple accent */
--success: #10b981;      /* Green badges */
--warning: #f59e0b;      /* Orange alerts */
```

### Add New Platform
1. Add a new tab button in `index.html`
2. Create corresponding tab content section
3. No JavaScript changes needed - it auto-detects!

### Modify Code Examples
Edit the `codes` object in `script.js`:
```javascript
var codes = {
    yourcode: 'Your code snippet here...'
};
```

## �� Platform Comparison

| Platform | Ease of Use | Flexibility | Best For |
|----------|------------|-------------|----------|
| WordPress | ⭐⭐⭐⭐ | High | Blogs, Business |
| Shopify | ⭐⭐⭐⭐ | Medium | E-commerce |
| Wix | ⭐⭐⭐⭐⭐ | Medium | Beginners |
| Hostinger | ⭐⭐⭐⭐ | High | Budget Hosting |

## �� Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **No dependencies** - Everything self-contained
- **Mobile responsive** - Works on all screen sizes
- **Cross-browser compatible** - Chrome, Firefox, Safari, Edge
- **Fast loading** - Minimal file size
- **SEO friendly** - Semantic HTML structure

## �� Code Examples Included

- Google Analytics 4 (GA4)
- Facebook Pixel
- Google Tag Manager (GTM)
- Hotjar Tracking
- Intercom Chat Widget

## ⚠️ Important Notes

1. **Always backup** your site before making changes
2. **Test in staging** environment first
3. **Clear cache** after implementing scripts
4. **Verify with DevTools** (F12) that scripts load correctly
5. **Never publish** without testing

## �� Contributing

Feel free to:
- Add more platforms
- Improve existing instructions
- Fix typos or errors
- Suggest new features

## �� License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## �� Credits

Created with care for developers, marketers, and website owners who need to implement tracking scripts across multiple platforms.

## �� Support

If you encounter any issues:
1. Check the console (F12) for errors
2. Verify all files are in the same folder
3. Make sure JavaScript is enabled in your browser
4. Try a different browser

## �� Version

**Version 1.0** - February 2026

---

**Made with ❤️ for the web development community**

## �� Quick Start Example

```html
<!-- Just add this to your <head> section -->
<script>
  // Your tracking code here
  console.log('Script loaded!');
</script>
```
