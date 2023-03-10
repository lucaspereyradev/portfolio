import React from 'react';

function LanguageButtons({ lang, setLanguage }) {
    return (
        <>
            <button onClick={() => setLanguage('es')}>
                <img
                    src="./spain-flag.webp"
                    width={40}
                    className="h-full rounded-md"
                    alt={lang.languages.es}
                    title={lang.languages.es}
                />
            </button>
            <button onClick={() => setLanguage('en')}>
                <img
                    src="./usa-flag.webp"
                    width={40}
                    className="h-full rounded-md"
                    alt={lang.languages.en}
                    title={lang.languages.en}
                />
            </button>
            <button onClick={() => setLanguage('pt')}>
                <img
                    src="./brazil-flag.webp"
                    width={40}
                    className="h-full rounded-md"
                    alt={lang.languages.pt}
                    title={lang.languages.pt}
                />
            </button>
        </>
    );
}

export default LanguageButtons;
