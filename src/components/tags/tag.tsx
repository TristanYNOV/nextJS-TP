import Link from "next/link";

export default function TagChips({tag}: {tag: string}) {
    return (
        <Link href={`/tags/${tag}`} className="px-1 py-2 border border-[var(--primary-color)] border-2 text-xs primary-text">
            <span>{tag}</span>
        </Link>
    )
}