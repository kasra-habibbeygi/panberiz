import styled from '@emotion/styled';

export const ReportItemField = styled.button(props => ({
    width: '100%',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    // zIndex: 99999,
    position: 'relative',
    backgroundColor: props.open ? '#170128' : 'white',
    justifyContent: 'space-between',
    boxShadow: '0 4px 14px 0 rgb(0 0 0 / 7%)',
    borderRadius: '15px',
    // marginBottom: '25px',
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
    '& .item-container': {
        // position: 'absolute',
        border: '1px solid rgba(157, 157, 158, 0.31)',
        paddingTop: '100px',
        // display: 'flex',
        backgroundColor: 'white',
        top: 0,
        right: 0,
        borderRadius: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        '& .item': {
            width: '97%',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
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
        // backgroundColor: 'white'
        // width: '100%',
        // bottom: '-20px'
    }
}));
