import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const MeterDetailsScreen = ({ route, navigation }) => {
  const { meter } = route.params;

  const openDirections = () => {
    // This will open Google Maps with directions to the meter location
    // Note: In a real app, you would use the actual coordinates
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(meter.location)}`;
    Linking.openURL(url);
  };

  const markAsVisited = () => {
    // Temporary implementation - we'll add proper state management later
    alert(`Meter ${meter.meterNumber} marked as visited!`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Meter Details</Title>
          <Paragraph>Meter Number: {meter.meterNumber}</Paragraph>
          <Paragraph>Location: {meter.location}</Paragraph>
          <Paragraph>Status: {meter.status}</Paragraph>
        </Card.Content>
      </Card>

      <Button 
        mode="contained" 
        style={styles.button}
        onPress={openDirections}
      >
        Get Directions
      </Button>

      <Button 
        mode="contained" 
        style={styles.button}
        onPress={markAsVisited}
      >
        Mark as Visited
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 20,
  },
  button: {
    margin: 5,
    padding: 5,
  },
});

export default MeterDetailsScreen;