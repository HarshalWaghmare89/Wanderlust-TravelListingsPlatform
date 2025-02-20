# 🌍 Wanderlust - Travel Listings Platform  
  **Wanderlust** is a **feature-rich, interactive**, and **fully responsive website** designed for **travelers** and **hosts** to **explore, list**, and **review accommodations**.

---

### 📖 Table of Contents  
* 🌍 [Overview](#overview)
* 🚀 [Features](#features)  
* 🎨 [Frontend Technologies](#frontend-technologies)  
* 📦 [Backend Tech Stack](#backend-tech-stack)  
* 📌 [Usage](#usage)  
* 🛠️ [API Routes](#api-routes)  
* 🗺️ [Maps Integration](#maps-integration)  
* 🔧 [Local Setup for Developers](#local-setup-for-developers)   
* 👨‍💻 [Developer](#developer)  

---

# Overview

**Wanderlust** is a **fully responsive** travel listing platform with **interactive features & functionality**, inspired by **Airbnb**. Users can **explore, search, and review accommodations, hotels** while enjoying **search & filtering**, **interactive maps**, **user authentication,    authorization**, and **image uploads**.

> 🏡 *Inspired by the concept of Airbnb, this project aims to provide a seamless and user-friendly experience for travelers and hosts.*  

---

# Features

- 🏠 **Listings Management** 
    - Users can create, read, edit, and delete travel listings.

- 🔐 **Authentication & Authorization**
    - Secure login and registration using Passport.js.

- ⭐ **User Reviews & Ratings**
    - Users can review listings with ratings.

- 🖼 **Image Uploads**
   - Cloudinary integration for media storage.

- 🔎 **Advanced Search & Filters**
    - Users can filter by location, Country, and category.

- 🗺 **Interactive Maps**
    - Listings location displayed on an interactive MapLibre map.

- 📱 **Fully Responsive Design**
    - Works seamlessly across all devices.

- ❌ **Error Handling**
    -  Shows a user-friendly error page or message for incorrect or broken links.

- 💬 **Flash Messages**
    - Provides real-time feedback for user actions.

- ⚡ **Session Management**
    - Users remain logged in with secure express-session.

- 🏷 **Dynamic Pricing**
    - Listings update dynamically based on input.

- 🔧 **Server-Side Validation**
    - Ensures data integrity using Joi schema validation.


---


# Frontend Technologies
   
- **HTML5 & CSS3**
    - Modern and structured layout.

- **Bootstrap**
    - Ensures a fully responsive UI.
   
- **EJS (Embedded JavaScript Templates)**
    - Dynamic content rendering.

- **JavaScript (Vanilla)**
    - Enhances interactive elements.

- **MapLibre GL JS**
    - Displays interactive maps with listing location tracking.

---

# Backend Tech Stack

- **Node.js & Express.js**
    - Server-side logic and routing.

- **MongoDB & Mongoose**
    - Database management for listings & users.

- **Passport.js**
    - Handles user authentication and authorization.

- **Cloudinary**
    - Image hosting and management (integrated with multer-storage-cloudinary).

- **Express-Session**
    - Secure session management for logged-in users.

- **Joi**
    - Schema validation for listing and review forms.

- **Connect-Flash**
    - Provides instant feedback messages for user actions.

- **Method-Override**
    -  Enables HTTP verbs like PUT and DELETE from forms.

---

# Usage

-  Users can browse, search, and filter travel listings.

-  Listings location displayed on an interactive map for easy exploration. 

-  Users can interact with listings (add, read, edit, delete, and review).

-  Admins can manage listings and moderate content.

-  Images are uploaded using Cloudinary and stored securely.

-  A "Page Not Found" error appears if an invalid URL is entered.

-  Fully Responsive UI ensures a smooth experience across all devices.

---

# API Routes         

| Method                   |  Route                               | Description                           |
| ------------------------ | ------------------------------------ | ------------------------------------- |
|       **GET**            | /listings                            | View all listings                     |
|       **GET**            | /listings/:id                        | View single listing                   |  
|       **GET**            | /listings/new                        | Show New Form                         |
|       **GET**            | /listings/:id/edit                   | Show Update Form                      |
|       **GET**            | /listings/Search                     | Search listing                        |
|       **GET**            | /listings/category/:filter           | Filter listings by criteria           |
|       **POST**           | /listings                            | Create a new listing                  |
|       **PUT**            | /listings/:id                        | Update a listing                      |
|       **DELETE**         | /listings/:id                        | Delete a listing                      |
|       **POST**           | /listings/:id/reviews                | Add a review                          |
|      **DELETE**          | /listings/:id/reviews/:reviewId      | Delete a review                       |

---

# Maps Integration 

-  MapLibre GL JS is used to display an interactive map.

-  Users can see Marker for listings on a map.

-  Clicking a Marker shows more details about the listing.

-  Zoom in/out Options with directional orientation(compass) for users.

---

# Local Setup for Developers

#### To set up Wanderlust locally, follow these steps:

1. Fork the Repository through github

     ```bash
    git clone <Your Forked Repo>
    ```

2. Install Dependencies

     ```bash
    npm i
    ```

3.  Set Up Environment Variables
     ##### Create a .env file in the root directory and add:

     ```bash
        CLOUD_NAME=your-cloudinary-cloud-name  
        CLOUD_API_KEY=your-cloudinary-api-key  
        CLOUD_API_SECRET=your-cloudinary-api-secret  
    ```

4. Start the Server

     ```bash
    node index.js
    ```

5. Visit the local server

     ```bash
     http://localhost:8080/listings
    ```
---

# Developer

| Developed by             | LinkedIn                                                  |  GitHub                                          |
| -------------------------| ----------------------------------------------------------| -------------------------------------------------|
| **Harshal waghmare**     | [LinkedIn](https://www.linkedin.com/in/harshalwaghmare/)  | [GitHub](https://github.com/harshalWaghmare89)   |






