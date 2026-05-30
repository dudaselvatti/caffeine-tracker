## Context

The CaffeineTracker is a simple, single-screen React Native application built with Expo. The goal is to provide a fast and intuitive way to log caffeine intake against a daily limit.

## Goals / Non-Goals

**Goals:**
- Implement a responsive UI with React Native `StyleSheet`.
- Use React hooks (`useState`) for simple and predictable state management.
- Ensure type safety using TypeScript for beverage definitions and state.
- Provide immediate visual feedback via a color-changing progress bar.

**Non-Goals:**
- Persistent storage (AsyncStorage/SQLite) - the count will reset on app reload for this version.
- User accounts or authentication.
- Detailed consumption history or charts.
- Custom beverage entry.

## Decisions

### 1. State Management with `useState`
- **Decision**: Use a single numeric state for `totalCaffeine`.
- **Rationale**: Given the simplicity of the app (single screen, one primary value), a full state management library like Redux or Zustand is unnecessary. React's built-in `useState` is sufficient and reduces complexity.
- **Alternative**: `useReducer` was considered but rejected as there is only one primary action (adding a fixed amount).

### 2. Beverage Definitions
- **Decision**: Define beverages as a constant array of objects with `id`, `name`, and `mg`.
- **Rationale**: This allows for easy iteration to render buttons and ensures consistency in the data model.
- **Alternative**: Hardcoding buttons in JSX was rejected to maintain cleaner code and easier future updates.

### 3. Styling and Responsiveness
- **Decision**: Use `StyleSheet` with percentage-based widths for the progress bar and Flexbox for layout.
- **Rationale**: Standard React Native approach that ensures basic responsiveness across different mobile device sizes.

### 4. Visual Warning Logic
- **Decision**: Derived state logic within the component to determine the progress bar color.
- **Rationale**: Keeps the rendering logic simple and reactive to state changes without needing extra effects.

## Risks / Trade-offs

- **[Risk] Data Loss on Reload** → **Mitigation**: Acknowledged as a non-goal for this initial prototype. Future iterations can add `AsyncStorage`.
- **[Trade-off] Simple UI** → **Mitigation**: Focus on high-contrast visuals and large touch targets to ensure usability despite minimal features.
