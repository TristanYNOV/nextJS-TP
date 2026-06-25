import {createClient} from "@/prismicio";

const client = createClient();
// -----------------------------------
// GET JOBS
export async function getAllJobPostFromPrismic() {
    return client.getAllByType('post_page');
}

export async function getJobByTFromPrismic(uid: string) {
    return client.getByUID('post_page',uid);
}

// -----------------------------------
// GET PAGES
export async function getHomePageFromPrismic() {
    return client.getSingle('home_page');
}

export async function getListPageFromPrismic() {
    return client.getSingle('list_page');
}

export async function getProfilPageFromPrismic() {
    return client.getSingle('profil_page');
}

// -----------------------------------
// GET TAGS
export async function getAllTagsFromPrismic() {
    return client.getTags();
}

export async function getJobsListByTag(tag: string) {
    return client.getAllByTag(tag);
}


