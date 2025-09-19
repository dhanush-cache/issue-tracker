import React from "react";
import axios from "axios";
import { Issue } from "@/app/issues/page";
import { notFound } from "next/navigation";
import { Box, Grid } from "@radix-ui/themes";
import { EditIssueButton } from "@/app/issues/[id]/EditIssueButton";
import { IssueDetails } from "@/app/issues/[id]/issueDetails";

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
      <Grid columns={{ initial: "1", md: "2" }} gap="5">
        <Box>
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <EditIssueButton issue={issue} />
        </Box>
      </Grid>
    );
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) notFound();
    throw error;
  }
};

export default IssueDetail;
