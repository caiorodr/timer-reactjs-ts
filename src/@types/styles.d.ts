import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

// Toda vez que for importado o styles-components, a tipagem 
// que ele vai puxar, a definição de tipos é o que foi
// definido no styled-components, por isso usamos o import styled-components
// e declaramos ele a baixo para subscrever alguma coisa.
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}