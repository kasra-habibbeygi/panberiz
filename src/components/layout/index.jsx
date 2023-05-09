/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

// Component
import Aside from './aside';
import Navbar from './navbar';
import MobileNavbar from './mobile-navbar';

// Assets
import * as Fields from './index.style';

// Hooks
import useWindowDimensions from '@/hooks/use-windows-dimensions';

function LayoutProvider({ children }) {
    const { width } = useWindowDimensions();
    const [asideStatus, setAsideStatus] = useState(true);

    useEffect(() => {
        setAsideStatus(width < 1300 ? false : true);
    }, [width]);

    return (
        <Fields.LayoutProviderField asideStatus={asideStatus}>
            <Navbar setAsideStatus={setAsideStatus} asideStatus={asideStatus} />
            <div className='main_field'>
                <Aside asideStatus={asideStatus} />
                <div className='children-field'>{children}</div>
            </div>
            <MobileNavbar />
        </Fields.LayoutProviderField>
    );
}

export default LayoutProvider;
