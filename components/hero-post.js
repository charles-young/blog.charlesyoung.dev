import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import Badge from "../components/badge";
import ReadEstimate from "./read-estimate";

export default function HeroPost({
                                     title,
                                     coverImage,
                                     date,
                                     excerpt,
                                     slug,
                                     tag,
                                     color,
                                     readTime
                                 }) {
    return (
        <section>
            <div className="mb-8 md:mb-16">
                <CoverImage
                    title={title}
                    src={coverImage}
                    slug={slug}
                    height={620}
                    width={1240}
                />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <Link href={`/posts/${slug}`}>
                            <a className="hover:underline">{title}</a>
                        </Link>
                    </h3>
                    <div className="text-lg mb-4 flex justify-start space-x-4">
                        <DateFormatter dateString={date}/>
                        <Badge tag={tag} color={color}/>
                        <ReadEstimate readTime={readTime}/>
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                </div>
            </div>
        </section>
    )
}
