import React from "react";
import { Button } from "@radix-ui/themes";
import { Link } from "../../../node_modules/@radix-ui/themes/dist/cjs/index";

const IssuesPage = () => {
    return (
        <div><Button><Link href="/issues/new">New Issue</Link></Button></div>
    )
}

export default IssuesPage