import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Users from "../components/users";
import Detail from '../components/Detail'

const Home = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handlerIsOpen = () => {
    setIsOpen(true)
  }
  const handlerIsClose = () => {
    setIsOpen(false)
  }
  return (
    <div className="relative top-0 left-0 h-full w-full">
      <div className="bg-[url('/background.webp')] w-full h-full absolute bg-cover bg-no-repeat z-auto"></div>
    <div className="h-full w-full">
      
      <Head>
        <link rel="prefetch" />
        <link rel="preconnect" type="text/html" href="/background.webp" />
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center z-10 relative text-white py-[5%]">
        <h1 className="text-6xl font-bold ">Next.js {"&"} GraphQL</h1>
        <div>Data: </div>
        <h2 className="text-6xl font-bold">Users</h2>
        <div className="">
          <Users />
          <div className="w-full h-full grid grid-cols-3 gap-[2%]">
            {data.map((user) => (
              <button
                type="button"
                className=" relative border-[1px] rounded-md bg-white text-green-600 uppercase overflow-hidden"
                key={user.name}
                onClick={handlerIsOpen}
              >
                <div className="relative top-0 left-0">
                  <Image
                    src={user.avatar}
                    className="absolute top-0 left-0 object-cover"
                    height={250}
                    width={320}
                    priority
                    alt=""
                  />
                </div>
                <div className="w-full flex justify-between items-start p-[3%] ">
                  <span>{user.name}</span>
                  <span>{user.age}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

    </div>
    {isOpen && (<Detail handlerIsClose={handlerIsClose}/>)}
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3005/items`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Home;
