# Ravi Kumar Rayapalli Portfolio

Personal portfolio website for Ravi Kumar Rayapalli, focused on AI engineering, LLM systems, RAG, agent architectures, and backend platforms. The site is built as a lightweight static frontend with a serverless contact endpoint and is ready to deploy on Vercel's free tier.

## Included in this repo

- Responsive single-page portfolio homepage
- Resume download link backed by `resume/Ravi_Kumar_Rayapalli_Resume.pdf`
- Editable site content in `data/portfolio.json`
- Client-side rendering in `app.js`
- Contact form API in `api/contact.js`

## Main files

- `index.html`: page structure and sections
- `styles.css`: visual design and responsive layout
- `app.js`: renders content from JSON and submits the contact form
- `data/portfolio.json`: portfolio content model
- `api/contact.js`: serverless email handler for contact submissions
- `resume/Ravi_Kumar_Rayapalli_Resume.pdf`: downloadable resume

## Updating content

Most portfolio content lives in `data/portfolio.json`.

- `hero`: name, title, summary, availability, quick stats
- `about`: bio and core stack
- `skills`: grouped technical skills
- `highlights`: top capability summary cards
- `projects`: experience/case-study cards
- `services`: core expertise blocks
- `process`: engineering approach
- `testimonials`: credentials and certifications
- `contact`: intro text and social/contact links

## Contact form setup

The contact form uses the [Resend](https://resend.com/) email API through the Vercel serverless function in `api/contact.js`.

Set these environment variables in Vercel:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `RESEND_FROM_EMAIL` optional, defaults to `Portfolio <onboarding@resend.dev>`

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the GitHub repository into Vercel.
3. Add the required environment variables.
4. Redeploy the project.

After deployment, the site will be live on a free Vercel domain and the contact form will send submissions to your inbox.

## Local preview

You can preview the site locally by serving the project directory with any static server. The frontend is static; the contact API is intended to run on Vercel.
