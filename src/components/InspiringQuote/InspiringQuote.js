import { useEffect, useState, useLayoutEffect } from "react";

const quotes = [
    'Tylko ten, kto wędruje, odnajduje nowe ścieżki.',
    'Jeśli myślisz, że przygody bywają niebezpieczne, spróbuj rutyny. Ona jest śmiercionośna.',
    'Turyści nie wiedzą gdzie byli, podróżnicy nie wiedzą gdzie będą.',
    'Podróże to jedyna rzecz, na którą wydajemy pieniądze a stajemy się bogatsi.',
    'To podróż daje nam szczęście, nie jej cel.',
    'Aby poznać człowieka, trzeba zostać jego towarzyszem podróży.',
    'Podróżowanie uczy skromności. Widzisz, jak niewiele miejsca zajmujesz w świecie.',
    'Świat jest książką i ci, którzy nie podróżują, czytają tylko jedną stronę.',
];

const styles = {
    position: 'absolute',
    padding: '20px',
    top: '20px',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    fontStyle: 'italic'
}

function InspiringQuote(props) {
    const [quote, setQuote] = useState('Wczytywanie cytatu...');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    useLayoutEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }, [loading]);

    return (
        <p style={styles}>{quote}</p>
    )
}

export default InspiringQuote;