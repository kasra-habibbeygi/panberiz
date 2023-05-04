import styled from '@emotion/styled';

export const DashboardField = styled.div(() => ({
    width: '100%',
    '& .income': {
        display: 'flex',
        height: '450px',
        '& .line-chart': {
            flex: 1,
            '& .header': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: {
                    marginRight: '15px',
                    color: '#6ED097'
                },
                '& .title': {
                    display: 'flex',
                    alignItems: 'center',
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
            marginRight: '25px',
            borderRadius: '30px',
            backgroundColor: 'white',
            '& .select-rank': {
                padding: '15px',
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
    },
    '& .report': {
        margin: '100px 0',
        table: {
            margin: '25px 0',
            width: '100%',
            tbody: {
                tr: {
                    margin: '30px',
                    padding: '25px 0',
                    borderRadius: '20px',
                    justifyContent: 'space-between',
                    // backgroundColor: 'white',
                    boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.100)',
                    '&:hover': {
                        backgroundColor: 'rgba(23, 1, 40, 1)',
                        color: 'white'
                    }
                }
            }
        }
    }
}));
