/* eslint-disable react/prop-types */
import { useState } from 'react';
import Aside from './aside';
import Navbar from './navbar';
import * as Fields from './index.style';

function LayoutProvider({ children }) {
    const [asideStatus, setAsideStatus] = useState(true);
    return (
        <Fields.LayoutProviderField asideStatus={asideStatus}>
            <Navbar setAsideStatus={setAsideStatus} asideStatus={asideStatus} />
            <div className='main_field'>
                <Aside asideStatus={asideStatus} />
                <div className='children-field'>{children}</div>
            </div>
        </Fields.LayoutProviderField>
    );
}

export default LayoutProvider;
