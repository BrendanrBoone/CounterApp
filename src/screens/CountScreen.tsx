/**
 * CountScreen.tsx
 * 
 * 9/2 got in a wreck. had a concussion. keeping up some of that green
 * 9/3 had a lot of rest. another green. can't code much at all rn. cuz its a screen
 * 9/5 fuck I missed yesterday
 * 9/6 another day after the wreck. another line of green
 * 9/8 no shot I missed 9/7 right? that was on the PC?
 *     dam, ok. start programing now. not a comment line. actually code
 * 9/9 one more day. I've been playing tekken. its fun
 * 9/11 crap
 * 
 * Count Screen component.
 */
import { useState } from "react";
import {
    StyleSheet,
    SafeAreaView
} from "react-native";
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