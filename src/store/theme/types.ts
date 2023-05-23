export const SLICE_NAME = 'theme';

export enum ThemeMode {
    Light = 'Light',
    Dark = 'Dark'
};

export interface IThemeState {
    theme: ThemeMode;
}

export interface IThemeStateAware {
    [SLICE_NAME]: IThemeState;
}