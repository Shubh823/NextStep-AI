# NextStep AI - Career Development Platform

<p align="center">
  <img src="/public/logo3.png" alt="NextStep AI Logo" width="200" />
</p>

## Overview

NextStep AI is a comprehensive career development platform that leverages artificial intelligence to help professionals advance their careers. The platform offers personalized industry insights, AI-powered resume building, cover letter generation, and interview preparation tools tailored to each user's specific industry and experience level.

## Features

### Industry Insights Dashboard
- Real-time industry analytics including salary ranges, growth rates, and demand levels
- Market outlook and trend analysis
- Personalized skill recommendations based on industry demands
- Visual data representation with interactive charts and bar graphs using Recharts
- Weekly automated updates via Inngest workflows

### AI Resume Builder
- Create ATS-optimized resumes with markdown support using React-MD-Editor
- AI-powered auto-complete content improvement suggestions
- Export to PDF functionality with html2pdf conversion
- Multiple resume sections (experience, education, projects, etc.)
- Real-time preview of formatted resume

### AI Cover Letter Generator
- Generate tailored cover letters based on job descriptions
- Company and role-specific customization
- Professional formatting with markdown support using React-MD-Editor
- Save and manage multiple cover letters

### Interview Preparation
- AI-generated mock interview questions based on industry and skills
- Performance tracking and analytics
- Personalized improvement tips
- Progress monitoring over time

## Tech Stack

- **Frontend**: Next.js 15.5, React 19.1, Shadcn UI components, Recharts for data visualization
- **Backend**: Next.js Server Actions, PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **AI Integration**: Google Generative AI (Gemini 1.5 Flash)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Automation**: Inngest for weekly automated industry insights updates
- **Document Processing**: html2pdf for resume PDF export
- **Text Editing**: React-MD-Editor for resume and cover letter editing

## Live Demo

Explore the live application: [NextStep AI](https://next-step-ai-blush.vercel.app/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- PostgreSQL database
- Google Generative AI API key
- Clerk account for authentication

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/nextstep_ai"
GEMINI_API_KEY="your-gemini-api-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
```

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nextstep-ai.git
cd nextstep-ai

# Install dependencies
npm install

# Set up the database
npx prisma migrate dev

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
├── actions/           # Server actions for API functionality
├── app/               # Next.js app directory
│   ├── (auth)/        # Authentication routes
│   ├── (main)/        # Main application routes
│   └── api/           # API routes
├── components/        # Reusable UI components
├── data/              # Static data files
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
│   ├── inngest/       # Automated workflow configuration
├── prisma/            # Database schema and migrations
└── public/            # Static assets
```

## Key Features Implementation

### Weekly Automated Industry Insights
The application uses Inngest to schedule weekly updates of industry insights:

```

### Interactive Data Visualization
The dashboard uses Recharts to display industry data:


### PDF Resume Export
Resumes can be exported to PDF using html2pdf:


## Database Schema

The application uses the following main models:

- **User**: Stores user profile and preferences
- **Resume**: Stores user's resume content
- **CoverLetter**: Stores generated cover letters
- **Assessment**: Tracks interview practice results
- **IndustryInsight**: Stores industry-specific data

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

## Acknowledgments

- Built with ❤️ by Shubham Patil
- Powered by Google's Generative AI
- UI components from ShadCn UI
