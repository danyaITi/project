jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (str:string) => str,
        i18n: {
            changeLanguage: () => new Promise(() => {}),
        },
    }),
}));
