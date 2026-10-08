import { useTheme } from './ThemeContext.jsx'

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme}
        </button>
    );
}