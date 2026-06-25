"use client";
import {useSavedPostStore} from "@/store/savedPost";
import JobPost from "@/components/job/jobPost";
import {PostPageDocument} from "../../../../prismicio-types";
import {useEffect} from "react";

export default function SavedArticles({existingPosts}: {existingPosts: PostPageDocument[]}) {
    const savedPost = useSavedPostStore((state) => state.jobs);
    const updatePost = useSavedPostStore((state) => state.setJobs);


    useEffect(() => {
        const listOfInvalidPost: PostPageDocument[] = [];

        savedPost.forEach((postPinned) => {
            const doesPinExist = existingPosts.some(doc => doc.uid === postPinned.uid);
            if (!doesPinExist) {
                listOfInvalidPost.push(postPinned);
            }
        });

        if(listOfInvalidPost.length > 0) {
            listOfInvalidPost.forEach(invalidDoc => {
                updatePost(savedPost,invalidDoc);
            })
        }
    }, [savedPost, existingPosts]);

    return ( savedPost.length > 0 ?
        <div className="h-[45%] overflow-y-auto grid grid-cols-3 gap-2">
            {savedPost.map(doc => (
            <JobPost job={doc} key={doc.id}/>
            ))}
        </div> :
            <div className="ml-4">Veuillez sauvegarder au moins une annonce.</div>
    )
}
