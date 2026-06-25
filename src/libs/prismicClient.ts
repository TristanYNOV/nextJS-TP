import {createClient} from "@/prismicio";

const client = createClient();

export async function getAllJobPostFromPrismic() {
    return client.getAllByType('post_page');
}

export async function getHomePageFromPrismic() {
    return client.getSingle('home_page');
}
