import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion/accordion';
import type { DBCustomType } from '@/lib/domain/db-custom-type';
import { CustomTypeListItemContent } from './custom-type-list-item-content/custom-type-list-item-content';
import { CustomTypeListItemHeader } from './custom-type-list-item-header/custom-type-list-item-header';

export interface CustomTypeListItemProps {
  customType: DBCustomType;
}

export const CustomTypeListItem = React.forwardRef<
  React.ElementRef<typeof AccordionItem>,
  CustomTypeListItemProps
>(({ customType }, ref) => {
  const { attributes, setNodeRef, transform, transition } = useSortable({
    id: customType.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <AccordionItem value={customType.id} className="border-none" ref={ref}>
      <div
        className="w-full rounded-md border-b"
        ref={setNodeRef}
        style={style}
        {...attributes}
      >
        <AccordionTrigger
          className="w-full rounded-md bg-slate-50 px-2 py-0 hover:bg-accent hover:no-underline data-[state=open]:rounded-b-none dark:bg-slate-900"
          asChild
        >
          <CustomTypeListItemHeader customType={customType} />
        </AccordionTrigger>
        <AccordionContent className="border-x border-slate-100 p-1 pb-0 dark:border-slate-800">
          <CustomTypeListItemContent customType={customType} />
        </AccordionContent>
      </div>
    </AccordionItem>
  );
});

CustomTypeListItem.displayName = 'CustomTypeListItem';
