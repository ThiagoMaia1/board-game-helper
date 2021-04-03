import { useEffect } from "react";
import { BackHandler } from "react-native";

function useBackButton(action : () => boolean) {
    useEffect(() => {
        const backListener = BackHandler.addEventListener('hardwareBackPress', action);
        return () => backListener.remove();
    })
}

export default useBackButton;