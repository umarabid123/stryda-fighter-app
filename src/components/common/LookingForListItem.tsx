import { View, StyleSheet, Image, Dimensions } from 'react-native';
import AppText from './AppText';
import { Colors } from '../../constant';

interface LookingForListItemProps {
    avatar?: any; // Allow requiring images
    tags: string[];
    status: 'can_apply' | 'cannot_apply';
    weight: string;
    customStyle?: any;
}

export default function LookingForListItem({
    avatar,
    tags,
    status,
    weight,
    customStyle
}: LookingForListItemProps) {
    const isCanApply = status === 'can_apply';

    return (
        <View style={[styles.container, customStyle]}>
            {/* Avatar */}
            <View style={styles.avatarContainer}>
                {avatar ? (
                    <Image source={avatar} style={styles.avatar} />
                ) : (
                    <View style={[styles.avatar, { backgroundColor: '#333' }]} >
                        <Image source={require('../../../assets/images/profile.png')} style={styles.avatar} />
                    </View>
                )}
            </View>

            <View style={styles.contentContainer}>
                {/* Tags Row */}
                <View style={styles.tagsRow}>
                    {tags.map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <AppText text={tag} fontSize={12} color={Colors.white} />
                        </View>
                    ))}
                    <View style={styles.tag}>
                        <AppText text={weight} fontSize={12} color={Colors.white} />
                    </View>
                </View>

                {/* Status Row */}
                <View style={styles.statusRow}>
                    {isCanApply ? (
                        // <Check size={14} color={Colors.light.success} {...({} as any)} />
                        <Image source={require('../../../assets/images/check-icon.png')} style={styles.statusIcon} />
                    ) : (
                        <Image source={require('../../../assets/images/cross-icon.png')} style={styles.statusIcon} />
                    )}
                    <AppText
                        text={isCanApply ? 'You can apply' : "You can't apply"}
                        fontSize={12}
                        color={isCanApply ? '#1CD760' : "#EE665C"}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    avatarContainer: {
        marginRight: 12,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    contentContainer: {
        flex: 1,
        gap: 6,
    },
    tagsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    tag: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    statusIcon: {
        width: 12,
        height: 12,
    },
});
