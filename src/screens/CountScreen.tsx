/**
 * CountScreen.tsx
 * 
 * 9/2 got in a wreck. had a concussion. keeping up some of that green
 * 9/3 had a lot of rest. another green. can't code much at all rn. cuz its a screen
 * 9/5 fuck I missed yesterday
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
import { PlayerButton } from "../components/ui/PlayerButton";

/**
 * Main idea of app. It is a streak app for whatever its purpose.
 * It is supposed to incentivise consistency. holds the longest
 * recorded streak somewhere on the screen.
 * features to make:
 *  - longest streak counter
 *  - reset button
 *  - Firebase support
 *  - Notification to user
 * @returns Main Screen of App
 */
export default function CountScreen() {

    const [n, setN] = useState(0);

    const incrementFunction = (): void => {
        setN(n + 1);
    }

    return (
        <SafeAreaView style={styles.container}>
            <PlayerButton onPress={incrementFunction}
            color={defined_colors.light_blue}
            color_pressed={defined_colors.light_blue}>
                {n}
            </PlayerButton>
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