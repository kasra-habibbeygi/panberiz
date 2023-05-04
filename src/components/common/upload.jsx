import { Upload, message } from 'antd';
import * as Style from './upload.style';
function CustomUpload() {
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text'
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    };

    return (
        <Style.UploadField>
            <Upload {...props} className='upload'>
                <button>برای آپلود کاور مدیا کلیک کنید</button>
            </Upload>
        </Style.UploadField>
    );
}

export default CustomUpload;
