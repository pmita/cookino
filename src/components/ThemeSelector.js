import './ThemeSelector.css';
//HOOKS
import { useTheme } from '../hooks/useTheme';
//ASSETS
import modeIcon from '../assets/sun.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

const ThemeSelector = () => {
    //STATE & VARIALBES
    const { mode, changeColor, changeMode } = useTheme();

    //FUNCTIONS
    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark');
    }
    return(
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img 
                    src={modeIcon} 
                    alt='dark mode toggle icon'
                    onClick={toggleMode}
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                />
            </div>
            <div className='theme-buttons'>
                {themeColors.map(color => (
                    <div 
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    )
}

export default ThemeSelector;