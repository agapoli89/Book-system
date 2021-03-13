import ThemeContext from '../../context/themeContext';

function Footer(props) {
    return (
        <ThemeContext.Consumer>
            {value => 
                <div className={`text-center m-3 text-${value}`}>
                Noclegi 2021
            </div>
            }
        </ThemeContext.Consumer>
    )
}

export default Footer;