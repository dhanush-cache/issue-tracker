import React from "react";
import axios from "axios";
import { Issue } from "@/app/issues/page";
import { notFound } from "next/navigation";
import IssueForm from "@/app/issues/_components/IssueForm";

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  try {
    const response = await axios.get<Issue>(
      `http://127.0.0.1:8000/api/issues/${params.id}`,
    );
    const issue = response.data;
    return <IssueForm issue={issue} />;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) notFound();
    throw error;
  }
};

export default EditIssuePage;
