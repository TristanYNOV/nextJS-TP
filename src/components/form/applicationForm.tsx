'use client'

import { useActionState } from 'react'
import {ApplicationFormState, submitApplication} from "@/actions/submitForm";

type ApplicationFormProps = {
    jobUID: string
}

const initialState: ApplicationFormState = {
    status: 'idle',
    message: '',
}

export default function ApplicationForm({jobUID}: ApplicationFormProps) {
    const [state, formAction, isPending] = useActionState(submitApplication, initialState,);

    return (
        <form
            action={formAction}
            className="mt-4 flex flex-col gap-2">
            <input type="hidden" name="jobUID" value={jobUID}/>
            <label htmlFor="application-message">Votre message</label>

            <textarea
                id="application-message"
                name="message"
                required
                className="min-h-32 border border-solid border-[var(--primary-color)] p-2 primary-text"
                placeholder="Présentez votre candidature..."/>

            <div className="flex justify-end light-text">
                <button
                    type="submit"
                    disabled={isPending}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-50">
                    {isPending ? 'Envoi en cours...' : 'Envoyer'}
                </button>
            </div>

            {state.message && (
                <p role="status"
                    aria-live="polite"
                    className={
                        state.status === 'success'
                            ? 'text-green-600'
                            : 'text-red-600'
                    }>
                    {state.message}
                </p>
            )}
        </form>
    )
}