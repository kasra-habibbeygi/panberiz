/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// Assets
import { Dialog } from '@mui/material';
import { MainField } from './video-modal.style';
import Button from '@/components/form-group/button';

// API
import { AddUserVideoViwe } from '@/api-request/media/details';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const VideoModal = ({ status, setStatus, mediaDetails }) => {
    const userInfo = useSelector(state => state.UserInfo);
    useEffect(() => {
        if (status) {
            AddUserVideoViwe({
                media: mediaDetails?.id,
                user: userInfo.id
            })
                .then(() => {})
                .catch(() => {});
        }
    }, [status]);

    return (
        <MainField>
            <Dialog onClose={() => setStatus(false)} open={status} disablePortal keepMounted fullWidth={true} scroll='body' maxWidth='md'>
                <iframe
                    src={mediaDetails?.file?.replace(
                        'ftp://pmlm@fileacademy.pmlm.ir:%7DW7,-iI%7Bg;sh@31.25.90.38:21',
                        'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir/pmlm'
                    )}
                ></iframe>
                <Button type='filled' color='primary' handler={() => setStatus(false)}>
                    بستن پنجره
                </Button>
            </Dialog>
        </MainField>
    );
};

export default VideoModal;
