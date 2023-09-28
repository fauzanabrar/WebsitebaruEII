import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { madeForYouAlbums } from "@/data/albums";
import DashboardLayout from "@/layouts/DashboardLayouts";
import Lists from "@/components/lists";

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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                    Lists
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    list that can be scrolled horizontally
                  </p>
                </div>
                <Separator className="my-4" />
                <Lists listItems={madeForYouAlbums} canScroll={true} />
                <div className="mt-6 space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Grid List
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Grid list horizontally.
                  </p>
                </div>
                <Separator className="my-4" />
                <Lists listItems={madeForYouAlbums} canScroll={true} type="grid" />
              </TabsContent>
              <TabsContent
                value="list"
                className="h-full flex-col border-none p-0 data-[state=active]:flex"
              >
                <div className="mt-6 space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Lists
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    list that can be scrolled horizontally
                  </p>
                </div>
                <Separator className="my-4" />
                <Lists listItems={madeForYouAlbums} canScroll={true} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
