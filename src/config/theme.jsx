/* eslint-disable prettier/prettier */
export const theme = (mode, direction) => ({
    direction,
    mode,
    palette: {
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
                        blackAndWhite : '#000000',
                        light : '#A6A6A7'
                    },
                    input : {
                        primary : '#F1F1F1'
                    },
                    border : {
                        primary :'#E1E1E1',
                        secondary : '#EFEFEF'
                    },
                    background :{
                        card : 'white',
                        layout : '#FFFFFF',
                        content:'#fff'
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
                        blackAndWhite : '#FFFFFF',
                        light : '#AAAAAA'
                    },
                    input : {
                        primary : '#2D2140'
                    },
                    border : {
                        primary :'rgba(85, 74, 103, 1)',
                        secondary : '#EFEFEF'
                    },                    
                    background :{
                        card : '#3B2D51',
                        layout : '#11011E',
                        content:'#3B2D51'
                    }
                }
            })
    }
});
