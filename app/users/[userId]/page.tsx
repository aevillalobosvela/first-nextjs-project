import { notFound } from "next/navigation";

interface PageProps {
    params: {
        userId: string
    }
}

async function fetchUser(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    return user;
}

export default async function Page({ params }: PageProps) {
    const { userId } = await params
    const user = await fetchUser(userId);
    console.log(user)
    if (!user || Object.keys(user).length === 0) {
        console.log('notFound');
        notFound();
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>User ID: {userId}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    )
}
