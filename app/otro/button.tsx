"use client";
import { NextPage } from 'next'

interface Props { }

const Button: NextPage<Props> = ({ }) => {
    return <div>
        <button onClick={() => alert("Hello")}> Click</button>
    </div>
}

export default Button