"use client";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {useSavedPostStore} from "@/store/savedPost";
import {PostPageDocument} from "../../../prismicio-types";
import {useEffect, useState} from "react";

export default function SavingPost({post}: {post: PostPageDocument}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const savedPost = useSavedPostStore((state) => state.jobs);
    const updatePost = useSavedPostStore((state) => state.setJobs);

    const isAlreadyPin = savedPost.some(doc => post.uid === doc.uid);

    const handlePin = () => {
        updatePost(savedPost,post);
    }

    return ( mounted &&
        <button onClick={handlePin} className="cursor-pointer">
            { isAlreadyPin ? <BookmarkIcon/> : <BookmarkBorderIcon/>}
        </button>
    )
}