import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const BottomComponent = () => {
    return (
        <View style={styles.container}>
            <Button 
                title="Settings" 
                onPress={() => console.log('Button Pressed')} 
                buttonStyle={styles.button} 
                titleStyle={styles.buttonTitle} 
                icon={<Icon name="settings" size={20} color="white" />} 
                iconContainerStyle={styles.iconContainer} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        paddingBottom: 20, 
    },
    button: {
        width: 200, 
        height: 60, 
        backgroundColor: '#007bff', 
        borderRadius: 30, 
        shadowColor: '#000', // Shadow for depth
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    buttonTitle: {
        fontSize: 18, 
        fontWeight: 'bold', 
    },
    iconContainer: {
        marginRight: 10, 
    },
});

export default BottomComponent;