import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    marginBottom: '30px',
    paddingBottom: '30px',
    borderBottom: `1px dashed ${props.theme.mode === 'light' ? '#EFEFEF' : '#554A67'}`,

    '& .sub_btn': {
        margin: '30px auto 0 0 '
    },

    '& .lang_select': {
        position: 'relative',
        marginTop: '20px'
    }
}));
