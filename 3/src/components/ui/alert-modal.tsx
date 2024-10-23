import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from './modal';
import { Loader2 } from 'lucide-react';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
  description?: string;
  title?: string;
  variant?: 'danger' | 'primary';
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  description,
  title = 'Are you sure ?',
  variant = 'danger',
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title={title}
      description={description ?? "This action cannot be undone."}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        {
          loading ? (
            <Button disabled={loading} variant={variant === 'danger' ? 'destructive' : 'default'} onClick={onConfirm}>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Mohon tunggu
            </Button>
          ) : (
            <Button disabled={loading} variant={variant === 'danger' ? 'destructive' : 'default'} onClick={onConfirm}>
              Confirm
            </Button>
          )
        }
      </div>
    </Modal>
  );
};
