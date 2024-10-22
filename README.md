# CMLabs Frontend Internship Test (Meal Website)

This project is a simple meal application built with HTML, Tailwind CSS, and JavaScript, leveraging Axios to fetch data from the MealDB API. It requirements:
1. List of Categories Page
   - ✅ Berisikan list kategori berdasarkan endpoint List of Categories
   - ✅ Ketika list kategori dipilih, halaman akan redirect menuju halaman Category Detail
   - ✅ Komponen: List kategori dengan gambar

3. Filter Category or Category Detail Page
   - ✅ Parameter → category-name
   - ✅ Berisikan list data meal berdasarkan kategori yang dipilih, endpoint dari Filter Category
   - ✅ Jika data meal dipilih, halaman akan redirect menuju halaman Meals Detail
   - ✅ Komponen: List meal dengan gambar

5. Meal Detail Page
   - ✅ Parameter → meal-id
   - ✅ Tamplikan detail meal berdasarkan list yang dipilih
   - ✅ Endpoint menggunakan Detail Meal
   - ✅ Komponen: Gambar Meal, Judul/Nama Meal, Desksripsi/Tutorial, Recipe, Youtube Embedded

## Prerequisites

- [Node.js](https://nodejs.org/) installed.

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cmlabs-frontend-internship-test
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Build Tailwind CSS**

   ```bash
   npx tailwindcss -i ./src/styles/global.css -o ./src/styles/output.css --watch
   ```

4. **Run the Project**

   ```bash
   npx live-server
   ```

## Project Structure

```bash
/cmlabs-frontend-internship-test
│
├── /src                      # Source files
│   ├── /api                  # API folder using Axios
│   │   └── api.js
│   ├── /components           # Components folder
│   │   │
│   │   └── .js
│   ├── /pages                # HTML pages
│   │   │
│   │   └── .html             
│   │
│   ├── /styles               # Tailwind CSS 
│   │   └── global & output.css
│   │
│   ├── /utils                # Helper functions
│   │   └── helpers.js
│
├── index.html                # Entry point (redirects)
├── tailwind.config.js        
├── package.json              
└── README.md
```

### Thank you for visiting this repo (hope can get the best result)
You can also visit [My Github Profile](https://github.com/elsamrafisptr)       
