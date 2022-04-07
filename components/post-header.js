import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Badge from "../components/badge";
import ReadEstimate from "../components/read-estimate";

export default function PostHeader({title, coverImage, date, tag, color, readTime}) {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage title={title} src={coverImage} height={620} width={1240}/>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 text-lg flex justify-start space-x-4">
                    <DateFormatter className="mx-2.5" dateString={date}/>
                    <Badge tag={tag} color={color}/>
                    <ReadEstimate readTime={readTime} />
                </div>
            </div>
        </>
    )
}
