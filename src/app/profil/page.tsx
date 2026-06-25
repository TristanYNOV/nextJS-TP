import {getProfilPageFromPrismic} from "@/libs/prismicClient";
import SavedArticles from "@/app/profil/_components/savedArticles";

export default async function ProfilPage() {
    const page = await getProfilPageFromPrismic();
    const title = page.data.welcome_title;

    const pageInfo = page.data;

    return (
        <div className="p-12">
            <h1 className="font-bold text-4xl mb-8 underline">{title}</h1>
            <main className="h-full overflow-y-auto flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="primary-text text-xl mb-2">{pageInfo.subtitle_1}</h2>
                    <SavedArticles/>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="primary-text text-xl mb-2">{pageInfo.subtitle_2}</h2>
                </div>
            </main>
        </div>
    );
}