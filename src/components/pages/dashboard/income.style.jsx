import styled from '@emotion/styled';

export const IncomeField = styled.div(props => ({
    width: '100%',
    display: 'flex',
    gap: '30px',
    '& .line-chart': {
        width: '60%',
        padding: '15px 0',
        '& .header': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: {
                color: '#6ED097'
            },
            '& .title': {
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                h1: {
                    color: props.theme.palette.colors.text.blackAndWhite,
                    textAlign: 'center'
                },
                ShowChartIcon: {
                    color: '#6ed097'
                }
            },
            '& .period': {
                width: '25%',
                '& .MuiInputBase-root': {
                    background: props.theme.palette.colors.background.layout,
                    border: '1px solid rgba(226, 226, 226, 1)',
                    borderRadius: '30px'
                }
            }
        },
        '& .chart': {
            flex: 1
        }
    },
    '& .circle-chart': {
        borderRadius: '30px',
        backgroundColor: props.theme.palette.colors.background.card,
        width: '40%',
        padding: '15px',
        '& .select-rank': {
            width: '40%',
            '& .MuiInputBase-root': {
                borderRadius: '30px',
                color: props.theme.palette.colors.primary
            }
        },
        '& .chart': {
            flex: 5
        },
        '& .flags': {
            flex: 1.5,
            display: 'flex',
            '& .section': {
                flex: 1,
                div: {
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: {
                        marginRight: '20px'
                    }
                }
            }
        }
    }
}));
