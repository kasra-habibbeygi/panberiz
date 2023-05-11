// Component
import VerifyForm from '@/components/pages/login/verify-form';
// import LoginForm from '@/components/pages/login/login-form';
import LoginLayout from '@/components/pages/login/layout';

const Login = () => {
    return (
        <LoginLayout title='کد تایید را وارد کنید'>
            {/* <LoginForm /> */}
            <VerifyForm />
        </LoginLayout>
    );
};

export default Login;
