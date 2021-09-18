import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from '@chakra-ui/react';

const FeedbackTableHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="gray.700">Feedback</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between" mb={8}>
        <Heading color="black">My Feedback</Heading>
      </Flex>
    </>
  );
};
export default FeedbackTableHeader;
