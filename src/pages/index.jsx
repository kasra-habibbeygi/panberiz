/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('pmlmToken') !== null) {
            router.push('/dashboard');
        } else {
            router.push('/login');
        }
    }, []);
};

export default Index;
