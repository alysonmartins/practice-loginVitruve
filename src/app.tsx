import { AppleLogo, EnvelopeSimple, EyeSlash, GoogleLogo, LockSimple } from "@phosphor-icons/react"
import logoV from "/logoV.png"
import vitruve from "/logo-negro.webp"

export function App() {

  return (
    <>
      <div className="absolute h-screen w-screen bg-header-bg bg-no-repeat  bg-cover text-white">

        <div className="absolute bg-black/70 h-screen w-screen" />

        <div className="flex flex-col w-1/3 bg-black/20 backdrop-blur-md h-full justify-center">
          <div className="space-y-8 px-16">
            <div className="space-y-2">
              <img src={logoV} className="size-10" alt="" />
              <h1 className="font-bold">Welcome back</h1>
              <p className="text-zinc-600">VITRUVE is the VBT device every S&C COACH needs to reach their athlete"s maximum performace</p>
            </div>

            <form className="flex flex-col gap-10 text-zinc-500 ">

              <div className="flex flex-col bg-zinc-900 py-3 px-5 rounded-xl gap-4">

                <div className="flex gap-3 items-center">
                  <EnvelopeSimple className="size-5" />
                  <input type="email" placeholder="Email" className="bg-transparent flex-1 outline-none text-zinc-500 placeholder:text-zinc-500" />
                </div>

                <div className="border-b border-zinc-700/20" />

                <div className="flex gap-3 items-center">
                  <LockSimple className="size-5" />
                  <input type="password" placeholder="Password" className="bg-transparent flex-1 outline-none text-zinc-500 placeholder:text-zinc-500" />
                  <EyeSlash className="cursor-pointer size-5 fill-emerald-300" weight="fill" />
                </div>

              </div>

              <button className="bg-zinc-800 rounded-lg p-2 text-zinc-500 font-semibold">
                Sign In
              </button>

            </form>


            <div className="flex items-center gap-2 text-zinc-400">
              <div className="flex-1 bg-zinc-600 h-px" />
              <span className="">Or sign in with</span>
              <div className="flex-1 bg-zinc-600 h-px" />
            </div>


            <div className="flex gap-2">
              <button className="flex py-2 bg-zinc-900 rounded-lg flex-1 items-center justify-center gap-3 font-semibold">
                <AppleLogo className="size-5" weight="fill" />
                Apple
              </button>
              <button className="flex py-3 bg-zinc-900 rounded-lg flex-1 items-center justify-center gap-3 font-semibold">
                <GoogleLogo className="size-5" />
                Google
              </button>
            </div>

            <div>
              <p className="text-zinc-500">Don"t have an account? <a href="#" className="text-emerald-300">Sign up</a></p>
              <a href="#">Forgot your password?</a>
            </div>

            <footer>
              <p className="text-zinc-500">By signing in, you agree to Vitruve <a href="#" className="text-emerald-300">terms and conditions</a></p>
            </footer>

          </div>

        </div >
        <img src={vitruve} alt="" className="invert w-40 absolute bottom-5 right-5" />
      </div >
    </>
  )
}


