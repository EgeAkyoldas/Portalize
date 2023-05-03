import { useEffect } from 'react';
import AudioPlayer from './components/audioPlayer'
import LiveSearch from "./components/liveSearch";
import React from 'react';

export default function Quote( props: { quote: string; src: string; name: string; }  ) {
    const [answer, setAnswer] = React.useState("")
    useEffect(() => {
      setAnswer("")
    }, [])
    return (
        <main className="h-screen bg-fixed bg-center bg-cover bg-red-700 flex-col flex overflow-hidden">
            <AudioPlayer src={props.src} quote={props.quote}/>
            <div className="mx-auto mt-12">
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
            </div>
        </main>
    )
}

export async function getServerSideProps() {
    try {
      let response = await fetch('http://localhost:3000/api/agents/astra');
      let ip = await fetch('http://localhost:3000/api/ip');
      let posts = await response.json();
      console.log(posts["url"]);
      return {
        props: { quote: JSON.parse(JSON.stringify(posts["url"][0].split(/\s*;\s*/)[0])),  src: JSON.parse(JSON.stringify(posts["url"][0].split(/\s*;\s*/)[1])), name: JSON.parse(JSON.stringify(posts["name"])) },
      };
    } catch (e) {
      console.error(e);
    }
  }