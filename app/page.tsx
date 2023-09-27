import { Metadata } from "next";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AlbumArtwork } from "@/components/album-artwork";
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder";
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums";
import DashboardLayout from "@/layouts/DashboardLayouts";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

export default function HomePage() {
  return (
    <>
      <DashboardLayout>
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">
            <Tabs defaultValue="upload" className="h-full space-y-6">
              <div className=" flex items-center">
                <TabsList>
                  <TabsTrigger value="upload" className="relative">
                    Upload
                  </TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
                <div className="ml-auto mr-4">
                  <Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-plus -ml-1 mr-1"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                      Upload File
                  </Button>
                </div>
              </div>
              <TabsContent
                value="upload"
                className="border-none p-0 outline-none"
              >
                <div className="mt-6 space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Made for You
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Your personal playlists. Updated daily.
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    <div className="flex flex-wrap gap-4 pb-4">
                      {madeForYouAlbums.map((album) => (
                        <AlbumArtwork
                          key={album.name}
                          album={album}
                          className="w-[150px]"
                          aspectRatio="square"
                          width={150}
                          height={150}
                        />
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent
                value="list"
                className="h-full flex-col border-none p-0 data-[state=active]:flex"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      New Episodes
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Your favorite podcasts. Updated daily.
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <PodcastEmptyPlaceholder />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
