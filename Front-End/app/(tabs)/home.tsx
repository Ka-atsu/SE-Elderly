import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import BottomComponent from '../Components/bottomC';

const HomeTab = () => {
    console.log("App executed");

    const handleNotifyPress = () => {
        console.log('Notify Others Pressed');
    };

    const handleEmergencyPress = () => {
        console.log('Emergency Pressed');
    };

    return (
        <View style={styles.container}>
            <Text h4 style={styles.header}>Emergency Alert System</Text>
            <Text style={styles.description}>
                Press the button below to notify someone in case of an emergency.
            </Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Notify Others" 
                    onPress={handleNotifyPress} 
                    buttonStyle={styles.circleButton} 
                    titleStyle={{ fontSize: 20 }} 
                    icon={{ name: 'exclamation-circle', type: 'font-awesome', color: 'white', size: 30 }} 
                />
                <Button 
                    title="Emergency" 
                    onPress={handleEmergencyPress} 
                    buttonStyle={[styles.circleButton, styles.emergencyButton]} 
                    titleStyle={{ fontSize: 20 }} 
                    icon={{ name: 'warning', type: 'font-awesome', color: 'white', size: 30 }} 
                />
            </View>
            <BottomComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        backgroundColor: '#f8f9fa',
        padding: 20, 
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        marginBottom: 120,
        textAlign: 'center',
        fontSize: 20,
        color: '#555', 
    },
    buttonContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 20, 
    },
    circleButton: {
        width: 200, 
        height: 200, 
        borderRadius: 100, 
        backgroundColor: '#007bff', 
        justifyContent: 'center',
        alignItems: 'center', 
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, 
        marginBottom: 20, 
    },
    emergencyButton: {
        backgroundColor: 'red', 
    },
});

export default HomeTab;