import LayoutProvider from '@/components/layout';
import Income from '@/components/pages/dashboard/income';
import Report from '@/components/pages/dashboard/report';

function Dashboard() {
    console.log(process.env.URL);

    return (
        <LayoutProvider>
            <Income />
            <Report />
        </LayoutProvider>
    );
}

export default Dashboard;
