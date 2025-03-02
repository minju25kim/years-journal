import { signOutAction } from "@/app/actions";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export async function SideAuth() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();
    const day = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return user && (
        <div className="flex flex-col gap-4 border border-gray-300">
            <Link href="/journals">Journals</Link>
            <ol>
                {days.map((item, index) => (
                    <li key={index} className={index === day ? "text-blue-500" : ""}>
                        <Link href={`/journals/${item.toLowerCase()}`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ol>
            <Link href="/settings">Settings</Link>
            <form action={signOutAction}>
                <button type="submit">
                    Sign out
                </button>
            </form>
        </div>
    )
}
