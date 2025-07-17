import { icons } from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Profile = () => {
    return (
        <View className="bg-primary flex-1 px-10">
            <View className="flex justify-center items-center gap-5 flex-1 flex-col">
                <Image
                    source={icons.person}
                    tintColor="#fff"
                    className="size-10"
                />
                <Text className="text-gray-500 text-base">Profile</Text>
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({});
