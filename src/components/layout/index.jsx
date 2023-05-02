/* eslint-disable react/prop-types */
import { useState } from 'react';
import Aside from './aside';
import Navbar from './navbar';
import * as Fields from './index.style';

function LayoutProvider({ children }) {
    const [asideStatus, setAsideStatus] = useState(false);
    return (
        <Fields.LayoutProviderField>
            <Navbar setAsideStatus={setAsideStatus} asideStatus={asideStatus} />
            <div>
                <Aside asideStatus={asideStatus} />
                <div className='children-field'>{children}</div>
            </div>
        </Fields.LayoutProviderField>
    );
}

export default LayoutProvider;
