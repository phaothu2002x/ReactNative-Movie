import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

const TabIcon = ({ title, focused, icon }) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row flex-1 w-full min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
            >
                <Image source={icon} tintColor="#151312" className="size-5" />
                <Text className="text-base text-secondary font-semibold ml-2">
                    {title}
                </Text>
            </ImageBackground>
        );
    } else {
        return (
            <View className="size-full justify-center items-center mt-4 rounded-full">
                <Image source={icon} tintColor="#A8B5DB" className="size-5" />
            </View>
        );
    }
};

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    height: 52,
                    borderRadius: 50,
                    marginBottom: 36,
                    marginHorizontal: 20,
                    position: 'absolute',
                    overflow: 'hidden',
                    backgroundColor: '#0f0d23',
                    borderWidth: 1,
                    borderColor: '#0f0d23',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                icon={icons.home}
                                title="Home"
                            />
                        </>
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    headerShown: false,
                    title: 'Search',
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                icon={icons.search}
                                title="Search"
                            />
                        </>
                    ),
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    headerShown: false,
                    title: 'Saved',
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                icon={icons.save}
                                title="Saved"
                            />
                        </>
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                icon={icons.person}
                                title="Profile"
                            />
                        </>
                    ),
                }}
            />
        </Tabs>
    );
};

export default _layout;
