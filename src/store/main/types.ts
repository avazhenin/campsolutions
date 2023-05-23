export const SLICE_NAME = 'mainStore';

// Define a type for the slice state
export interface IMainState {
    
}

export interface IMainStateAware {
    [SLICE_NAME]: IMainState;
}