import {
  Skeleton,
  Box,
  Link,
  Code,
  Switch,
  IconButton
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import React from 'react';
import { Table, Tr, Th, Td } from './table';
import NextLink from 'next/link';
import FeedbackLink from './FeedbackLink';
import RemoveButton from './RemoveButton';
const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight="medium ">{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{'/'}</Code>
            </Td>
            <Td>
              <Switch
                variantColor="green"
                defaultChecked={feedback.status === 'active'}
              />
            </Td>
            <Td>
              <RemoveButton feedbackId={feedback.id} />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
