import React from "react";
import axios from "axios";
import { Issue } from "@/app/issues/page";
import { notFound } from "next/navigation";

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
        <p>{issue.title}</p>
        <p>{issue.description}</p>
        <p>{issue.status}</p>
        <p>{new Date(issue.created_at).toDateString()}</p>
      </div>
    );
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) notFound();
    throw error;
  }
};

export default IssueDetail;
