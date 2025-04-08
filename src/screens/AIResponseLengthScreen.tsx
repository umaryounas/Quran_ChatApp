import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import Icon from 'react-native-vector-icons/Ionicons';

const AIResponseLengthScreen = () => {
    const navigation = useNavigation();
    const [selectedLength, setSelectedLength] = useState<string | null>(null);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSave = () => {
        // Logic to save the selected response length
        navigation.goBack();
    };

    const lengths = [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
    ];

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                        <Icon name="arrow-back" size={22} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>AI Response Length</Text>
                    <View style={styles.emptyView} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Set AI Response Length</Text>
                    <Text style={styles.subtitle}>Choose your preferred response length</Text>
                    {lengths.map((item) => (
                        <TouchableOpacity
                            key={item.value}
                            style={[styles.option, selectedLength === item.value && styles.selectedOption]}
                            onPress={() => setSelectedLength(item.value)}
                        >
                            <Text style={styles.optionText}>{item.label}</Text>
                            {selectedLength === item.value && <Icon name="checkmark" size={22} color="#FFD700" />}
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.confirmButton} onPress={handleSave}>
                        <Text style={styles.confirmButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GradientBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    emptyView: {
        width: 30,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 10,
    },
    subtitle: {
        color: '#e4e4e7',
        fontSize: 12,
        fontWeight: '400',
        marginVertical: 10,
        fontStyle: 'italic',
    },
    option: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    selectedOption: {
        backgroundColor: '#FFD700',
    },
    optionText: {
        color: '#fafafa',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
    },
    confirmButton: {
        backgroundColor: '#FFD700',
        paddingVertical: 15,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 20,
    },
    confirmButtonText: {
        color: '#0A333A',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AIResponseLengthScreen;