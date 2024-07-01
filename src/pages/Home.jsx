import React , {useEffect,useState} from 'react';
import appwriteService from "../appwrite/config";
import { Container,PostCard } from '../components';

const Home = () => {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        appwriteService.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents);
            }
        }).catch((error) => {
            console.log(error);
        });
    },[])
    

    if(posts.length === 0){
        return (
            <div>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                <p className='text-2xl font-semibold'>Login To Read All Posts</p>
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    } else{
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post)=>{
                            <div className='p-2 w-1/4' key={post.$id}>
                                <PostCard {...post}/>
                            </div>
                        })
                    }
                </div>
            </Container>
        </div>
    )}
}

export default Home;