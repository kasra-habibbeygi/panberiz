/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

// Component
import LayoutProvider from '@/components/layout';
import VideoField from '@/components/pages/video/details/video';
import DetailsField from '@/components/pages/video/details/details';
import Comment from '@/components/pages/video/details/comment';
import SuggestVideo from '@/components/pages/video/details/suggest';

// APIs
import { GetMediaDetails } from '@/api-request/media/details';

const VideoDetails = () => {
    const [mediaDetails, setMediaDetails] = useState([]);
    useEffect(() => {
        GetMediaDetails(3)
            .then(res => {
                setMediaDetails(res.results);
                console.log(mediaDetails);
            })
            .catch(() => {});
    }, []);

    return (
        <LayoutProvider>
            <VideoField />
            <DetailsField />
            <SuggestVideo />
            <Comment />
        </LayoutProvider>
    );
};

export default VideoDetails;
