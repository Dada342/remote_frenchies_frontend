import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from '@rneui/themed';

const CustomCheckBox = ({ checked, onPress, label, containerStyle, labelStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <CheckBox
                checked={checked}
                onPress={onPress}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor="#49B48C"
            />
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    label: {
        fontSize: 16,
    },
});

export default CustomCheckBox;