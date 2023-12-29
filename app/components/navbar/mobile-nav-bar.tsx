import { navLinks } from '@/app/constants';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavLinkProps {
  onClose: () => void;
  openSidebar: boolean;
}


const MobileNavBar = ({onClose, openSidebar}: NavLinkProps) => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  
  return (
    <div
      className={
        openSidebar
          ? "fixed inset-0 z-50 bg-white/5 backdrop-blur-sm block xl:hidden"
          : ""
      }
    >
      <div
        className={
          "w-80 bg-[white] text-black overflow-auto fixed bottom-0 top-0 border-r border-gray-200 shadow-xl transition-transform duration-300 delay-100 ease-in-out " +
          (openSidebar ? "-translate-x-0" : "translate-x-full")
        }
      >
        <div className="flex h-full w-full flex-col relative">
          {/* <img
            src="/icons/logo.png"
            alt=""
            className="h-16 mb-2 mt-16 w-full px-6"
          /> */}
          <div className="h-full overflow-y-auto">
          {navLinks.links.map((item, index) => {
                    const isActive = pathname.startsWith(item.route);

                    return (
                      <div
                        key={index}
                        className={
                          isActive
                            ? "border-l-4 border-primary text-primary"
                            : "border-l-4 border-transparent"
                        }
                      >
                        <Link as={item.route} href={item.route}>
                          <div
                            className={
                              "ml-6 py-2.5 pl-4 flex items-center flex-row gap-3 text-sm " +
                              (isActive ? "bg-[#fffafa] rounded-sm" : "")
                            }
                          >
                            {item.name}
                          </div>
                        </Link>
                      </div>
                    );
                  })}
          </div>

          <div className="px-8 mt-auto py-4 ml-2">
            <Link
              href={`/${path}/notifications`}
              className={
                "flex items-center flex-row justify-between cursor-pointer py-1 px-2 rounded-sm " +
                (pathname.startsWith("/human-resources/notifications") &&
                  "text-black")
              }
              onClick={onClose}
            >
              {/* <div className="flex items-center flex-row gap-3 cursor-pointer">
                <NotificationIcon />
                Notifications
              </div> */}
              <div className="w-7 h-7 p-1.5 text-xs rounded-full bg-[#fffafa] text-primary font-bold flex items-center justify-center mt-1">
                10 <sup>+</sup>
              </div>
            </Link>
            <div className="text-slate-500 text-xs mt-2.5">v1.0.0</div>
          </div>
          <div
            onClick={onClose}
            className="flex items-center justify-center p-2 absolute top-3 right-3"
          >
            <X className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavBar
