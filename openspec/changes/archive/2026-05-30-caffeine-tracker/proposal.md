## Why

The CaffeineTracker app aims to help users monitor their daily caffeine intake to ensure they do not exceed the recommended safety limit of 400mg. Excess caffeine can lead to various health issues, and a simple, visual tracking tool provides an easy way for users to stay within safe boundaries.

## What Changes

- **Daily Intake Display**: A prominent display showing the current caffeine intake relative to the 400mg limit.
- **Visual Progress Bar**: A progress bar that visually represents consumption, turning red when 80% (320mg) of the limit is reached.
- **Beverage Presets**: Four quick-add buttons for common caffeinated drinks:
    - Café Espresso (60mg)
    - Café Coado (90mg)
    - Coca-Cola (34mg)
    - Energético (150mg)
- **Reset Functionality**: A "Zerar Contagem" (Reset Count) button to clear the daily total.
- **Technical Foundation**: Implementation using React Native with Expo, utilizing TypeScript for strict beverage state management and `useState` for state control.

## Capabilities

### New Capabilities
- `caffeine-tracking`: Manages the state and logic for tracking caffeine consumption, including adding beverages, calculating progress, and resetting the count.

### Modified Capabilities
- None

## Impact

- **Frontend**: Creation of a single-screen interface in `App.tsx`.
- **State Management**: Introduction of local state hooks to manage caffeine totals and beverage history.
- **Styling**: Implementation of responsive design using `StyleSheet`.
