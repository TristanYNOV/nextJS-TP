import {getJobsListByTag} from "@/libs/prismicClient";
import WorkIcon from "@mui/icons-material/Work";
import Link from "next/link";
import JobPost from "@/components/job/jobPost";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default async function PostByTagPage({params}: {params: Promise<{tag: string}>}) {
    const tag = await params.then(res => res.tag);

    const jobsDoc = await getJobsListByTag(tag);
    const fitleredJobs = jobsDoc.filter(doc => doc.type === 'post_page');

    return (
        <div className="p-12">
            <Link href="/list" className="btn-primary flex gap-2 w-fit p-1 light-text text-md">
                <ChevronLeftIcon/>
                <span>Voir toutes les offres</span>
            </Link>
            <div className="flex justify-between mx-2 mt-6">
                <h1 className="font-bold text-4xl mb-8 underline">{tag}</h1>
                <div className="flex items-center gap-2">
                    <WorkIcon/>
                    <span>{jobsDoc.length} offres</span>
                </div>
            </div>

            <main className="h-[75%] overflow-y-auto grid grid-cols-3 gap-2">
                {fitleredJobs.map(doc => (
                    <Link href={doc.uid} key={doc.id}>
                        <JobPost job={doc}/>
                    </Link>
                ))}
            </main>
        </div>
    );
}