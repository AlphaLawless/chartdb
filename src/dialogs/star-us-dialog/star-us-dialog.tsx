import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import StarUs from '@/assets/star-us.gif';
import { Button } from '@/components/button/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/dialog/dialog';
import { ZoomableImage } from '@/components/zoomable-image/zoomable-image';
import { useDialog } from '@/hooks/use-dialog';
import { useLocalConfig } from '@/hooks/use-local-config';
import type { BaseDialogProps } from '../common/base-dialog-props';

export interface StarUsDialogProps extends BaseDialogProps {}

export const StarUsDialog: React.FC<StarUsDialogProps> = ({ dialog }) => {
  const { t } = useTranslation();
  const { setGithubRepoOpened } = useLocalConfig();

  useEffect(() => {
    if (!dialog.open) return;
  }, [dialog.open]);
  const { closeStarUsDialog } = useDialog();

  const handleConfirm = useCallback(() => {
    setGithubRepoOpened(true);
    window.open('https://github.com/chartdb/chartdb', '_blank');
  }, [setGithubRepoOpened]);

  return (
    <Dialog
      {...dialog}
      onOpenChange={(open) => {
        if (!open) {
          closeStarUsDialog();
        }
      }}
    >
      <DialogContent className="flex flex-col" showClose>
        <DialogHeader>
          <DialogTitle>{t('star_us_dialog.title')}</DialogTitle>
          <DialogDescription>
            {t('star_us_dialog.description')}
          </DialogDescription>
        </DialogHeader>
        <div className="flex">
          <ZoomableImage src={StarUs} />
        </div>
        <DialogFooter className="flex gap-1 md:justify-between">
          <DialogClose asChild>
            <Button variant="secondary">{t('star_us_dialog.close')}</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handleConfirm}>
              {t('star_us_dialog.confirm')}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
