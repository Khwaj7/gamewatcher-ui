import Image from "next/image";
import styles from "./page.module.css";
import {AppSidebar} from "@/components/app-sidebar"
import {SidebarInset, SidebarProvider,} from "@/components/ui/sidebar"
import * as React from "react";

export default function Home() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="aspect-video rounded-xl bg-muted mt-6 ml-6">
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img className="w-full" src="/public/img/mock/inzoi-mock.png"
                                         alt="Sunset in the mountains"/>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                                            nulla! Maiores et
                                            perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span
                                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span
                                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                    </div>
                                </div>
                            </div>
                            <div className="aspect-video rounded-xl bg-muted/50"/>
                            <div className="aspect-video rounded-xl bg-muted/50"/>
                        </div>
                        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"/>
                    </div>
                </SidebarInset>
            </SidebarProvider>
            <footer className={styles.footer}>
                <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                v0.0.1
            </footer>
        </>
    );
}
