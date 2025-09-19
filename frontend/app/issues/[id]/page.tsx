import React from "react";
import axios from "axios";
import { Issue } from "@/app/issues/page";
import { notFound } from "next/navigation";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { IssueStatusBadge } from "@/app/components";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

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
      <Grid
        columns={{
          initial: "1",
          md: "2",
        }}
        gap="5"
      >
        <Box>
          <Heading>{issue.title}</Heading>
          <Flex gap="3" my="2">
            <IssueStatusBadge status={issue.status} />
            <Text>{new Date(issue.created_at).toDateString()}</Text>
          </Flex>
          <Card className="prose" mt="4">
            <ReactMarkdown>{issue.description}</ReactMarkdown>
          </Card>
        </Box>
        <Box>
          <Link href={`/issues/${params.id}/edit`}>
            <Button>
              <Pencil2Icon />
              Edit Issue
            </Button>
          </Link>
        </Box>
      </Grid>
    );
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) notFound();
    throw error;
  }
};

export default IssueDetail;
