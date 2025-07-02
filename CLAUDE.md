# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for Superstruct, a consultancy that builds in-house engineering teams for tech startups. The site is built using Harp.js, a static site generator that compiles Jade templates and Sass stylesheets.

## Development Commands

### Local Development
```bash
npm start
# Starts the Harp development server on port 3000
# Uses: harp server public -p 3000
```

### Build
```bash
npm run build  
# Compiles the site from public/ to dist/
# Uses: harp compile public dist
```

### Dependencies
```bash
npm install
# Install dependencies (harp and serve)
```

## Architecture & Structure

### Template Engine: Harp.js
- **Jade Templates**: Main content files use `.jade` extension (Pug syntax)  
- **EJS Layouts**: Layout files use `.ejs` extension for HTML structure
- **Sass Stylesheets**: CSS is written in Sass/SCSS in `public/assets/sass/`
- **Static Compilation**: Harp compiles everything to static HTML/CSS/JS

### Key Directories
- `public/` - Source files (templates, styles, images, content)
- `dist/` - Compiled static site output
- `public/_partials/` - Reusable template components
- `public/_mixins/` - Jade mixins for common elements
- `public/assets/` - Stylesheets, JavaScript, images
- `public/blog/` - Blog posts in Markdown with EJS layouts

### Template System
- **Main Layout**: `public/_layout.ejs` - Base HTML structure
- **Page Templates**: Individual `.jade` files for each page
- **Partials**: Reusable components in `_partials/shared/`
- **Mixins**: Jade mixins in `_mixins/` (section.jade, book-call.jade, email-capture.jade)

### Styling Architecture
- **HTML5 UP Theme**: Based on "Paradigm Shift" template
- **Sass Structure**: Organized into base/, components/, layout/, libs/
- **Responsive Design**: Breakpoint-based responsive design
- **Font Integration**: Google Fonts (Source Sans Pro, Raleway) and FontAwesome

### Content Strategy
- **Business Focus**: Consulting services for tech startup engineering teams
- **Service Pages**: Hit Squad, Team Machine, Advisory Retainer
- **Blog Content**: Technical leadership content (e.g., deep work article)
- **Lead Generation**: Multiple CTAs and contact forms throughout

### Deployment
- **Netlify Hosting**: Uses `netlify.toml` for configuration
- **Redirects**: Root redirects to `/dfy-event-recruiting` (configured in netlify.toml)
- **Static Assets**: All compiled to `dist/` directory

## Development Notes

- Node.js version 12 specified in engines
- No linting or testing setup currently configured
- Content can be authored in Jade, EJS, or Markdown depending on the file type
- Images and assets are served directly from `public/` structure
- The site focuses on lead generation and showcasing David Guttman's expertise in engineering team building

## Content Management

- Blog posts use Markdown with EJS layouts in `public/blog/`
- Service pages use Jade templates with mixins for consistent styling
- Content updates require rebuilding and redeploying the static site
- Images and PDFs are stored in `public/images/` and `public/downloads/`