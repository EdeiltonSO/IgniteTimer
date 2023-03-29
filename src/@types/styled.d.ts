import 'styled-components';
import { mainTheme } from '../styles/themes/main';

type ThemeType = typeof mainTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}