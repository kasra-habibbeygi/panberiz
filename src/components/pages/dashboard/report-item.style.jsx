import styled from '@emotion/styled';

export const ReportItemField = styled.button(props => ({
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '25px',
    alignItems: 'center',
    '& .item': {
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: props.open ? '#170128' : 'white',
        justifyContent: 'space-between',
        boxShadow: '0 4px 14px 0 rgb(0 0 0 / 7%)',
        borderRadius: '15px',
        p: {
            color: props.open && 'white',
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:last-child': {
                flex: 2,
                justifyContent: 'center'
            }
        },
        '& .MuiSvgIcon-root': {
            color: props.open ? 'white' : 'black'
        }
    },
    '& .collapse': {
        width: '97%',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        '& .collapse-item': {
            width: '100%',
            height: '80px',
            display: 'flex',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            border: '1px dashed rgba(157, 157, 158, 1)',
            justifyContent: 'space-between',
            borderRadius: '15px',
            p: {
                color: 'black',
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:last-child': {
                    flex: 2,
                    justifyContent: 'center'
                }
            }
        }
    }
}));
