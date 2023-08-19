/* eslint-disable react/prop-types */
// Assets
import { MainField } from './pagination.style';

// MUI
import { Pagination } from '@mui/material';

const PaginationField = ({ paginationStatus, setPaginationStatus }) => {
    return (
        <MainField>
            {paginationStatus.total !== 1 && (
                <Pagination
                    color='secondary'
                    size='small'
                    count={paginationStatus.total}
                    page={paginationStatus.current}
                    onChange={(_, value) =>
                        setPaginationStatus(prev => ({
                            ...prev,
                            current: value
                        }))
                    }
                />
            )}
        </MainField>
    );
};

export default PaginationField;
