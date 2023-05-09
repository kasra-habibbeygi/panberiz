import styled from '@emotion/styled';

export const IncomeField = styled.div(props => ({
    display: 'flex',
    gap: '30px',
    '& .line-chart': {
        padding: '15px',
        flex: 1,
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
                    textAlign: 'center'
                },
                ShowChartIcon: {
                    color: '#6ed097'
                }
            },
            '& .period': {
                width: '15%',
                '& .MuiInputBase-root': {
                    background: 'white',
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
        flex: 0.7,
        borderRadius: '30px',
        backgroundColor: 'white',
        padding: '15px',
        '& .select-rank': {
            width: '25%',
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
