import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function Page() {
  return (
    <>
    <Button asChild>
        <Link to='/add/restaurant'>
        Restaurant</Link></Button>
    <Button>Location</Button>
    </>
  )
}