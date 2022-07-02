import Navbar from './navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import classNames from 'classnames';

const Leyout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      NProgress.start();
    };

    router.events.on('routerChangeStart', handleRouteChange);
    router.events.on('routerChangeComplete', () => NProgress.done());

    return () => {
      router.events.off('routerChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <div className={classNames({ 'bg-dark': dark, 'bg-light': !dark })}>
      <Navbar />
      <main className="container py-4">
        {title && (
          <h1 className={classNames('text-center', { 'text-light': dark })}>
            {title}
          </h1>
        )}

        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Danny Vivas Portfolio</h1>
            <p>2015 - {new Date().getFullYear()}</p>
            <p>All rights Reserverd</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Leyout;
