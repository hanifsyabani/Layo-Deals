'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from "../ui/sidebar";
import { Fullscreen, Home, Logs, Settings, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ButtonLogout from "../button-logout";
import { useParams, usePathname } from "next/navigation";

interface SidebarAdminProps {
  store_name: string;
  store_id: string;
}

export default function SidebarAdmin({
  store_name,
  store_id,
}: SidebarAdminProps) {
  const params = useParams();
  const pathname = usePathname();
  const items = [
    {
      title: "Home",
      url: `/admin/store/${params.storeid}`,
      icon: Home,
      // active: pathname === "/",
    },
    {
      title: "Products",
      url: `/admin/store/${params.storeid}/products`,
      icon: ShoppingBasket,
      // active: pathname === `/admin/store/${params.storeid}/products`,
    },
    {
      title: "Banners",
      url: `/admin/store/${params.storeid}/banners`,
      icon: Fullscreen,
      // active: pathname === `/admin/store/${params.storeid}/banners`,
    },
    {
      title: "Categories",
      url: `/admin/store/${params.storeid}/categories`,
      icon: Logs,
      // active: pathname === `/admin/store/${params.storeid}/categories`,
    },

    {
      title: "Settings",
      url: `/admin/store/${store_id}/settings`,
      icon: Settings,
      // active: pathname === `/admin/store/${store_id}/settings`,
    },
  ];

  return (
    <Sidebar className="bg-white" side="left">
      <SidebarContent className="py-5 px-2 h-full">
        <Link
          href={`/admin/store/${store_id}`}
          className="flex items-center gap-2"
        >
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className="w-10"
          />
          <h1 className="text-xl font-bold">{store_name}</h1>
        </Link>

        <SidebarGroup className="flex-1">
          <SidebarGroupContent className="space-y-4">
            {items.map((item) => {
              const isActive = pathname === item.url;
              return(

              <Link
                href={item.url}
                key={item.title}
                className={`${
                  isActive ? "bg-primary text-white" : "bg-white hover:bg-gray-200"
                }  py-2 rounded-full px-3 cursor-pointer flex items-center gap-4`}
              >
                <item.icon size={25} />
                <span>{item.title}</span>
              </Link>
              )
            })}
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <ButtonLogout />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
