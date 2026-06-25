import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import {PostPageDocument} from "../../prismicio-types";

interface SavedJobsState {
    jobs: PostPageDocument[],
    setJobs: (state: PostPageDocument[], targetJob: PostPageDocument) => void
}

export const useSavedPostStore = create<SavedJobsState>()(
    persist(
        (set) => ({
            jobs: [],
            setJobs: (state, tJob) => {
                const indexOfTarget = state.findIndex(jobState => jobState.uid === tJob.uid);

                if(indexOfTarget < 0) {
                    set({jobs: [...state, tJob]});
                } else {
                    const newState = state.filter((_, index) => index !== indexOfTarget);
                    set({jobs: [...newState]})
                }
            },
        }),
        {
            name: 'job-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)