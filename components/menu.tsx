import {
  Menubar,
} from "@/components/ui/menubar";

export function Menu() {
  return (
    <Menubar className="justify-end rounded-none border-b border-none px-2 lg:px-4">
      <a href="#" className="px-2 py-1.5 text-sm font-semibold">Login</a>
      <a href="#" className="px-2 py-1.5 text-sm font-semibold">Register</a>
    </Menubar>
  );
}
