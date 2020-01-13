import Layout from "./../components/MyLayout/Layout";
import Link from "next/link";

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ]
}

const PostLink = ({item}) =>(
    <li key={item.id}>
        <Link href="/p/[id]" as={`/p/${item.id}`}>
            <a>{item.title}</a>
        </Link>
    </li>
    
)

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {
                    getPosts().map((item) => (
                        <PostLink key={item.id} item={item}/>
                    ))
                }
            </ul>
            <style jsx global>
               {
                   `
                    h1,a {
                        font-family: 'Arial';
                    }
                    ul {
                        padding: 0;
                    }
                    li {
                        list-style: none;
                        margin: 5px 0;
                    }
                    a {
                        text-decoration: none;
                        color: blue;
                    }
                    a:hover {
                        opacity: 0.6;
                    }
                   `
               }
            </style>
        </Layout>
    )
}