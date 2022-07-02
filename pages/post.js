import Leyout from "../components/leyout"
import {useRouter} from 'next/router'
import { posts } from '../profile'

const Post = () => {

    const router = useRouter();

    const currentPost = posts.filter(
        (post) => post.title === router.query.title
        )[0];
    return (
        <Leyout title={router.query.title} footer={false} >
                        <div className="text-center">
                            <img src={currentPost.imageURL} style={{ width: '50%'}} classNfame="img-fluid" alt="" />
                            <p>{currentPost.content}</p>
                        </div>
                    </Leyout>
    )
}

export default Post;