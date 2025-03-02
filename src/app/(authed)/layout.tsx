import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SideAuth } from "@/components/SideAuth";


export async function generateMetadata(): Promise<Metadata> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return {
            title: "2025 journals",
            description: "2025 journals",
        }
    }

    return {
        title: `${user.user_metadata.full_name}'s Journal`,
        description: `Personal journal for ${user.user_metadata.full_name}`,
    };
}

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/signin");
    }

    return (
        <div className="grid grid-cols-[250px_1fr] ">
            <SideAuth />
            {children}
        </div>
    );
}
