import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();
    return (
        <button onClick={toggleTheme}>toggle</button>
    )
}