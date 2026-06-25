import {PostPageDocument} from "../../../prismicio-types";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Link from "next/link";
import SavingPost from "@/components/Bookmark/bookmark";

export default function JobPost({job}: {job: PostPageDocument}) {
    const jobInfo = job.data;
    return (
        <article className="h-64 px-2 py-4 bg-white dark-text flex flex-col gap-3">
            <div className="flex justify-between items-center ">
                <Link href={`/job/${job.uid}`}>
                    <h3 className="font-bold text-xl">{jobInfo.title}</h3>
                </Link>
                <SavingPost post={job}/>
            </div>
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
                        <Link href={`/tags/${tag}`} key={tag}>
                            <li>{tag}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <span className="text-ellipsis">
                {jobInfo.job_description}
            </span>
        </article>
    );
}