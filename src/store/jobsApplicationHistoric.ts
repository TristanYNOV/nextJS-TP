import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import {PostPageDocument} from "../../prismicio-types";
import {getJobByUIDFromPrismic} from "@/libs/prismicClient";

interface SavedJobsState {
    applications: PostPageDocument[],
    addApplication: (jobUID: string) => void
}

export const useApplicationHistoricStore = create<SavedJobsState>()(
    persist(
        (set, get) => ({
            applications: [],
            addApplication: async (jobUI) => {
                const postDoc = await getJobByUIDFromPrismic(jobUI);
                set({applications: [...get().applications,postDoc]})
            },
        }),
        {
            name: 'historicApplication-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)