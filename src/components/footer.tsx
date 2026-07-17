import { personalInfo } from "@/data/personal";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 md:py-12">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by {personalInfo.name}. All rights reserved &copy; {new Date().getFullYear()}.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Link href={personalInfo.social.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <FaLinkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={personalInfo.social.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <FaTwitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-foreground">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
