# Volleyball Rotations Learning App

An interactive Next.js web application for teaching volleyball players the 5-1 rotation system. Features guided walkthroughs, visual diagrams, and interactive drag-and-drop practice quizzes.

## Features

- **Learn Mode**: Comprehensive guides for all 6 rotations with detailed explanations
- **Practice Mode**: Interactive drag-and-drop quizzes with instant feedback
- **Visual Court Diagrams**: Color-coded player positions for easy understanding
- **Complete Glossary**: Searchable reference for all volleyball rotation terms
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd volleyball-rotations
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
volleyball-rotations/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── learn/             # Learning mode pages
│   │   ├── practice/          # Practice mode pages
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── court/            # Court diagram components
│   │   ├── rotation/         # Rotation display components
│   │   ├── practice/         # Practice/quiz components
│   │   ├── navigation/       # Navigation components
│   │   └── ui/               # Base UI components
│   ├── data/                 # Rotation data and glossary
│   │   ├── rotations.ts      # All 6 rotation configurations
│   │   ├── glossary.ts       # Terminology definitions
│   │   └── positions.ts      # Player position information
│   └── lib/                  # Utilities and helpers
│       ├── rotations/        # Rotation types and validators
│       └── utils/            # Coordinate utilities
├── public/                   # Static assets
└── package.json
```

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components

## Building for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
