## ADDED Requirements

### Requirement: Daily Caffeine Consumption Tracking
The system SHALL maintain a running total of caffeine consumed during the current session.

#### Scenario: Initial State
- **WHEN** the application starts
- **THEN** the total caffeine consumption MUST be 0mg

### Requirement: Beverage Selection Buttons
The system SHALL provide four buttons to add specific amounts of caffeine to the daily total.

#### Scenario: Adding Espresso
- **WHEN** the user taps 'Café Espresso (60mg)'
- **THEN** 60mg MUST be added to the current total

#### Scenario: Adding Brewed Coffee
- **WHEN** the user taps 'Café Coado (90mg)'
- **THEN** 90mg MUST be added to the current total

#### Scenario: Adding Coca-Cola
- **WHEN** the user taps 'Coca-Cola (34mg)'
- **THEN** 34mg MUST be added to the current total

#### Scenario: Adding Energy Drink
- **WHEN** the user taps 'Energético (150mg)'
- **THEN** 150mg MUST be added to the current total

### Requirement: Visual Progress Bar
The system SHALL display a visual progress bar representing the current caffeine intake relative to the 400mg limit.

#### Scenario: Progress Indication
- **WHEN** the caffeine total increases
- **THEN** the progress bar MUST update its width to reflect (current / 400) * 100 percent

### Requirement: Warning Threshold Visuals
The system SHALL change the progress bar color to red when consumption reaches or exceeds 80% of the limit (320mg).

#### Scenario: Reaching Warning Threshold
- **WHEN** the caffeine total is 320mg or higher
- **THEN** the progress bar color MUST be red

#### Scenario: Below Warning Threshold
- **WHEN** the caffeine total is less than 320mg
- **THEN** the progress bar color MUST NOT be red (e.g., blue or green)

### Requirement: Reset Consumption Count
The system SHALL provide a mechanism to reset the daily caffeine total to zero.

#### Scenario: Resetting Count
- **WHEN** the user taps 'Zerar Contagem'
- **THEN** the total caffeine consumption MUST return to 0mg
