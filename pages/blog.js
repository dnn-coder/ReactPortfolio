import Leyout from '../components/leyout';
import { posts } from '../profile'
import Link from 'next/link'

const PostCard = ({post}) => (
    <div className='col-md-4'>
        <div className="card ">
            <div className=" overflow">
                <img src={post.imageURL} className="card-img-top" alt="" />
            </div>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
            <button className='btn btn-light'>Read</button>
            </Link>
            </div>
        </div>
    </div>
)

const Blog = () => (
<Leyout footer = {false} title="My Blog" dark>
    <div className="row">
    {
        posts.map((post, i) => (
            <PostCard post={post} key={i}/>
        ))}
    </div>
</Leyout>
);

export default Blog;
