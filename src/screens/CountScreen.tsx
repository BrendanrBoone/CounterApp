/**
 * CountScreen.tsx
 * 
 * Count Screen component.
 */
import { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    SafeAreaView
} from "react-native";
import { DemoButton } from "../components/ui/DemoButton";
import defined_colors from "../components/ui/colors";

export default function CountScreen() {

    let n: number = 0;

    const incrementFunction = (): void => {
        n += 1;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{height: 100, width: 185, alignContent: 'flex-start'}}>
                <DemoButton
                key="number" 
                onPress={() => {incrementFunction()}}
                color={defined_colors.dark_grey}
                color_pressed={defined_colors.black}>
                    {n}
                </DemoButton>
            </View>
            <View style={{ height: 250, width: 185, justifyContent: 'center' }}>
                <DemoButton 
                key="increment" 
                onPress={() => {incrementFunction()}}
                color={defined_colors.dark_grey}
                color_pressed={defined_colors.black}>
                    {"+"}
                </DemoButton>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});