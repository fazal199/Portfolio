"use client";
import Heading from '@/app/components/shared/Heading'
import SocialHandles from '@/app/components/shared/SocialHandles';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
const ContactPage = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleSubmit = async (e: any) => {
        e.preventDefault();


        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, access_key: process.env.NEXT_PUBLIC_WEB_FORM_ACCESS_KEY as string })
            })

            const data = await response.json();

            if (data.success) {
                e.target.reset();
                Swal.fire({
                    title: "Email Sent!",
                    text: "We will contact you soon!",
                    icon: "success"
                });
               
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Plzz try Later!",

                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Plzz Check Your Internet!",

            });

            console.log(error);

        }

    }
    return (
        <section className='border-2 py-2 slight-border mobile-sm:border'>
            <div className="py-5 px-4 bg-secondary  max-w-[95vw] mx-auto">
                <Heading content="Contact" />
                <div className="grid grid-cols-2 gap-12 mt-12 items-center py-5 mobile:grid-cols-1">
                    <div className="relative rounded-lg  shadow-xl mobile:px-5">
                        <img
                            loading='lazy'
                            src="/illustrations/contactillu.webp"
                            alt="Contact Us"
                            className="transition-transform  outline-4 outline-offset-8 outline outline-tertiary block mx-auto duration-300 max-h-[30rem] rounded-full transform hover:scale-105 mobile:max-h-[20rem]"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className='flex flex-wrap gap-7 items-center laptop:gap-2 mobile:justify-center'>
                            <h2 className="text-4xl font-bold text-quaternary pt-4 laptop:text-2xl ">Get in Touch:-</h2>
                            <SocialHandles/>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block font-semibold text-sm  text-quaternary mb-1">Name</label>
                                <input
                                    type="text"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    value={formData.name}
                                    placeholder="e.g. John Doe"
                                    required
                                    className="w-full px-4 py-2 text-quaternary border border-tertiary bg-primary rounded-md focus:ring-2 focus:ring-tertiary focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-semibold text-sm text-quaternary mb-1">Email</label>
                               
                                <input type="text"  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="e.g. myemail123@gmail.com" className='w-full text-quaternary bg-primary px-4 py-2 border border-tertiary rounded-md focus:ring-2 focus:ring-tertiary focus:border-transparent' />
                            </div>
                            <div>
                                <label htmlFor="message" className="block font-semibold text-sm  text-quaternary mb-1">Your Message</label>
                                <textarea

                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="How can we help you?"
                                    rows={4}
                                    value={formData.message}


                                    maxLength={100}
                                    required
                                    className="w-full px-4 py-2 border border-tertiary bg-primary shadow text-quaternary  rounded-md focus:ring-2 focus:ring-tertiary focus:border-transparent resize-none"
                                ></textarea>
                            </div>
                            <button type='submit' className="px-8 py-2 block w-full text-xl font-semibold rounded-md border-transparent bg-tertiary  text-quaternary  transition duration-200 active:bg-quaternary active:text-tertiary  hover:bg-transparent  border-2 hover:border-quaternary hover:text-tertiary">
                                Contact
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactPage
