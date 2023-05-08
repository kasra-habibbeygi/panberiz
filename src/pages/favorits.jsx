import ListVideo from '@/components/pages/video/list/list-video';
import LayoutProvider from '@/components/layout';
import HeaderField from '@/components/template/header';

const Favorits = () => {
    return (
        <LayoutProvider>
            <HeaderField title='لیست علاقه مندی ها' />
            <ListVideo></ListVideo>
        </LayoutProvider>
    );
};

export default Favorits;
