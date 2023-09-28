import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 
export function InputFile() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 my-4">
      <Input type="file" />
      <Button type="submit">Upload</Button>
    </div>
  )
}