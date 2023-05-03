import styled from '@emotion/styled';

export const CardField = styled.div(() => ({
    width: '30%',
    borderRadius: '20px',
    overflow: 'hidden',
    margin: '10px',
    position: 'relative',
    flexDirection: 'column',
    '& .image': {
        width: '300px',
        height: '300px',
        borderRadius: '25px',
        objectFit: 'cover',
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '& .play': {
        position: 'absolute',
        alignSelf: 'center',
        top: '32%',
        left: '43%'
    },
    '& .flout': {
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '300px',
        '& .icon': {
            margin: '5px'
        }
    },
    '& .card-des': {
        flexDirection: 'column',
        padding: '15px 0',
        div: {
            justifyContent: 'space-between'
        }
    }
}));
