import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import axios from "axios";
import {
  IssueStatus,
  IssueStatusBadge,
} from "@/app/components/IssueStatusBadge";

export interface Issue {
  id: number;
  title: string;
  status: IssueStatus;
  created_at: string;
}

export default async function IssuesPage() {
  const response = await axios.get<Issue[]>(
    "http://127.0.0.1:8000/api/issues/",
  );
  const issues = response.data;

  return (
    <div>
      <div className="mb-5">
        <Link href="/issues/new">
          <Button>New Issue</Button>
        </Link>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                {issue.title}
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {new Date(issue.created_at).toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
