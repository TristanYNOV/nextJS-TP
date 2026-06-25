import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";

export default async function Header() {
    return(
        <header className="bg-secondary light-text flex justify-between items-center px-4 h-12">
            <Link href={'/'} className="ml-4 text-xs">
                <div className="flex gap-2">
                    <div className="rotate-90">{'{]'}</div>
                    <span>D E V</span>
                </div>
            </Link>
            <AccountCircleIcon/>
        </header>
    )
}
