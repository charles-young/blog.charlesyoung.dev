import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Badge from "../components/badge";
import ReadEstimate from "../components/read-estimate";

export default function PostPreview({
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
        <div>
            <div className="mb-5">
                <CoverImage
                    slug={slug}
                    title={title}
                    src={coverImage}
                    height={278}
                    width={556}
                />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link href={`/posts/${slug}`}>
                    <a className="hover:underline">{title}</a>
                </Link>
            </h3>
            <div className="text-lg mb-4 flex justify-start space-x-4">
                <DateFormatter dateString={date}/>
                <Badge tag={tag} color={color}/>
                <ReadEstimate readTime={readTime}/>
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
    )
}
