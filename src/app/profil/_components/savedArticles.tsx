"use client";
import {useSavedPostStore} from "@/store/savedPost";
import JobPost from "@/components/job/jobPost";

export default function SavedArticles() {
    const savedPost = useSavedPostStore((state) => state.jobs);

    return ( savedPost.length > 0 ?
        <div className="h-[45%] overflow-y-auto grid grid-cols-3 gap-2">
            {savedPost.map(doc => (
            <JobPost job={doc} key={doc.id}/>
            ))}
        </div> :
            <div className="ml-4">Veuillez sauvegarder au moins une annonce.</div>
    )
}
