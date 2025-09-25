import { NextPage } from 'next'

interface Props { }

const Page: NextPage<Props> = async ({ }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return <div>
        <h1>Users list</h1>
        <ul>
            {data.map((user: { id: number, name: string }) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
}

export default Page