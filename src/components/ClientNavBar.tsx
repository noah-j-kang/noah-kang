"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Briefcase, FileText, Code } from "lucide-react";

export function ClientNavBar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: Code },
    { name: 'Education', url: '#education', icon: FileText }
  ];

  return <NavBar items={navItems} />;
}
