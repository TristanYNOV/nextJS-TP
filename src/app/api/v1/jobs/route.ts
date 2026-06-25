import { NextResponse } from 'next/server'
import { getAllJobPostFromPrismic } from '@/libs/prismicClient'

export async function GET() {
    const allJobs = await getAllJobPostFromPrismic()

    const latestJobs = allJobs
        .toSorted((jobA, jobB) => {
            const dateA = new Date(jobA.last_publication_date).getTime()
            const dateB = new Date(jobB.last_publication_date).getTime()

            return dateB - dateA
        })
        .slice(0, 3)

    return NextResponse.json({
        status: 200,
        jobs: latestJobs,
    })
}