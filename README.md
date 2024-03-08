# Multi Step Form Subscription App

## Overview

This project is a subscription app where users can sign up for a service by providing personal information, selecting a plan, choosing add-ons, reviewing a summary, and confirming their subscription.

## Features

- **Personal Information**: Users can enter their name, email address, and phone number.
- **Select Plan**: Users can choose between monthly or yearly billing plans.
- **Add-Ons**: Users can enhance their subscription with optional add-ons.
- **Summary**: Users can review their selected plan, add-ons, and total cost before confirming.
- **Confirmation**: After reviewing their subscription details, users can confirm and complete the subscription process.

## Technologies Used

- **React**: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
- **React Router**: React Router is used for managing navigation within the application.
- **Context API**: The Context API is used for state management to share data between components efficiently.
- **Local Storage**: Local Storage is utilized to persist certain state data across page reloads.
- **ESLint**: ESLint is used for code linting to maintain code quality and consistency.

## Project Structure

```
src/
│
├── components/
│   ├── Personal Info.js
│   ├── Select Plan.js
│   ├── Add-Ons.js
│   ├── Summary.js
│   ├── Thank You.js
│   ├── Error Page.js
│   └── Root Layout.js
│
├── UserContext.js
│
└── App.js
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Professor1345/Multi-Step-Form.git
```

2. Navigate to the project directory:

```bash
cd Multi-Step-Form
```

3. Install dependencies:

```bash
npm install
```

4. Run the application:

```bash
npm start
```

## Usage

1. Visit `http://localhost:3000` in your web browser.
2. Follow the steps to sign up for a subscription.
3. Review your subscription details on the summary page.
4. Confirm your subscription to complete the process.
