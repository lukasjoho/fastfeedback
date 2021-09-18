import React, { useState, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
  Button
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { deleteFeedback } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import { mutate } from 'swr';
const RemoveButton = ({ feedbackId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useAuth();
  const onClose = () => setIsOpen(false);
  const onDelete = () => {
    // console.log(feedbackId);
    deleteFeedback(feedbackId);
    mutate(
      ['/api/feedback', auth.user.token],
      async (data) => {
        return {
          feedback: data.feedback.filter(
            (feedback) => feedback.id !== feedbackId
          )
        };
      },
      false
    );
    onClose();
  };
  const cancelRef = useRef();

  return (
    <>
      <IconButton
        variant="ghost"
        aria-label="Search database"
        onClick={() => setIsOpen(true)}
        icon={<DeleteIcon />}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default RemoveButton;
