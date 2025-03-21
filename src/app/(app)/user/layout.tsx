import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NavUser from "@/components/user/nav-user";
import { SidebarCart } from "@/components/user/sidebar-cart";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { ShoppingCart } from "lucide-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  if (!userId) redirect("/login");
  if (session?.user.role !== "user") redirect("/login");

  const category = await db.category.findMany();
  return (
    <SidebarProvider>
      <div className="w-full">
        <NavUser category={category} />
        <div className="pt-32 px-4">{children}</div>
      </div>
      <SidebarCart />
    </SidebarProvider>
  );
}
