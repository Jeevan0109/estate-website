import Link from "next/link";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
const navList = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
    {
        name: "Contact",
        href: "/contact",
    },
]

export function Navigation() {
    return (
        <nav className="fixed w-screen px-4 top-2 z-50">
            <div className="container py-3 flex items-center justify-between bg-background rounded-md z-50">
                <p className="font-bold italic">Estate</p>
                <ul className="flex items-center gap-4">
                    {
                        navList.map((item) => (
                            <li key={item.name}>
                                <Link className="text-muted-foreground hover:text-primary hover:underline" href={item.href}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <Avatar>
                        <AvatarImage src="" alt="@shadcn" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </nav>
    );
}