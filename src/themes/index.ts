import { ThemeMode } from "../store/theme/types";
import { Dark } from "./dark";
import { Light } from "./light";


export const getTheme = (theme: ThemeMode = ThemeMode.Light) => {
    switch (theme) {
        case ThemeMode.Light: return Light;
        case ThemeMode.Dark: return Dark;
        default: return Light;
    }
}

type Theme = { [color: string]: any } & typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}

export const theme = Light