/* eslint-disable prettier/prettier */
export const theme = (mode: 'light' | 'dark') => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                colors: {
                    primary : '#751B74',
                    disablePrimary : '#BA8DBA',
                    lightPrimary : '#FAF6FA',
                    success : '#6ED097',
                    lightSuccess : '#E3FEF6',
                    error : '#BF0000',
                    lightError : '#FFE3E3',
                    text : {
                        blackAndWhite : '#1B022B',
                        light : '#A6A6A7'
                    },
                    input : {
                        primary : '#F1F1F1'
                    },
                    border : {
                        primary :'#E1E1E1',
                        secondary : '#EFEFEF'
                    }
                }
            }
            : {
                colors: {
                    primary : '#8C2DB9',
                    disablePrimary : '#BA8DBA',
                    lightPrimary : '#FAF6FA',
                    success : '#6ED097',
                    lightSuccess : '#FFFFFF',
                    error : '#BF0000',
                    lightError : '#FFE3E3',
                    text : {
                        blackAndWhite : '#EFE1F5',
                        light : '#AAAAAA'
                    },
                    input : {
                        primary : '#2D2140'
                    },
                    border : {
                        primary :'#E1E1E1',
                        secondary : '#EFEFEF'
                    }
                }
            })
    }
});
