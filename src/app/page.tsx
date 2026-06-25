import {getAllJobPostFromPrismic, getHomePageFromPrismic} from "@/libs/prismicClient";
import JobPost from "@/components/job/jobPost";
import Link from "next/link";

export default async function Home() {
    const jobsPostDocList = await getAllJobPostFromPrismic();
    const homePageDoc = await getHomePageFromPrismic();

    const restrictedList = jobsPostDocList.slice(0,5);

    const title = homePageDoc.data.page_title;

  return (
      <div className="p-12">
        <h1 className="font-bold text-4xl mb-8 underline">{title}</h1>
          <main className="h-[75%] overflow-y-auto grid grid-cols-3 gap-2">
              {restrictedList.map(doc => (
                      <JobPost job={doc} key={doc.id}/>
              ))}
          </main>
          <div className="flex justify-center mt-8">
              <Link href="/list" className="btn-primary light-text p-4">Voir toutes les offres</Link>
          </div>
      </div>
  );
}
