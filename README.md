git init
git branch -M main
git add .
git commit -m "Initial commit"
git remote add origin <URL-DO-REPO>
git push -u origin main
gh repo create NOME_DO_REPO --public --source=. --remote=origin --push
The website contains the following content:

- About: Personal presentation and links (CV, GitHub, LinkedIn).
- Experience: Professional experiences and projects/studies.
- Projects: Cards with recent projects and links to repositories on GitHub.
- Contact: Form that sends to Formspree (formspree.io).

Technologies used:

- HTML5
- CSS3 (responsive layout)
- JavaScript (small logic for form submission)

## Repository Structure

- `index.html` — main page.
- `style.css` — website styles.
- `script.js` — script that handles form submission.
- `API Project.png`, `FIM Project.png`, `Keylogger Project.png` — project/profile images (if present).
- `GabrielCV.pdf` — resume for download (if present).

