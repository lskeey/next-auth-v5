<div align="center">
  <h1>🛡️ NEXT-AUTH-V5</h1>
  <p>Seamless Security, Limitless Possibilities</p>

  <p>
    <img src="https://img.shields.io/github/last-commit/lskeey/next-auth-v5?style=flat-square&color=black" alt="Last Commit">
    <img src="https://img.shields.io/badge/typescript-97.6%25-blue?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript Percentage">
    <img src="https://img.shields.io/github/languages/count/lskeey/next-auth-v5?style=flat-square&color=black" alt="Languages Count">
  </p>

  <p align="center">
    <img src="/images/auth_login.png" alt="Login Page" width="600" />
  </p>

  <p>Built with the tools and technologies:</p>

  <p>
    <img src="https://img.shields.io/badge/json-white?style=flat-square&logo=json&logoColor=black" alt="JSON">
    <img src="https://img.shields.io/badge/markdown-black?style=flat-square&logo=markdown&logoColor=white" alt="Markdown">
    <img src="https://img.shields.io/badge/resend-black?style=flat-square&logo=resend&logoColor=white" alt="Resend">
    <img src="https://img.shields.io/badge/npm-E32230?style=flat-square&logo=npm&logoColor=white" alt="NPM">
    <img src="https://img.shields.io/badge/postcss-black?style=flat-square&logo=postcss&logoColor=white" alt="PostCSS">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/prisma-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma">
    <img src="https://img.shields.io/badge/zod-3E67A3?style=flat-square&logo=zod&logoColor=white" alt="Zod">
    <img src="https://img.shields.io/badge/eslint-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint">
    <img src="https://img.shields.io/badge/react%20hook%20form-EC5990?style=flat-square&logo=reacthookform&logoColor=white" alt="React Hook Form">
  </p>
</div>

This project is a robust, full-featured authentication system built with Next.js App Router and Next-Auth v5. It provides a modern, secure, and highly customizable foundation for your web applications, handling everything from user registration to multi-factor authentication.

## ✨ Key Features

-   **Credentials & Social Authentication**: Secure login via email and password, or seamlessly with Google and GitHub OAuth providers.
-   **Email Verification**: A streamlined process to confirm new user accounts through email, enhancing security and preventing spam.
-   **Password Reset**: Built-in functionality for users to securely reset their forgotten passwords.
-   **Two-Factor Authentication (2FA)**: An extra layer of security with two-factor authentication, using an OTP sent to the user's email.
-   **Role-Based Access Control**: Protect your routes and server actions based on user roles (Admin/User), ensuring proper authorization throughout your application.
-   **Client & Server Component Protection**: Middleware protects routes from unauthorized access, both on the client and server sides.
-   **Modern UI**: Beautiful and responsive design, crafted using **Shadcn/UI** and **Tailwind CSS**.


## 🚀 Getting Started

Follow these simple steps to get the project up and running on your local machine.

### Prerequisites

-   Node.js (>= 18.17.0)
-   PostgreSQL or another supported database for Prisma
-   A **Resend** API key for sending emails.
-   **Google** and **GitHub** OAuth client IDs and secrets for social logins.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone [repository-url]
    cd next-auth-v5
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables**:
    Create a `.env` file at the root of the project and copy the contents from `.env.example`. Replace the placeholder values with your own keys.
    ```env
    # Prisma connection string
    DATABASE_URL=

    # Next-Auth secret
    AUTH_SECRET=

    # OAuth providers
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    GITHUB_CLIENT_ID=
    GITHUB_CLIENT_SECRET=

    # Resend API key for emails
    RESEND_API_KEY=
    ```

4.  **Database Setup**:
    Initialize and migrate your database using Prisma.
    ```bash
    npx prisma migrate dev
    ```

5.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.


## 📂 Project Structure

-   `actions/`: Server actions for handling authentication logic (e.g., login, register, reset).
-   `app/`: Next.js App Router for all pages and API routes.
-   `components/`: Reusable UI components including form wrappers, buttons, and user information displays.
-   `data/`: Data access layer for interacting with the database using Prisma.
-   `hooks/`: Custom React hooks for client-side state management, like fetching the current user or role.
-   `lib/`: Core utility functions, including database connection, authentication helpers, and mailer setup.
-   `prisma/`: Prisma schema and database configuration.
-   `schemas/`: Zod schemas for form validation.


## 🤝 Contribution

Contributions are welcome! If you'd like to improve this project, please feel free to open an issue or submit a pull request.


## 📄 License

This project is licensed under the MIT License.