import Leyout from '../components/leyout';
import Link from 'next/link'
const custom404 = () => (
    <Leyout>
        <div className='text-center'>
        <h1>404</h1>
        <p>This page does not exist. Please return to 
        <Link href="/home">
        <a> Home</a>
        </Link>
        </p> 
        </div>
    </Leyout>
);
export default custom404;
