import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import AppText from './AppText';
import { Colors } from '../../constant';

type Props = {
    label: string;
    value?: string;
    children?: React.ReactNode;
    labelStyle?: TextStyle | any;
    containerStyle?: ViewStyle;
};

const InfoRow = ({ label, value, children, labelStyle, containerStyle }: Props) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <AppText
                text={label}
                color={Colors.textSecondary}
                fontSize={16}
                style={labelStyle}
            />
            {value ? (
                <AppText text={value} color={Colors.white} fontSize={16} style={{ fontWeight: '500' }} />
            ) : (
                children
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4,
    },
});

export default InfoRow;
