import { Link, Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function add() {
  return (
    <div>
        <Button asChild>
            <Link to='/add'>
            Back</Link></Button>
        <Outlet /></div>
  )
}