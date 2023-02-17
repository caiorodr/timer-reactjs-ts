import { HeaderContainer } from "./styled";

export function Header() {
    return (
        <HeaderContainer>
            <span>Logo</span>
            <nav>
                <a href="">timer</a>
                <a href="">history</a>
            </nav>
        </HeaderContainer>
    )
}