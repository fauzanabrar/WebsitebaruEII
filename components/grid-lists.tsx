import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { GridItem } from "./grid-item";

export default function GridLists({listItems, canScroll = false}: {listItems: any, canScroll?: boolean}) {
  return (
    <div className="relative">
    <ScrollArea className={`h-${canScroll ? '80' : 'auto'}`}>
      <div className="flex flex-wrap gap-4 pb-4">
        {listItems.map((item) => (
          <GridItem
            key={item.name}
            item={item}
            className="w-[150px]"
            aspectRatio="square"
            width={150}
            height={150}
          />
        ))}
      </div>
      <ScrollBar orientation="vertical" />
      </ScrollArea>
      </div>
  );
}