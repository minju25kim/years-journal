"use client";
import { signInAction } from "@/app/actions";

export default function SignIn() {

    const handleGoogle = async () => {
        signInAction();
    }

    return (
        <div onClick={handleGoogle}> google</div>
    );
}
