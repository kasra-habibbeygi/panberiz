/* eslint-disable react/prop-types */
// Assets
import { Dialog } from '@mui/material';
import { MainField } from './video-modal.style';
import Button from '@/components/form-group/button';

const VideoModal = ({ status, setStatus }) => {
    return (
        <MainField>
            <Dialog onClose={() => setStatus(false)} open={status} disablePortal keepMounted fullWidth={true} scroll='body' maxWidth='md'>
                <iframe
                    src='https://www.aparat.com/video/video/embed/videohash/C60Z9/vt/frame'
                    title='W3Schools Free Online Web Tutorials'
                ></iframe>
                <Button type='filled' color='primary' handler={() => setStatus(false)}>
                    بستن پنجره
                </Button>
            </Dialog>
        </MainField>
    );
};

export default VideoModal;
