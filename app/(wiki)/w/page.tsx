import { redirect } from "next/navigation"

export default function WikiRoot() {
  return redirect(`/w/${process.env.FrontPage}`)
}
