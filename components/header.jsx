import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Butterfly_Kids } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ChevronDown, FileText, GraduationCap, Layout, LayoutDashboard, PenBox, StarIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {

  await checkUser();
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 '>
      <nav className='container mx-auto px-4 h-16 items-center flex justify-between'>
        <Link href="/">
          <Image
            src="/logo3.png"
            alt="Logo"
            width={140}
            height={80}
            className="cursor-pointer h-12 md:h-16 py-1 w-auto object-contain"
          />
        </Link>

        <div className='flex items-center space-x-2  md:space-x-4'>
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant={"outline"}><LayoutDashboard />
                <span className='hidden md:block'>Industry Insights</span></Button>
            </Link>
          

          <DropdownMenu>
            <DropdownMenuTrigger><Button>
              <StarIcon className='h-4 w-4' />
              <span className='hidden md:block'>Growth Tools</span>
              <ChevronDown className='h-4 w-4' />
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"} className='flex items-center gap-2' >
                  <FileText />
                  <span>Build Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem><Link href={"/ai-cover-letter"} className='flex items-center gap-2' >
                <PenBox />
                <span>Cover Letter</span>
              </Link>
              </DropdownMenuItem>
              <DropdownMenuItem><Link href={"/interview"} className='flex items-center gap-2' >
                <GraduationCap />
                <span>Interview Prep</span>
              </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant={"outline"}>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
            appearance={{
              elements:{
                avatarBox:"w-10 h-10",
                userButtonPopoverCard:"shadow-xl",
                userPreviewMainIdentifier:"font-semibold",
              }
            }}
            afterSignOutUrl='/'
            />
          </SignedIn>
        </div>
      </nav>

    </header>
  )
}

export default Header
