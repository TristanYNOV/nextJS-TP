import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";

export default async function Header() {
    return(
        <header className="bg-secondary light-text flex justify-between items-center px-4 h-12">
            <Link href={'/'} className="ml-4">
                Logo
            </Link>
            <AccountCircleIcon/>
        </header>
    )
}
