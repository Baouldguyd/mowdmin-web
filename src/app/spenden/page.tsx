"use server"
import { redirect } from 'next/navigation';

const Page =  ()  => {
  return (
    redirect("/donate")
  )
}

export default Page;