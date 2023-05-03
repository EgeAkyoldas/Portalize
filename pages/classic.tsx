import LiveSearch from './components/liveSearch'
import Header from './components/header'
import {useState} from 'react';

type Data = {
  _id: String;
  agent: String;
}


export default function Classic() {
    return (
        <main className="h-screen bg-fixed bg-center bg-cover bg-red-700 flex-col flex overflow-hidden">
          <Header/>
          <div className='mx-auto'>
              <LiveSearch 
                searches = {[
                  {icon:"/ascent.jpg", text:"Sage"},
                  {icon:"/ascent.jpg", text:"Bastion"},
                  {icon:"/ascent.jpg", text:"Raze"},
                  {icon:"/ascent.jpg", text:"Phoenix"},
                  {icon:"/ascent.jpg", text:"Jett"}
                ]}
                showWrongAnswers = {true}
              />
              <div id=''></div>
            </div>
        </main>
    )
}

export async function getServerSideProps() {
  try {
    let response = await fetch('http://localhost:3000/api/getData');
    let posts = await response.json();
    console.log(posts);
    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) },
    };
  } catch (e) {
    console.error(e);
  }
}