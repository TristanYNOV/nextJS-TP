"use client";
import JobPost from "@/components/job/jobPost";
import {useApplicationHistoricStore} from "@/store/jobsApplicationHistoric";

export default function HistoricPost() {
    const historicPosts = useApplicationHistoricStore((state) => state.applications);

    console.log(historicPosts);
    return ( historicPosts.length > 0 ?
            <div className="h-[45%] overflow-y-auto flex flex-col gap-2">
                {historicPosts.map(doc => (
                    <JobPost job={doc} key={doc.id}/>
                ))}
            </div> :
            <div className="ml-4">Veuillez sauvegarder au moins une annonce.</div>
    )
}
