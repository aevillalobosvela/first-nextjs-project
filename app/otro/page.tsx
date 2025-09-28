"use client";
import { NextPage } from 'next'
import { useState } from 'react';
interface Props { }

async function makePostRequest() {
    const response = await fetch(`/api/hello`, {
        method: "POST",
        body: JSON.stringify({
            name: "Jsdhsson"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
}

const Page: NextPage<Props> = ({ }) => {
    const [message, setMessage] = useState("");

    const onClick = async () => {
        const data = await makePostRequest();
        setMessage(data.message);
    }


    return (
        <div>
            <h1>
                <button onClick={onClick}>
                    CLICK ME
                </button>
                <p>{message}</p>
            </h1>
        </div>
    );
};

export default Page