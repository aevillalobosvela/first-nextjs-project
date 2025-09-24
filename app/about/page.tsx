"use client";
import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  console.log("Server or client")
  return <div>About page</div>
}

export default Page