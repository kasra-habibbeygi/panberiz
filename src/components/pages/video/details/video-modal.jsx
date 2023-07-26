/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// Assets
import { Dialog } from '@mui/material';
import { MainField } from './video-modal.style';
import Button from '@/components/form-group/button';

// API
import { AddUserVideoViwe } from '@/api-request/media/details';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const VideoModal = ({ status, setStatus, mediaDetails }) => {
    const userInfo = useSelector(state => state.UserInfo);
    const [video, setVideo] = useState('');

    useEffect(() => {
        if (status) {
            AddUserVideoViwe({
                media: mediaDetails?.id,
                user: userInfo.id
            })
                .then(() => {})
                .catch(() => {});
            setVideo(mediaDetails);
        }
    }, [status]);

    const modalClosehandler = () => {
        setStatus(false);
        document.getElementById('slider_video_player').pause();
    };

    return (
        <MainField>
            <Dialog onClose={modalClosehandler} open={status} disablePortal keepMounted fullWidth={true} scroll='body' maxWidth='md'>
                {video !== '' && (
                    <video controls id='slider_video_player'>
                        <source
                            src={video?.file?.replace(
                                'ftp://testuser@fileacademy.pmlm.ir:m@P7x-s%7Bd28%7D@31.25.90.38:21',
                                'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir'
                            )}
                            type='video/mp4'
                        />
                    </video>
                )}
                <Button type='filled' color='primary' handler={modalClosehandler}>
                    بستن پنجره
                </Button>
            </Dialog>
        </MainField>
    );
};

export default VideoModal;
