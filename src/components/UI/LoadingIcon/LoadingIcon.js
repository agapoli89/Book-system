import ThemeContext from '../../../context/themeContext';

function LoadingIcon(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) =>
                <div className="d-flex justify-content-center">
                <div className={`spinner-border m-5 text-${theme}`} role="status">
                    <span className="sr-only">Ładowanie...</span>
                </div>
                </div>
            }
        </ThemeContext.Consumer>
    )
}

export default LoadingIcon