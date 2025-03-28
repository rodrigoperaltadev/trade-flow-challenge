# React Native Trade-Flow App

A modern trading application built with React Native, featuring a feature-based architecture for optimal scalability and maintainability.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- iOS Simulator (for Mac users) or Android Studio (for Android development)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rodrigoperaltadev/trade-flow-challenge.git
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Run on your preferred platform:

- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app for physical device

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Test Structure

The project follows a unit testing strategy:

- Component tests using React Native Testing Library
- Hook tests for custom hooks
- Utility function tests

Tests are located alongside their respective components in a `__tests__` directory, following the principle of colocation.

## 🏗️ Architecture

### Feature-Based Architecture

This project adopts a feature-based architecture, organizing code around business features rather than technical concerns. Here's why this approach was chosen:

#### Benefits

1. **Scalability**

   - Easy to add new features without affecting existing ones
   - Clear boundaries between different parts of the application
   - Reduced risk of regression when modifying features

2. **Maintainability**

   - Each feature is self-contained with its own components, hooks, and tests
   - Easier to understand and modify specific features
   - Better code organization and reduced cognitive load

3. **Team Collaboration**

   - Different teams can work on different features simultaneously
   - Clear ownership of code
   - Reduced merge conflicts

4. **Code Reusability**
   - Shared components and utilities are easily accessible
   - Common patterns are enforced across features
   - Reduced code duplication

### Project Structure

```
src/
├── components/         # Shared components
├── features/          # Feature-based modules
│   ├── instruments/   # Instruments feature
│   ├── portfolio/     # Portfolio feature
│   └── search/        # Search feature
├── layouts/           # Layout components
├── theme/             # Theme configuration
└── utils/             # Utility functions
```

## 🛠️ Built With

- React Native
- TypeScript
- Expo
- Jest & React Native Testing Library
- i18next for internationalization
- React Navigation

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
