import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {getAllPosts} from '../lib/api'
import Head from 'next/head'

export default function Index({allPosts}) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <>
            <Layout>
                <Head>
                    <title>Blog | Charles Young</title>
                </Head>
                <Container>
                    <Intro/>
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                            tag={heroPost.tag}
                            color={heroPost.color}
                            readTime={readingTimeInMinutes(heroPost.content)}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
                </Container>
            </Layout>
        </>
    )
}

export function readingTimeInMinutes(content) {
    return Math.round(content.split(' ').length / 200); // num of words divided by average reading rate
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'tag',
        'color',
        'content'
    ])

    return {
        props: {allPosts},
    }
}
