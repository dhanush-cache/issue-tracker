import { Issue } from "@/app/issues/page";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { IssueStatusBadge } from "@/app/components";
import ReactMarkdown from "react-markdown";
import React from "react";

export function IssueDetails(props: { issue: Issue }) {
  return (
    <>
      <Heading>{props.issue.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={props.issue.status} />
        <Text>{new Date(props.issue.created_at).toDateString()}</Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkdown>{props.issue.description}</ReactMarkdown>
      </Card>
    </>
  );
}
