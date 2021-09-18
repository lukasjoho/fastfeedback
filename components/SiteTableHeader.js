import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from '@chakra-ui/react';
import AddSiteModal from './AddSiteModel';

const SiteTableHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="gray.700">Sites</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between" mb={8}>
        <Heading color="black">Sites</Heading>
        <AddSiteModal>+ Add Site</AddSiteModal>
      </Flex>
    </>
  );
};
export default SiteTableHeader;
