"use client";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const validationForm = [
    {
        validation: 'email',
        error: 'enter valid Email id'
    },
    {
        validation: 'password',
        error: 'Passwordis Worng',
    }
]

export function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loginDta, setformData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const emailbtn = () => {

        let isValid = true;
        const newErrors: any = {};

        // Email validation
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(loginDta.email)) {
            newErrors.email = validationForm.find((v) => v.validation === "email")?.error;
            isValid = false;
        }

        if (loginDta.password.length < 7) {
            newErrors.password = validationForm.find((v) => v.validation === "password")?.error;
            isValid = false;
        }
        // console.log(newErrors)
        // console.log(errors)
         setErrors(newErrors);
        return isValid;
    }

    const handleSubmit = () => {
        if (emailbtn()) {
            alert("Form Submitted Successfully ✅");
            console.log(loginDta);
            // Submit form or call API here
        }
    }

    return (
        <Dialog>
            {/* <form> */}
            <DialogTrigger asChild>
                <Button variant="outline">Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <Input
                            className=" focus:outline focus:outline-[#ff4747] focus:rounded-sm p-2 focus-visible:ring-0 "
                            id="username-1"
                            name="username"
                            value={loginDta.email}
                            onChange={(text) => setformData({ ...loginDta, email: text.target.value })}
                            type="email" />
                           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="username-1">Username</Label>
                        <div className="relative w-full max-w-sm">
                            <Input
                                className="focus:outline focus:outline-[#ff4747] focus:rounded-sm p-2 focus-visible:ring-0 pr-10"
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="password"
                                value={loginDta.password}
                                onChange={(text) => setformData({ ...loginDta, password: text.target.value })}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                                >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" onClick={handleSubmit}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
            {/* </form> */}
        </Dialog>
    )
}
