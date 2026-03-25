"use client";

import ModalComponent from "./ModalComponent";

/**
 * DeleteConfirmModal is a reusable component for confirming delete actions.
 * It displays a modal with a customizable title and message, and provides
 * "Cancel" and "Delete" buttons for user interaction.
 * example usage:
 * 
 * 
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const deleteTemplateMutation = useDeleteBuyerEmailTemplate();
 
   const handleDeleteTemplate = (id: string) => {
    setDeleteTargetId(id);
    setIsDeleteModalOpen(true);
  }


     const confirmDeleteTemplate = () => {
    if (deleteTargetId) {
      deleteTemplateMutation.mutate(
        { emailTemplateId: deleteTargetId },
        {
          onSuccess: () => {
            setLibraryTemplates((prev) => prev.filter((t) => t.id !== deleteTargetId));
            setIsDeleteModalOpen(false);
            setDeleteTargetId(null);
          },
          onError: () => {
            setIsDeleteModalOpen(false);
            setDeleteTargetId(null);
          },
        }
      );
    }
  };


 *  <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDeleteTemplate}
          title="Confirm Delete"
          message="Are you sure you want to delete this template?"
        />
 */



interface DeleteConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message?: string;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirm Delete",
    message = "Are you sure you want to delete this item?",
}) => {
    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} title={title}>
            <p>{message}</p>
            <div className="flex justify-end gap-4 mt-4">
                <button
                    onClick={onClose}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                    Cancel
                </button>
                <button
                    onClick={onConfirm}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                >
                    Delete
                </button>
            </div>
        </ModalComponent>
    );
};

export default DeleteConfirmModal;