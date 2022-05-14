import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Login from "../components/Login"
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
 const {isAuthenticated, logout} =useMoralis();
  if (!isAuthenticated) return <Login />;
    return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-br from-black to-fuchsia-700 overflow-hidden">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="max-w-screen-2xl mx-auto">
            <Header />
            <Messages />
        </div>
      </div>
    </div>
  )
}
