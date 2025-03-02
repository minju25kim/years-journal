import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export async function HeaderAuth() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user ? (
        <div className="flex items-center gap-4">
            Hey, {user.email}!
            <Link href="/journals">Journals</Link>
        </div>
    ) : (
        <div className="flex gap-2">
            <button>
                <Link href="/signin">Sign in</Link>
            </button>
        </div>
    );
}
