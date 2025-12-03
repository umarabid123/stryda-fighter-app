import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
} from 'react-native';
import Header from '../components/common/Header';
import AppText from '../components/common/AppText';
import AppButton from '../components/common/AppButton';
import InfoRow from '../components/common/InfoRow';
import NextFightCard from '../components/NextFightCard';
import { Colors } from '../constant';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Tag = ({ text, icon }: { text: string; icon?: any }) => (
    <View style={styles.tag}>
        <AppText text={text} fontSize={14} color={Colors.white} />
        {icon && <Image source={icon} style={styles.tagIcon} />}
    </View>
);

export default function FighterProfileScreen() {
    return (
        <View style={styles.container}>
            <Header isBack={true} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Profile Section */}
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={require('../../assets/images/event-card-img.png')}
                            style={styles.avatar}
                        />
                    </View>
                    <AppText text="Fighter" fontSize={14} color={Colors.light.success} style={styles.roleText} />
                    <AppText text="Jaspar Landal" fontSize={24} color={Colors.white} style={styles.nameText} />
                    <AppText text="IFMA World Champion 2025" fontSize={16} color={Colors.textSecondary} style={styles.orgText} />

                    <View style={styles.tagsRow}>
                        <Tag text="12-4-0" />
                        <Tag text="63,5 kg" />
                        <Tag text="DEN" icon={require('../../assets/images/flag-icon.png')} />
                        <Tag text="Muay Thai" />
                    </View>

                    <AppButton
                        text="Contact"
                        btnStyle={styles.contactButton}
                        textStyle={styles.contactButtonText}
                    />
                </View>

                <View style={styles.divider} />

                {/* Info Section */}
                <View style={styles.infoSection}>
                    <InfoRow label="Age" value="20 years" />
                    <InfoRow label="Weight" value="57-61 kg" />
                    <InfoRow label="Division" value="Pro" />
                    <InfoRow label="Height" value="172 cm" />

                    <InfoRow label="Muay Thai" value="12W – 4L – 0D" labelStyle={styles.statLabel} />
                    <InfoRow label="K-1" value="3W – 0L – 0D" labelStyle={styles.statLabel} />
                    <InfoRow label="Boxing" value="0W – 0L – 0D" labelStyle={styles.statLabel} />

                    <InfoRow label="Gender" value="Male" />
                    <InfoRow label="Country">
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                            <Image source={require('../../assets/images/flag-icon.png')} style={styles.flagIconSmall} />
                            <AppText text="Denmark" fontSize={16} color={Colors.textSecondary} />
                        </View>
                    </InfoRow>
                    <InfoRow label="Gym" value="Extreme Muay Thai" />
                </View>

                <View style={styles.divider} />

                {/* Manager Section */}
                <View style={styles.section}>
                    <AppText text="Manager" fontSize={18} color={Colors.white} style={styles.sectionTitle} />
                    <View style={styles.managerCard}>
                        <Image source={require('../../assets/images/profile-img.png')} style={styles.managerAvatar} />
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                <AppText text="Youssef Assouik" fontSize={16} color={Colors.white} style={{ fontWeight: '700' }} />
                                <Image source={require('../../assets/images/flag-icon.png')} style={styles.flagIconSmall} />
                            </View>
                            <AppText text="Assouik Gym Management" fontSize={14} color={Colors.textSecondary} />
                        </View>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* Next Fights Section */}
                <View style={styles.section}>
                    <AppText text="Next Fights" fontSize={18} color={Colors.white} style={styles.sectionTitle} />
                    <NextFightCard
                        title="ADFC 4.0 – Zaman vs Lai..."
                        date="Oct 11, 2025"
                        image={require('../../assets/images/logo.png')} // Placeholder for logo
                    />
                </View>

                <View style={styles.divider} />

                {/* Links Section */}
                <View style={styles.section}>
                    <AppText text="Jaspar's links" fontSize={24} color={Colors.white} style={styles.sectionTitle} />
                    <View style={styles.linksContainer}>
                        <AppButton text="Website" btnStyle={styles.linkButton} textStyle={styles.linkButtonText} />
                        <AppButton text="Instagram" btnStyle={styles.linkButton} textStyle={styles.linkButtonText} />
                        <AppButton text="Buy tickets" btnStyle={styles.linkButton} textStyle={styles.linkButtonText} />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        paddingTop: 40,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    profileSection: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    avatarContainer: {
        marginBottom: 16,
        borderRadius: 60,
        overflow: 'hidden',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    roleText: {
        marginBottom: 8,
        fontWeight: '600',
    },
    nameText: {
        marginBottom: 8,
        fontWeight: '700',
        textAlign: 'center',
    },
    orgText: {
        marginBottom: 16,
    },
    tagsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 24,
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        gap: 6,
    },
    tagIcon: {
        width: 16,
        height: 16,
        borderRadius: 8,
    },
    contactButton: {
        backgroundColor: Colors.white,
        width: '100%',
        borderRadius: 100,
    },
    contactButtonText: {
        color: Colors.black,
        fontWeight: '700',
        fontSize: 16,
    },
    divider: {
        height: 1,
        backgroundColor: '#333',
        marginVertical: 32,
    },
    infoSection: {
        paddingHorizontal: 20,
        gap: 24,
    },
    statLabel: {
        backgroundColor: '#333',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        overflow: 'hidden',
        textAlign: 'center',
        width: 'auto',
        minWidth: 80,
    },
    flagIconSmall: {
        width: 16,
        height: 16,
        borderRadius: 8,
    },
    section: {
        paddingHorizontal: 20,
    },
    sectionTitle: {
        marginBottom: 24,
        fontWeight: '700',
    },
    managerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    managerAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    linksContainer: {
        gap: 12,
    },
    linkButton: {
        backgroundColor: Colors.white,
        width: '100%',
        borderRadius: 100,
        marginTop: 0,
    },
    linkButtonText: {
        color: Colors.black,
        fontWeight: '700',
        fontSize: 16,
    },
});
