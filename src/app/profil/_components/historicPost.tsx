"use client";
import {useApplicationHistoricStore} from "@/store/jobsApplicationHistoric";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

export default function HistoricPost() {
    const historicPosts = useApplicationHistoricStore((state) => state.applications);

    return ( historicPosts.length > 0 ?
            <section className="h-[45%] overflow-y-auto flex flex-col gap-8">
                {historicPosts.map(doc => (
                    <article className="flex flex-col gap-2" key={doc.id}>
                        <div className="flex gap-2 items-center primary-text">
                            <CalendarMonthIcon/>
                            <span>{doc.data.job_date}</span>
                        </div>
                        <h3 className="text-xl font-bold">{doc.data.title}</h3>
                        <div className="flex items-center gap-3 primary-text">
                            <UnfoldMoreIcon className="rotate-90 text-xs"/>
                            {doc.tags.map(tag => (<span className="text-xs">{tag}</span>))}
                        </div>
                        <div>
                            {doc.data.job_description}
                        </div>
                        <div className="w-full border border-[var(--primary-color)]"></div>
                    </article>
                ))}
            </section> :
            <div className="ml-4">Veuillez sauvegarder au moins une annonce.</div>
    )
}
