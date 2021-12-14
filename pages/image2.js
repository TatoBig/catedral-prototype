import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Catedral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black h-screen">

        <div className="absolute h-screen w-full">
          <div className="relative md:mt-40 left-0 right-0 m-auto md:w-4/5 md:h-1/2 h-2/3">
            <Image priority alt="Imagen iglesia catedral" loading="eager" src="/iglesia2.png" layout="fill" className=" mix-blend-lighten object-[-400px] md:object-center object-cover" />
            <div
              className="absolute md:from-trasparent bg-gradient-to-t from-black h-4 to-transparent bottom-0 w-full text-white rounded-b"
            />
            <div
              className="absolute md:from-trasparent bg-gradient-to-r from-black h-full to-transparent bottom-0 w-4 text-white rounded-b"
            />
            <div
              className="absolute md:from-trasparent bg-gradient-to-l from-black h-full to-transparent right-0 w-4 text-white rounded-b"
            />
            <div
              className="absolute md:from-trasparent bg-gradient-to-b from-black h-4 to-transparent top-0 w-full text-white rounded-b"
            />
          </div>
        </div>
        <div className="absolute md:pl-40 pl-6 flex-col m-auto bottom-60">
          <div className="relative z-0 font-semibold overflow-hidden
          xl:text-8xl 
          lg:text-6xl
          md:text-5xl
          sm:text-4xl
          text-3xl text-white"
          >
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: '200%' }}
              className="pt-4"
              transition={{ type: 'linear', duration: 1 }}
            >
              Inmaculada Concepción
            </motion.div>
          </div>
          <div
            className="relative z-20 text-xl font-thin text-white overflow-hidden
          xl:text-4xl
          lg:text-2xl
          md:text-xl
          "
          >
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: '200%' }}
              className="-mt-2 md:py-1.5 py-1"
              transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }}
            >
              Catedral Huehuetenango
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
