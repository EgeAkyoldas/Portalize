import RegisterForm from "./components/register-form"
import VideoPlayer from "./components/video-player"

export default function Home() {
  async function buttonHandler()
  {
    await fetch("http://localhost:3000/api/database", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({db: "users", col: "test", data: {data: 'data example'}})
    })
  }
  return (
    <div className="h-screen bg-fixed bg-center bg-cover bg-red-700 flex-row flex overflow-hidden">
      <div className="bg-zinc-900 h-screen min-w-max w-full flex flex-col place-items-start">
        <h1 className="text uppercase font-thin text-4xl">Portalize</h1>
        <h3 className="text uppercase font-bold text-4xl">Join Ecosystem</h3>
        <h3 className="text uppercase font-thin text-4xl">And Start Building Future</h3>
        <div id="register-form" className="w-48 ">
          <RegisterForm/>
        </div>
      </div>
      <div className="bg-white h-screen w-full">
        <VideoPlayer src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
      </div>
    </div>
  )
}


