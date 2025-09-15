import { Badge } from "@radix-ui/themes";

export type IssueStatus = "open" | "in_progress" | "closed";

interface Props {
  status: IssueStatus;
}

const statusMap: Record<
  IssueStatus,
  { label: string; color: "red" | "blue" | "green" }
> = {
  open: { label: "Open", color: "red" },
  in_progress: { label: "In Progress", color: "blue" },
  closed: { label: "Closed", color: "green" },
};

export const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};
