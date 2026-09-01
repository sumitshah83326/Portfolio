# Sumit Shah Portfolio

Next.js + Tailwind CSS portfolio for Sumit Shah — Computer Science Engineering student at
KIIT University, full-stack developer, and competitive programmer.

## Structure

- `app/page.js` - main page
- `app/layout.js` - metadata and root layout
- `app/globals.css` - global styles
- `components/` - each portfolio section
- `public/assets/` - images and resume

## Run

```bash
npm install
npm run dev
```

Then open:

http://localhost:3000

## Edit your content

The main editable sections are:

- `components/Hero.js`
- `components/About.js`
- `components/Experience.js`
- `components/Projects.js`
- `components/Skills.js`
- `components/Achievements.js`
- `components/Contact.js`

## Images

Place your own files in `public/assets/`:

- profile.jpg
- project1.jpg
- project2.jpg
- project3.jpg
- resume.pdf

## Contact form

The contact form uses `mailto:` and opens the visitor's email client, addressed to
sumitshah83840@gmail.com. Change the destination email in `components/Contact.js` if required.
