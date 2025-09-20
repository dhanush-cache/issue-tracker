import { Button } from "@radix-ui/themes";
import { Issue } from "@/app/issues/page";
import { TrashIcon } from "@radix-ui/react-icons";

export const DeleteIssueButton = (props: { issue: Issue }) => {
  return (
    <Button color="red">
      <TrashIcon />
      Delete Issue
    </Button>
  );
};
