import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ListItem from "./list-item";
import { cn } from "@/lib/utils";
import { GridItem } from "./grid-item";

export default function Lists({
  listItems,
  canScroll = false,
  type = "list",
}: {
  listItems: any;
  canScroll?: boolean;
  type?: "list" | "grid";
}) {
  return (
    <div className="relative">
      <ScrollArea className={`h-${canScroll ? "80" : "auto"}`}>
        <div className="flex flex-wrap gap-2">
          {listItems?.map((item: any) => {
            if (type === "list") {
              return (
                <ListItem key={item.name} item={item} className="w-full" />
              );
            } else if (type === "grid") {
              return (
                <GridItem
                  key={item.name}
                  item={item}
                  className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              );
            }
          })}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
