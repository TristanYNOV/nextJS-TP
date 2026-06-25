import {getAllJobPostFromPrismic, getHomePageFromPrismic} from "@/libs/prismicClient";
import JobPost from "@/components/job/jobPost";

export default async function Home() {
    const jobsPostDocList = await getAllJobPostFromPrismic();
    const homePageDoc = await getHomePageFromPrismic();

    const title = homePageDoc.data.page_title;

  return (
      <div className="p-12">
        <h1 className="font-bold text-4xl mb-8">{title}</h1>
          <main className="h-[75%] overflow-y-auto grid grid-cols-3 gap-2">
              {jobsPostDocList.map(doc => (
                  <JobPost job={doc} key={doc.id}/>
              ))}
          </main>
          <div className="flex justify-center mt-8">
              <button className="btn-primary light-text">Voir toutes les offres</button>
          </div>
      </div>
  );
}
