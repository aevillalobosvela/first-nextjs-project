import { NextPage } from 'next'
import Button from './button';

interface Props { }

const Page: NextPage<Props> = async ({ }) => {
    console.log("Server");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log(data);

    return (
        <div>
            otros
            <Button />
        </div>
    );
};

export default Page