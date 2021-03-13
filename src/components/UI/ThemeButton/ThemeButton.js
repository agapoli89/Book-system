import ThemeContext from '../../../context/themeContext';

const buttonStyles = {
    color: '#fff',
    border: '0',
    backgroundColor: 'transparent',
}

export default function ThemeButton() {
    return (
        <ThemeContext.Consumer>
            {({onChange}) => (
                <button 
                style={buttonStyles}
                onClick={onChange}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-paint-bucket" viewBox="0 0 16 16">
                        <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.686.555 1.528 1.035 2.401L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.706 1.44 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.219l5.615-5.614c.118.257.092.512.049.939-.03.292-.067.665-.072 1.176v.123h.003a1 1 0 0 0 1.993 0H14a3.657 3.657 0 0 0-.004-.174c-.055-1.25-.7-2.738-1.86-3.494a4.3 4.3 0 0 0-.212-.434c-.348-.626-.92-1.36-1.626-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.641-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.403-.813-1.938a3.284 3.284 0 0 1-.132-.673c.092.061.205.15.338.274zm.393 3.964c.54.853 1.108 1.568 1.608 2.034a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626a4.5 4.5 0 0 0 .365.183l-4.861 4.861a.567.567 0 0 1-.068-.01c-.137-.026-.342-.104-.608-.251-.525-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.047-3.048zm2.871-1.934a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.459-1.847z"/>
                    </svg>
            </button>
            )}
        </ThemeContext.Consumer>
    );
}