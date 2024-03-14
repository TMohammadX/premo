import Image from "next/image";
import Nav from './components/Nav'
import Main from './components/Main'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
      <Nav />
      <Main />
      
    </main>
  );
}
