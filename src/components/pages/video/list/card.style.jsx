import styled from '@emotion/styled';

export const CardField = styled.div(() => ({
    width: '30%',
    borderRadius: '20px',
    margin: '10px',
    position: 'relative',
    '& .image': {
        width: '100%',
        height: '250px',
        borderRadius: '20px',
        objectFit: 'cover'
    },
    '& .play': {
        alignSelf: 'center',
        top: '32%',
        left: '43%'
    },
    '& .flout': {
        position: 'absolute',
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '250px',
        '& .icon': {
            margin: '5px'
        }
    },
    '& .card-des': {
        div: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    }
}));
