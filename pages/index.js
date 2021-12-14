import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="absolute h-screen w-full bg-black">
      <Head>
        <title>Catedral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative md:mt-40 mt-24 left-0 right-0 m-auto bg-white w-4/5 h-1/2 p-2">
        <Image loading="eager" src="/guate.jpg" layout="fill" className="object-cover" />
      </div>
      <div className="absolute z-10 md:left-1/3 left-4 md:bottom-1/4 bottom-1/3">
        <div className="relative z-20 md:text-8xl text-3xl font-semibold text-white overflow-hidden">
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: '200%' }}
            className="md:h-28 pt-2"
            transition={{ type: 'linear', duration: 1 }}
          >
            Inmaculada Concepcion
          </motion.div>
        </div>
        <div
          className="relative z-10 md:text-4xl text-xl font-thin text-white overflow-hidden"
        >
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: '200%' }}
            className="md:h-12 -mt-2"
            transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }}
          >
            Catedral Huehuetenango
          </motion.div>
        </div>
      </div>
      {/* <div className="absolute z-10 text-9xl font-semibold text-white left-1/3 bottom-1/3">
        Inmaculada Concepcion
      </div> */}


      {/* <div className="bg-black w-full h-full"/> */}
    </div>
  )
}
