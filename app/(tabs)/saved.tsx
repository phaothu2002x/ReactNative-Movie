import { icons } from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Saved = () => {
    return (
        <View className="bg-primary flex-1 px-10">
            <View className="flex justify-center items-center gap-5 flex-1 flex-col">
                <Image
                    source={icons.save}
                    tintColor="#fff"
                    className="size-10"
                />
                <Text className="text-gray-500 text-base">SAVE</Text>
            </View>
        </View>
    );
};

export default Saved;

const styles = StyleSheet.create({});
