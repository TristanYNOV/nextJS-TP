import {
    getAllJobPostFromPrismic,
    getAllTagsFromPrismic,
    getListPageFromPrismic
} from "@/libs/prismicClient";
import Link from "next/link";
import JobPost from "@/components/job/jobPost";
import WorkIcon from "@mui/icons-material/Work";
import TagChips from "@/components/tags/tag";

export default async function ListPage() {
    const jobsPostDocList = await getAllJobPostFromPrismic();
    const listPageDoc = await getListPageFromPrismic();
    const tagsList = await getAllTagsFromPrismic();

    const jobsLength = jobsPostDocList.length;

    const title = listPageDoc.data.title_list;

    return (
        <div className="p-12">
            <div className="flex justify-between mx-2">
                <h1 className="font-bold text-4xl mb-8 underline">{title}</h1>
                <div className="flex items-center gap-2">
                    <WorkIcon/>
                    <span>{jobsLength} offres</span>
                </div>
            </div>
            <div className="flex gap-3 my-4 text-primary">
                {tagsList.map(tag => (<TagChips key={tag} tag={tag} />))}
            </div>
            <main className="h-[75%] overflow-y-auto grid grid-cols-3 gap-2">
                {jobsPostDocList.map(doc => (
                    <Link href={doc.uid} key={doc.id}>
                        <JobPost job={doc} />
                    </Link>
                ))}
            </main>
        </div>
    );
}