# 🍽️ My Restaurant Website (React Project)

A modern, responsive restaurant website built using **React**, **React Router**, and **Material UI**.  
This project includes pages for Home, Menu, About, Contact, and a dynamic 404 Page Not Found screen.

---

## 🚀 Live Demo
https://myrestaurantweb.netlify.app/
---
## 📌 Features

- 🏠 Home Page  
- 📖 About Us Page  
- 🍕 Menu Page (with card layout)  
- 📞 Contact Page  
- ❌ 404 Page (PageNotFound component)  
- 🔗 Navigation using React Router  
- 🎨 Styled with CSS + Material UI  
- 📱 Fully responsive design  
---
## 🛠️ Tech Stack

**Frontend**
- React
- React Router DOM
- Material UI (MUI)
- CSS
  
**Build Tools**
- Node.js
- npm / yarn
  
**Deployment**
- Netlify  
- GitHub Pages

## 📂 Project Structure
src/
├── components/
│ ├── layout/
│ │ ├── header.jsx
│ │ ├── footer.jsx
│ │ └── layout.jsx
├── pages/
│ ├── home.jsx
│ ├── menu.jsx
│ ├── about.jsx
│ ├── contact.jsx
│ └── pagenotfound.jsx
├── styles/
│ └── App.css
├── App.js
└── index.js

---
## 🧭 Routing (React Router)

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
</BrowserRouter>

