import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

interface Beverage {
  id: string;
  name: string;
  mg: number;
}

const CAFFEINE_LIMIT = 400;
const WARNING_THRESHOLD = 0.8;

const BEVERAGES: Beverage[] = [
  { id: '1', name: 'Café Espresso', mg: 60 },
  { id: '2', name: 'Café Coado', mg: 90 },
  { id: '3', name: 'Coca-Cola', mg: 34 },
  { id: '4', name: 'Energético', mg: 150 },
];

export default function App() {
  const [totalCaffeine, setTotalCaffeine] = useState<number>(0);

  const addCaffeine = (mg: number) => {
    setTotalCaffeine((prev) => prev + mg);
  };

  const resetCaffeine = () => {
    setTotalCaffeine(0);
  };

  const progress = Math.min(totalCaffeine / CAFFEINE_LIMIT, 1);
  const isWarning = totalCaffeine >= CAFFEINE_LIMIT * WARNING_THRESHOLD;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Caffeine Tracker</Text>

        {/* Progress Section */}
        <View style={styles.progressSection}>
          <Text style={styles.totalText}>
            {totalCaffeine}mg <Text style={styles.limitText}>/ {CAFFEINE_LIMIT}mg</Text>
          </Text>
          <View style={styles.progressBarBackground}>
            <View 
              style={[
                styles.progressBarFill, 
                { 
                  width: `${progress * 100}%`,
                  backgroundColor: isWarning ? '#FF5252' : '#4CAF50'
                }
              ]} 
            />
          </View>
          {isWarning && (
            <Text style={styles.warningText}>Limite de segurança próximo!</Text>
          )}
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonGrid}>
          {BEVERAGES.map((beverage) => (
            <TouchableOpacity 
              key={beverage.id}
              style={styles.beverageButton}
              onPress={() => addCaffeine(beverage.mg)}
            >
              <Text style={styles.beverageName}>{beverage.name}</Text>
              <Text style={styles.beverageMg}>{beverage.mg}mg</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Reset Button */}
        <TouchableOpacity 
          style={styles.resetButton}
          onPress={resetCaffeine}
        >
          <Text style={styles.resetButtonText}>Zerar Contagem</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 48,
    color: '#212529',
  },
  progressSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 48,
  },
  totalText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 12,
  },
  limitText: {
    fontSize: 20,
    color: '#6C757D',
    fontWeight: 'normal',
  },
  progressBarBackground: {
    width: '100%',
    height: 16,
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 8,
  },
  warningText: {
    marginTop: 12,
    color: '#FF5252',
    fontWeight: '600',
    fontSize: 14,
  },
  buttonGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  beverageButton: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  beverageName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 4,
    textAlign: 'center',
  },
  beverageMg: {
    fontSize: 14,
    color: '#ADB5BD',
  },
  resetButton: {
    marginTop: 16,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    backgroundColor: '#DEE2E6',
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
  },
});
