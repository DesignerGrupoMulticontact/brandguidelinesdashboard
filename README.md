# MyFormula Brand Guidelines

This is the official digital brand guidelines dashboard for MyFormula, built with Next.js and Tailwind CSS.

## Getting Started

Follow these instructions to set up and run the project locally.

### 1. Install Dependencies

Install the required packages using npm:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory of the project. You can copy the example file:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and add your Gemini API key:

```env
GEMINI_API_KEY=your_api_key_here
```

### 3. Run the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for static export (`output: 'export'` in `next.config.js`).

To build for production:

```bash
npm run build
```

The static assets will be generated in the `out` directory, ready for deployment on Netlify, Vercel, or any static hosting service.
