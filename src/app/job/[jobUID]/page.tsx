import {getJobByTFromPrismic} from "@/libs/prismicClient";
import Link from "next/link";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TagChips from "@/components/tags/tag";

export default async function JobByUID({params}: {params: Promise<{jobUID: string}>}) {
    const jobUID = await params.then(res => res.jobUID);

    const jobDoc = await getJobByTFromPrismic(jobUID);
    const jobInfo = jobDoc.data;

    const tags = jobDoc.tags;

    return (
        <div className="p-12">
            <Link href="/list" className="btn-primary flex gap-2 w-fit p-1 light-text text-md">
                <ChevronLeftIcon/>
                <span>Voir toutes les offres</span>
            </Link>
            <div className="flex mx-2 mt-6">
                <h1 className="font-bold text-4xl mb-8 underline">{jobDoc.data.title}</h1>
            </div>

            <main className="h-[75%]]">
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center primary-text">
                        <CalendarMonthIcon/>
                        <span>
                            {jobInfo.job_date}
                        </span>
                    </div>
                    <div className="flex gap-3 my-4 text-primary">
                        {tags.map(tag => (<TagChips key={tag} tag={tag}/>))}
                    </div>

                    <article className="text-ellipsis">
                        {jobInfo.job_description}
                    </article>
                </div>
            </main>
            <form className="flex flex-col gap-2 mt-4">
                <textarea className="border border-[var(--primary-color)] border-solid primary-text p-2">

                </textarea>
                <div className="flex justify-end light-text">
                    <button type="submit" className="btn-primary">Envoyer</button>
                </div>
            </form>

        </div>
    );
}