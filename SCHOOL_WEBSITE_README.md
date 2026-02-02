# St. Xavier's Higher Secondary School Website

A modern, responsive React-based website for St. Xavier's Higher Secondary School, Naroda, Ahmedabad.

## 🏫 School Information

**Name:** St. Xavier's Higher Secondary School, Naroda  
**Gujarati Name:** સેન્ટ ઝેવિયર્સ સ્કુલ  
**Type:** General Education School  
**Address:** Kathwada Rd, Nr. Deepnagar, New India Colony, Vasant Vihar 2, Nava Naroda, Ahmedabad, Gujarat 382330  
**Phone:** 063582 78466  
**Timings:** Opens 7:00 AM (Monday to Saturday), Closed on Sunday  
**Motto:** Character • Excellence

## ✨ Features

- **Home Page:** Beautiful hero section with school introduction and key features
- **About Us:** Detailed information about the school's history, values, and mission
- **Events:** Upcoming and past events with dates, times, and descriptions
- **Gallery:** Category-based photo gallery with clickable categories:
  - Sports Day (12 photos)
  - Annual Day (15 photos)
  - Students in Classrooms (10 photos)
  - Cultural Events (14 photos)
  - Activities (11 photos)
- **Contact Us:** Complete contact information with Google Maps integration and social media links
- **Responsive Design:** Works perfectly on mobile, tablet, and desktop devices
- **Modern UI:** Fresh & vibrant color scheme (Sky Blue + Sunshine Yellow + Mint Green + White)

## 🎨 Design Theme

- **Color Palette:** Sky Blue, Sunshine Yellow, Mint Green, and White
- **Style:** Modern & Clean with card-based layouts
- **Typography:** Inter font family for clean, professional look
- **Layout:** Spacious with lots of white space for easy reading

## 📱 Pages

1. **Home (/)** - Landing page with hero section and school highlights
2. **About Us (/about)** - School story, details, and core values
3. **Events (/events)** - Upcoming and past events
4. **Gallery (/gallery)** - Category-based photo gallery with 5 categories
   - Sports Day (/gallery/sports-day) - 12 photos
   - Annual Day (/gallery/annual-day) - 15 photos
   - Students in Classrooms (/gallery/students-classrooms) - 10 photos
   - Cultural Events (/gallery/cultural-events) - 14 photos
   - Activities (/gallery/activities) - 11 photos
5. **Contact (/contact)** - Contact information and Google Maps

## 🚀 Technology Stack

- **Frontend Framework:** React 19
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS + Custom CSS
- **Icons:** Lucide React
- **Images:** Provided school logo and building images

## 📂 Project Structure

```
/app/frontend/
├── public/
│   ├── logo.jpg          # School logo
│   └── school.jpg        # School building photo
├── src/
│   ├── components/
│   │   ├── Navbar.js     # Navigation component
│   │   └── Footer.js     # Footer component
│   ├── pages/
│   │   ├── Home.js       # Home page
│   │   ├── About.js      # About page
│   │   ├── Events.js     # Events page
│   │   ├── Gallery.js    # Gallery categories page
│   │   ├── Contact.js    # Contact page
│   │   └── gallery/      # Gallery category pages
│   │       ├── SportsDay.js
│   │       ├── AnnualDay.js
│   │       ├── StudentsClassrooms.js
│   │       ├── CulturalEvents.js
│   │       └── Activities.js
│   ├── App.js            # Main app component with routing
│   ├── App.css           # Custom styles
│   ├── index.js          # App entry point
│   └── index.css         # Global styles + Tailwind
└── package.json          # Dependencies
```

## 🔧 Local Development

The website is already running on `http://localhost:3000`

To restart the frontend:
```bash
sudo supervisorctl restart frontend
```

## 📝 Customization Guide

### Update School Images

Replace the placeholder images in `/app/frontend/public/`:
- `logo.jpg` - Already provided
- `school.jpg` - Already provided

### Update Gallery Images

The gallery is organized into categories. To update images:

1. **Main Gallery Page** (`/app/frontend/src/pages/Gallery.js`):
   - Update category cover images (lines 6-31)
   - Change photo counts if needed

2. **Individual Category Pages**:
   - Sports Day: `/app/frontend/src/pages/gallery/SportsDay.js` (12 photos)
   - Annual Day: `/app/frontend/src/pages/gallery/AnnualDay.js` (15 photos)
   - Students in Classrooms: `/app/frontend/src/pages/gallery/StudentsClassrooms.js` (10 photos)
   - Cultural Events: `/app/frontend/src/pages/gallery/CulturalEvents.js` (14 photos)
   - Activities: `/app/frontend/src/pages/gallery/Activities.js` (11 photos)

Replace the Unsplash placeholder URLs with your own image URLs.

### Update Social Media Links

In `/app/frontend/src/components/Footer.js` and `/app/frontend/src/pages/Contact.js`:
- Update Instagram URL (currently: https://www.instagram.com)
- Update Facebook URL (currently: https://www.facebook.com)

### Update Event Information

In `/app/frontend/src/pages/Events.js`:
- Modify the `upcomingEvents` array (lines 6-37) with actual events
- Update the `pastEvents` array (lines 39-52) with past events

### Update Google Maps

In `/app/frontend/src/pages/Contact.js`, the Google Maps iframe (lines 119-128) is already configured for the school location.

## 🎯 Sample Events Included

**Upcoming Events:**
- Annual Day Celebration (March 15, 2025)
- Inter-School Sports Meet (March 22-24, 2025)
- Science Exhibition (April 5, 2025)
- Parent-Teacher Meeting (April 12, 2025)

**Past Events:**
- Republic Day Celebration (January 26, 2025)
- Winter Carnival (January 15, 2025)
- Christmas Celebration (December 24, 2024)

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920x1080)
- Tablet (768px and above)
- Mobile (375px and above)

## 🎨 Color Codes

- **Sky Blue:** #0EA5E9, #0284C7, #0369A1
- **Mint Green:** #2EC78A, #25A073, #4FD69C
- **Sunshine Yellow:** #FACC15, #EAB308
- **White:** #FFFFFF
- **Gray Scale:** Various shades for text and backgrounds

## ✅ Features Checklist

- ✅ Responsive navigation with mobile menu
- ✅ School logo and branding
- ✅ Hero sections on all pages
- ✅ Contact information cards
- ✅ Google Maps integration
- ✅ Social media links (Instagram, Facebook)
- ✅ Event cards with dates and details
- ✅ Photo gallery grid
- ✅ Footer with complete info
- ✅ Smooth hover effects
- ✅ Clean, modern design
- ✅ Fast loading (no heavy animations)

## 🌐 Deployment

This is a static React website that can be easily deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Simply build the project:
```bash
cd /app/frontend
yarn build
```

The `build` folder will contain all static files ready for deployment.

## 📞 Contact Information Displayed

- **Phone:** 063582 78466 (clickable link)
- **Address:** Full address with Plus Code
- **Timings:** Monday-Saturday, 7:00 AM onwards
- **Social Media:** Instagram and Facebook (with placeholder links)

## 🎓 Next Steps

1. Replace placeholder gallery images with actual school photos
2. Update social media links with real URLs
3. Add more events as they are scheduled
4. Consider adding a newsletter signup form
5. Add testimonials from parents/students
6. Create an admissions information page
7. Add downloadable school calendar/syllabus

---

**Built with ❤️ for St. Xavier's Higher Secondary School, Naroda**

*Character • Excellence*
