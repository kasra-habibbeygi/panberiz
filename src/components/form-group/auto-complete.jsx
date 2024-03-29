/* eslint-disable react/prop-types */
import { Autocomplete, TextField } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

// Assets
import { MainField } from './auto-complete.style';
import { useSelector } from 'react-redux';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
});

const AutoComplete = ({ placeholder, options, value, valueHandler, name, onKeyDown }) => {
    const lang = useSelector(state => state.UserInfo.lang);

    const keyDownHandler = e => {
        if (e.key === 'Enter') {
            onKeyDown();
        }
    };

    return (
        <MainField>
            {lang !== 'en' ? (
                <CacheProvider value={cacheRtl}>
                    <Autocomplete
                        disablePortal
                        options={options}
                        value={value}
                        onChange={(_, newValue) => {
                            valueHandler(newValue, name);
                        }}
                        onKeyDown={e => onKeyDown && keyDownHandler(e)}
                        popupIcon={<KeyboardArrowDownRoundedIcon style={{ color: '#170128' }} />}
                        renderInput={params => <TextField {...params} placeholder={placeholder} />}
                    />
                </CacheProvider>
            ) : (
                <Autocomplete
                    disablePortal
                    options={options}
                    value={value}
                    onChange={(_, newValue) => {
                        valueHandler(newValue, name);
                    }}
                    onKeyDown={e => onKeyDown && keyDownHandler(e)}
                    popupIcon={<KeyboardArrowDownRoundedIcon style={{ color: '#170128' }} />}
                    renderInput={params => <TextField {...params} placeholder={placeholder} />}
                />
            )}
        </MainField>
    );
};

export default AutoComplete;
