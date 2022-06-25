import './ThemeSelector.css';
//HOOKS
import { useTheme } from '../hooks/useTheme';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

const ThemeSelector = () => {
    //STATE & VARIALBES
    const { changeColor } = useTheme();
    return(
        <div className='theme-selector'>
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