import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  // Temporary mock data - we'll replace this with real data later
  const meters = [
    { id: '1', location: 'Main Street', meterNumber: 'ECG12345', status: 'Pending' },
    { id: '2', location: 'Market Square', meterNumber: 'ECG12346', status: 'Pending' },
    { id: '3', location: 'Central Park', meterNumber: 'ECG12347', status: 'Pending' },
  ];

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Your Assigned Meters</Title>
      <FlatList
        data={meters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card 
            style={styles.card}
            onPress={() => navigation.navigate('MeterDetails', { meter: item })}
          >
            <Card.Content>
              <Title>{item.meterNumber}</Title>
              <Paragraph>{item.location}</Paragraph>
              <Paragraph>Status: {item.status}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    margin: 5,
  },
});

export default HomeScreen;