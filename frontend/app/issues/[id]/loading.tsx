import React from "react";
import { Card, Flex, Skeleton } from "@radix-ui/themes";

const LoadingIssueDetailPage = () => {
  return (
    <div>
      <Skeleton width="100rem" height="2rem" />
      <Flex gap="3" my="2">
        <Skeleton width="5rem" height="2rem" />
        <Skeleton width="8rem" height="2rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          doloribus enim error, hic in labore laboriosam natus necessitatibus
          odio perferendis quam rerum unde? Impedit laudantium maiores officia
          voluptate? Atque, vitae!
        </Skeleton>
      </Card>
    </div>
  );
};

export default LoadingIssueDetailPage;
