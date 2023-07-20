/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Component
import LayoutProvider from '@/components/layout';
import VideoField from '@/components/pages/video/details/video';
import DetailsField from '@/components/pages/video/details/details';
import Comment from '@/components/pages/video/details/comment';
import SuggestVideo from '@/components/pages/video/details/suggest';

// APIs
import { GetMediaDetails } from '@/api-request/media/details';

const VideoDetails = () => {
    const userInfo = useSelector(state => state.UserInfo);
    const [mediaDetails, setMediaDetails] = useState([]);
    const router = useRouter();

    useEffect(() => {
        GetMediaDetails(router.query.id, userInfo.lang)
            .then(res => {
                setMediaDetails(res.results);
            })
            .catch(() => {});
    }, [router.query.id, userInfo.lang]);

    return (
        <LayoutProvider>
            <VideoField mediaDetails={mediaDetails[0]} />
            <DetailsField mediaDetails={mediaDetails[0]} />
            <SuggestVideo mediaDetails={mediaDetails[0]} />
            <Comment mediaDetails={mediaDetails[0]} />
        </LayoutProvider>
    );
};

export default VideoDetails;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
