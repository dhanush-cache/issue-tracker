import React from "react";
import axios from "axios";
import { Issue } from "@/app/issues/page";
import { notFound } from "next/navigation";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { IssueStatusBadge } from "@/app/components/IssueStatusBadge";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { id: string };
}

const IssueDetail = async ({ params }: Props) => {
  try {
    const response = await axios.get<Issue>(
      `http://127.0.0.1:8000/api/issues/${params.id}`,
    );
    const issue = response.data;
    return (
      <div>
        <Heading>{issue.title}</Heading>
        <Flex gap="3" my="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{new Date(issue.created_at).toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </div>
    );
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) notFound();
    throw error;
  }
};

export default IssueDetail;
