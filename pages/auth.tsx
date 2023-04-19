import Input from '@/components/input';
import Image from 'next/image';
import { useCallback, useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === 'login' ? 'register' : 'login'));
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')]  bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="w-full h-full z-10 relative">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="h-12 w-auto"
            width="256"
            height="69"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sing in' : 'Create an account'}
            </h2>
            <div className="flex flex-col gap-4 mb-6">
              {variant === 'register' && (
                <Input
                  label="Username"
                  onChange={(ev: any) => {
                    setName(ev.target.value);
                  }}
                  id="name"
                  type="text"
                  value={name}
                />
              )}

              <Input
                label="Email"
                onChange={(ev: any) => {
                  setEmail(ev.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev: any) => {
                  setPassword(ev.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full st-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sing up'}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? `First time using Netflix?` : 'Already have an account'}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer">
                {variant === 'login' ? 'Create and account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black lg:opacity-50 absolute top-0 right-0 left-0 bottom-0 z-0"></div>
    </div>
  );
};

export default Auth;