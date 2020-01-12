import Layout from "./../components/MyLayout/Layout";
import Link from "next/link";

const PostLink = (props) => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)

const Blog = () => {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="Hello-Next.js" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
        </Layout>
    )
}

export default Blog;