import styled from '@emotion/styled';

export const ReportField = styled.div(() => ({
    h3: {
        fontSize: '1.5rem',
        marginBottom: '50px'
    },

    '& .item': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)',
        height: '80px',
        borderRadius: '15px',
        marginBottom: '10px',

        p: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:last-child': {
                flex: 2,
                justifyContent: 'center'
            }
        }
    },

    '& .header_field': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: '#9D9D9E',
        marginBottom: '20px',

        span: {
            textAlign: 'center',
            width: '100%',

            '&:last-child': {
                textAlign: 'center'
            }
        }
    }
}));
