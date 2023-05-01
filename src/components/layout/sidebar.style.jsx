const { default: styled } = require('@emotion/styled');

export const SideBar = styled.div(() => ({
    bottom: 0,
    top: 80,
    width: '20%',
    padding: 30,
    borderLeft: 1,
    position: 'absolute',
    '& .items': {
        ol: {
            listStyle: 'none',
            li: {
                display: 'flex',
                margin: 15,
                alignItems: 'center',
                p: {
                    marginRight: 10
                }
            }
        }
    }
}));
