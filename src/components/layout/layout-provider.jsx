/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfohandler } from '@/state-manager/reducer/user';

// Component
import MobileNavbar from './mobile-navbar';
import MainLoader from '../template/loader';
import Aside from './aside';
import Navbar from './navbar';

// APIs
import { GetUserInformation } from '@/api-request/user-info';

// Assets
import * as Fields from './layout-provider.style';

// Hooks
import useWindowDimensions from '@/hooks/use-windows-dimensions';

function LayoutProvider({ children }) {
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();
    const [asideStatus, setAsideStatus] = useState(true);
    const LoaderStatus = useSelector(state => state.Utils.loader);

    useEffect(() => {
        setAsideStatus(width < 1300 ? false : true);
    }, [width]);

    useEffect(() => {
        GetUserInformation().then(res => {
            dispatch(userInfohandler(res));
        });
    }, []);

    return (
        <Fields.LayoutProviderField asideStatus={asideStatus}>
            <Navbar setAsideStatus={setAsideStatus} asideStatus={asideStatus} />
            <div className='main_field'>
                <Aside asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
                <div className='children-field'>{LoaderStatus ? <MainLoader /> : children}</div>
            </div>
            <MobileNavbar />
        </Fields.LayoutProviderField>
    );
}

export default LayoutProvider;
