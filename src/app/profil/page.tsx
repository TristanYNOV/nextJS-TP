import {getAllJobPostFromPrismic, getProfilPageFromPrismic} from "@/libs/prismicClient";
import SavedArticles from "@/app/profil/_components/savedArticles";
import HistoricPost from "@/app/profil/_components/historicPost";

export default async function ProfilPage() {
    const page = await getProfilPageFromPrismic();
    const allPost = await getAllJobPostFromPrismic();
    const title = page.data.welcome_title;

    const pageInfo = page.data;

    return (
        <div className="p-12">
            <h1 className="font-bold mb-8 text-4xl underline">{title}</h1>
            <main className="h-full overflow-y-auto flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="primary-text mb-2 text-[1.75rem]">{pageInfo.subtitle_1}</h2>
                    <SavedArticles existingPosts={allPost}/>
                </div>

                <div className="flex flex-col gap-8">
                    <h2 className="primary-text text-[1.75rem]">{pageInfo.subtitle_2}</h2>
                    <HistoricPost/>
                </div>
            </main>
        </div>
    );
}