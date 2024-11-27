# Blog Project with Next.js & Sanity

This repository contains two projects:

1. *Sanity Studio* (`blog-nextjs-sanity`): The backend content management system where blog posts, authors, and categories are managed.
2. *Next.js Blog* (`my-blog`): The frontend that fetches and displays content from Sanity, with SEO optimizations, Tailwind CSS for styling, and TypeScript for type safety.

## Table of Contents

- [Overview](#overview)
- [Project Setup](#project-setup)
  - [Sanity Studio Setup](#sanity-studio-setup)
  - [Next.js Setup](#nextjs-setup)
- [Development](#development)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Overview

This project demonstrates how to create a modern blog site using *Next.js* for the frontend and *Sanity.io* as the backend content management system.

### Features

- **Sanity CMS**: A powerful content management system to manage blog posts, categories, and authors.
- **SEO-Friendly**: The blog is optimized for SEO with the help of Next.js and dynamic content fetching.
- **Tailwind CSS**: For rapid, responsive UI development with utility-first classes.
- **TypeScript**: Strongly typed development for both Sanity and Next.js projects.
- **Server-Side Rendering (SSR)**: Next.js fetches content from Sanity at runtime, ensuring SEO optimization and dynamic updates.
- **App Routes in Next.js**: Organized routing structure for scalability.

---

## Project Setup

Follow the instructions below to get both the *Sanity Studio* and *Next.js* frontend up and running locally.

### 1. Sanity Studio Setup (`blog-nextjs-sanity`)

#### Step 1: Clone the repository
Clone the entire repository and navigate to the `blog-nextjs-sanity` folder:

bash
git clone https://github.com/your-username/blog-nextjs-sanity-and-nextjs.git
cd blog-nextjs-sanity


#### Step 2: Install dependencies
Run the following command to install dependencies:

bash
npm install


#### Step 3: Configure Sanity
Ensure that you have created a Sanity project on https://www.sanity.io/. Use the project ID and dataset name from your Sanity dashboard.

Open the `sanity.ts` file in the `lib` folder and update the `projectId` and `dataset` values.

typescript
const config = {
  projectId: 'your-project-id', // Sanity project ID
  dataset: 'production', // Your dataset name
  apiVersion: '2023-01-01', // Use latest Sanity API version
  useCdn: true, // Enable CDN for production use
};


#### Step 4: Start Sanity Studio
Run the following command to start Sanity Studio:

bash
npm start


This will start the Sanity Studio locally at `http://localhost:3333`. You can use the Sanity Studio to manage blog posts, authors, and categories.

---

### 2. Next.js Setup (`my-blog`)

#### Step 1: Install dependencies
Navigate to the `my-blog` directory:

bash
cd ../my-blog


Install dependencies using npm:

bash
npm install


#### Step 2: Configure Sanity Client
In the `lib/sanity.ts` file, ensure you have updated the Sanity project ID and dataset name as shown above.

#### Step 3: Start Next.js
Run the following command to start the Next.js project locally:

bash
npm run dev


This will start the frontend at `http://localhost:3000`. The site will fetch data from Sanity and display the blog posts with categories and author information.

---

## Development

During development, make sure both the *Sanity Studio* (`blog-nextjs-sanity`) and *Next.js frontend* (`my-blog`) are running simultaneously.

1. Run `npm start` in the `blog-nextjs-sanity` directory to start the Sanity Studio.
2. Run `npm run dev` in the `my-blog` directory to start the Next.js app.

Both should be running on different ports (`3333` for Sanity Studio and `3000` for Next.js frontend).

---

## Deployment

You can deploy both projects easily to the following platforms:

### 1. Sanity Studio
Sanity Studio can be hosted for free on https://www.sanity.io/manage. During setup, you will be prompted to host your Sanity Studio on Sanity’s platform. The free plan offers 1 dataset and 500K API requests per month.

### 2. Next.js Frontend
The Next.js frontend can be deployed on platforms like *Vercel* or *Netlify* for free.

#### Deploy to Vercel:
1. Push the `my-blog` project to GitHub.
2. Go to https://vercel.com and connect your GitHub repository.
3. Vercel will automatically detect that it's a Next.js project and deploy it.

#### Deploy to Netlify:
1. Push the `my-blog` project to GitHub.
2. Go to https://www.netlify.com and connect your GitHub repository.
3. Choose *Next.js* as the framework and deploy.

---

## Technologies Used

- **Next.js**: React framework for building static and dynamic websites with built-in SSR and SSG support.
- **Sanity.io**: Headless CMS for content management.
- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **TypeScript**: For type safety in both the frontend and backend.
- **React**: JavaScript library for building the user interface.
- **Node.js**: JavaScript runtime used to build the Sanity Studio backend.
- **Vercel/Netlify**: Free deployment platforms for the frontend.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.