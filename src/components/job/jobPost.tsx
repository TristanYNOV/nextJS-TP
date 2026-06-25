import {PostPageDocument} from "../../../prismicio-types";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

export default function JobPost({job}: {job: PostPageDocument}) {
    const jobInfo = job.data;
    return (
        <article className="px-2 py-4 bg-white dark-text flex flex-col gap-3">
            <h3 className="flex justify-between items-center ">
                <span className="font-bold text-xl">{jobInfo.title}</span>
                <BookmarkBorderIcon/>
            </h3>
            <div className="flex gap-2 items-center primary-text">
                <CalendarMonthIcon/>
                <span>
                {jobInfo.job_date}
            </span>
            </div>

            <div className="flex gap-2 primary-text">
                <UnfoldMoreIcon className="rotate-90"/>
                <ul className="flex gap-2">
                    {job.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>
            <span className="text-wrap">
                {jobInfo.job_description}
            </span>
        </article>
    )
}