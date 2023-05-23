import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components"
import { IThemeState, IThemeStateAware, SLICE_NAME, ThemeMode, themeSlice } from "../store/theme";

export const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { theme: currentTheme } = useSelector<IThemeStateAware, IThemeState>(state => state[SLICE_NAME]);

  return (
    <>
      <div style={{ display: 'flex', border: '1px solid', height: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: theme?.headerBgColor }}>Header</div>
      <button onClick={() => {
        dispatch(themeSlice.actions.setTheme({ theme: currentTheme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light }))
      }}>Change theme</button>
    </>
  )
}
