/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userInfohandler } from '@/state-manager/reducer/user';
import dynamic from 'next/dynamic';

// Component
const Aside = dynamic(() => import('./aside'), {
    ssr: false
});
const Navbar = dynamic(() => import('./navbar'), {
    ssr: false
});
import MobileNavbar from './mobile-navbar';

// APIs
import { GetUserInformation } from '@/api-request/user-info';

// Assets
import * as Fields from './index.style';

// Hooks
import useWindowDimensions from '@/hooks/use-windows-dimensions';

function LayoutProvider({ children }) {
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();
    const [asideStatus, setAsideStatus] = useState(true);

    useEffect(() => {
        setAsideStatus(width < 1300 ? false : true);

        GetUserInformation().then(res => {
            dispatch(userInfohandler(res));
        });
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
