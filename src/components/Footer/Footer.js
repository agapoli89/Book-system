import ThemeContext from '../../context/themeContext';

function Footer(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) => 
                <div className={`text-center m-3 text-${theme}`}>
                Noclegi 2021
            </div>
            }
        </ThemeContext.Consumer>
    )
}

export default Footer;