import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ListItem from "./list-item";

export default function Lists({listItems, canScroll = false}: {listItems: any, canScroll?: boolean}) {
  return (
    <div className="relative">
    <ScrollArea className={`h-${canScroll ? '80' : 'auto'}`}>
      <div className="flex flex-wrap gap-2">
        {listItems?.map((item: any) => (
          <ListItem
            key={item.name}
            item={item}
            className="w-full"
          />
        ))}
      </div>
      <ScrollBar orientation="vertical" />
      </ScrollArea>
      </div>
  );
}