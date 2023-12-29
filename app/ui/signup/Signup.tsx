import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'


const FormFieldsSchema = z
  .object({
    email: z.string().email(),
    password1: z
      .string()
      .min(7, { message: 'Must be at least 7 characters long' }),
    password2: z.string(),
  })
  .refine((data) => data.password1 === data.password2, {
    message: 'Passwords do not match',
  })

type FormFields = z.infer<typeof FormFieldsSchema>

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(FormFieldsSchema) })

  // const signUpWithEmail = async ({email, password}) => {
  //   'use server'

  //   const origin = headers().get('origin')
  //   // const email = formData.get('email') as string
  //   // const password = formData.get('passwordOne') as string
  //   // const password2 = formData.get('passwordTwo') as string
  //   const cookieStore = cookies()
  //   const supabase = createClient(cookieStore)

  //   // if (password !== password2) return
  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${origin}/auth/callback`,
  //     },
  //   })

  //   if (error) {
  //     return redirect('/login?message=Could not authenticate user')
  //   }

  //   return redirect('/login?message=Check email to continue sign in process')
  // }

  return (
    <div className="justify-center mt-12 grid justify-items-center md:mt-20">
      <Image
        className="mb-14 md:mb-20"
        src="/logo.svg"
        alt="icon"
        width={32}
        height={25.6}
      />
      <div className="h-auto bg-entertainment-semi-dark-blue rounded-xl md:rounded-3xl w-80 md:w-96">
        <div className="p-6 md:p-8">
          <h1 className="mb-6 text-3xl font-light text-entertainment-pure-white">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit((d) => console.log("Field values: ", d, "Errors: ", errors ))}>
            <input
              {...register('email')}
              // className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
              // placeholder="Email address"
              // required
            />
            <input
              {...register('password1')}
              // className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
              // placeholder="Password"
              // required
            />
            <input
              {...register('password2')}
              // className="block w-full pb-4 pl-4 mb-10 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
              // placeholder="Repeat Password"
              // required
            />
            <button
              className="w-full h-12 mb-6 text-sm font-light text-entertainment-pure-white hover:text-entertainment-dark-blue hover:bg-entertainment-pure-white bg-entertainment-red rounded-md"
              type="submit"
            >
              Create an account
            </button>
          </form>
          <p className="text-sm font-light text-center text-entertainment-pure-white">
            Already have an acccount?
            <Link className="ml-2 text-entertainment-red" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
