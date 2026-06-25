'use server'

import {getJobByUIDFromPrismic} from "@/libs/prismicClient";

export type ApplicationFormState = {
    status: 'idle' | 'success' | 'error'
    message: string
}

export async function submitApplication(
    previousState: ApplicationFormState,
    formData: FormData,
): Promise<ApplicationFormState> {
    const jobUID = formData.get('jobUID');
    const applicationMessage = formData.get('message');

    if (
        typeof jobUID !== 'string' ||
        typeof applicationMessage !== 'string'
    ) {
        return {
            status: 'error',
            message: 'Les données du formulaire sont invalides.',
        };
    }

    const jobDoc = await getJobByUIDFromPrismic(jobUID);
    const jobsEmail = jobDoc.data.emails.map(email => email.email);

    const sanitizedMessage = applicationMessage.trim()

    if (!sanitizedMessage) {
        return {
            status: 'error',
            message: 'Veuillez saisir un message.',
        }
    }

    try {
        console.log({
            emails: jobsEmail,
            message: sanitizedMessage,
        })

        return {
            status: 'success',
            message: 'Votre candidature a bien été envoyée.',
        }
    } catch (error) {
        console.error('Erreur lors de l’envoi de la candidature :', error)

        return {
            status: 'error',
            message: "Une erreur est survenue lors de l'envoi.",
        }
    }
}