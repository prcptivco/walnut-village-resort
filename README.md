# Walnut Village Resort 

A premium, interactive web presence for Walnut Village Resort in Movera, Pahalgam, Kashmir. This repository contains a production-ready application focused on elegant design, seamless animations, and structured dynamic routing.

## Technology Stack
- **Framework:** Next.js 16+ (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (Transitions) & Lenis (Smooth Scroll)
- **Icons:** `lucide-react`
- **Fonts:** Playfair Display (Serif), Inter (Sans-Serif), Space Grotesk (Developer Credits)

## Project Architecture & Data Management

To ensure maintainability, content is decoupled from the UI components and centralized into data files. You do not need to hunt through React code to update text or prices.

### 1. General Property Data (`app/data/hotel.js`)
This is the single source of truth for:
- Resort contact information, description, and tagline.
- Dynamic lists like `amenities` and `testimonials`.
- Booking partner affiliate links (`booking_com`, `vio_com`) and direct booking action routing.
- Website `gallery` images array.

### 2. Room & Tariff Data (`tarrif.json`)
This handles the heavy lifting for the dynamic room accommodations:
- Stores room types, max capacity, bed setups, specific room features, and dynamic pricing models based on meal plans (EPI, CPAI, MAPAI, APAI).
- **Adding Rooms:** If you add a room object to this array, the website will *automatically* build the individual page, routing, and SEO tags for it.

## Updating Images
Images are stored locally within the `/public` root folder so they can be securely and instantly served by Next.js.
- **Hero & Global:** Modify `public/logo.png`, `favicon.png`, etc., as needed.
- **Gallery:** Drop images in `public/images/gallery/` and then link them under the `gallery` array in `hotel.js`.
- **Rooms:** Drop images in `public/images/rooms/{room-name}/` and link them under the specific `images` array for that room inside `tarrif.json`.

## SEO & Accessibility
- **Static Assets:** The app executes raw generation of `sitemap.xml` and `robots.txt` dynamically at build time (review `app/sitemap.js`).
- **Dynamic SEO:** `generateMetadata` functions map titles, descriptions, and OpenGraph (social media preview images) perfectly to each respective route or nested dynamic room route.

## Standard Development Scripts

Install dependency packages:
```bash
npm install
```

Launch the local development environment:
```bash
npm run dev
```

Create an optimized server build for deployment:
```bash
npm run build
npm start
```
