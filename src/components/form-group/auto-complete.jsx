/* eslint-disable react/prop-types */
import { Autocomplete, TextField } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

// Assets
import { MainField } from './auto-complete.style';

const AutoComplete = ({ placeholder, options, value, valueHandler, name }) => {
    return (
        <MainField>
            <Autocomplete
                disablePortal
                options={options}
                value={value}
                onChange={(e, newValue) => {
                    valueHandler(newValue, name);
                }}
                popupIcon={<KeyboardArrowDownRoundedIcon style={{ color: '#170128' }} />}
                renderInput={params => <TextField {...params} placeholder={placeholder} />}
            />
        </MainField>
    );
};

export default AutoComplete;
