import styled from '@emotion/styled';

export const IncomeField = styled.div(() => ({
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
                select: {
                    border: '2px solid',
                    padding: '10px 20px',
                    borderRadius: '30px',
                    borderColor: '#E2E2E2',
                    backgroundColor: 'transparent',
                    fontWeight: 'bold'
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
            select: {
                border: '0',
                padding: '10px 20px',
                borderRadius: '30px',
                backgroundColor: '#F5EFF5',
                color: '#751B74',
                fontWeight: 'bold'
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
