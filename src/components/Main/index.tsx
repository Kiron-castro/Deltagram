import React, {useState, useEffect} from 'react';

// make sure here we're talking about only "types" kkkkkkk
// if it was pure JS the line below wouldn't be necessary...
// import type {Dispatch, SetStateAction} from 'react';

import { Container, SideBar, TopBar, TopMain, MainWrapper, Post, MainContent  } from '../Layout/template';

import {getPostsWithUser} from '../../services/postService';

// types
import type {Post as PostType} from '../../types/Post';

const Main: React.FC = () => {
     const [isMenuHidden, setIsMenuHidden]=useState(true);
     const [posts, setPosts] = useState([] as PostType[]);

     const onClickMenu = ()=>{
          setIsMenuHidden(!isMenuHidden);
     }

     // once the component renders try to grab the list of posts
     useEffect(()=>{
          getPostsWithUser()
          .then(ret=>{
               setPosts(ret);
          })
     },[]);
     // the empty array above makes the "effect" to run once when the component renders on the screen (componentDidMount)

     let postsJSX:JSX.Element|JSX.Element[]=<h2>Loading posts</h2>;
     if(posts.length) {
          postsJSX=posts.map(elem=><Post key={elem.id} post={elem} />);
     }


  return (
      <Container>
           <TopBar onClickMenu={onClickMenu} />

           <MainWrapper>

                    <SideBar hidden={isMenuHidden} />

               <MainContent>
                    <TopMain />
                    <div>
                         {postsJSX}
                    </div>
               </MainContent>
           </MainWrapper>
      </Container>
  );
}

export default Main;
