import { Issue } from "@/app/issues/page";
import Link from "next/link";
import { Button } from "@radix-ui/themes";
import { Pencil2Icon } from "@radix-ui/react-icons";
import React from "react";

export function EditIssueButton(props: { issue: Issue }) {
  return (
    <Button asChild>
      <Link href={`/issues/${props.issue.id}/edit`}>
        <Pencil2Icon />
        Edit Issue
      </Link>
    </Button>
  );
}
