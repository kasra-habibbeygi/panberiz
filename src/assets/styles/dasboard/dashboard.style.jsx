import styled from '@emotion/styled';

export const DashboardField = styled.div(() => ({
    flexDirection: 'column',
    width: '100%',
    '& .income': {
        // flex: 1,
        height: '450px',
        '& .line-chart': {
            flex: 1,
            flexDirection: 'column',
            '& .header': {
                alignItems: 'center',
                justifyContent: 'space-between',
                p: {
                    marginRight: '15px',
                    color: '#6ED097'
                },
                '& .title': {
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
            flexDirection: 'column',
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
                flexDirection: 'column',
                '& .section': {
                    flex: 1,
                    div: {
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
        flexDirection: 'column',
        margin: '100px 0',
        '& .table': {
            margin: '25px 0',
            flexDirection: 'column',
            width: '100%',
            '& .header': {
                div: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '25px 0'
                }
            },
            '& .rows': {
                padding: '25px 0',
                borderRadius: '20px',
                backgroundColor: 'white',
                boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.100)',
                '&:hover': {
                    backgroundColor: 'rgba(23, 1, 40, 1)',
                    color: 'white'
                },
                div: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }
        }
    }
}));
