/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/dashboard');
    }, []);
};

export default Index;
