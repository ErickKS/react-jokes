import { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: ReactNode;
}

export function Dialog({ open, setOpen, title, children }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4 outline-none">
          <div className="flex flex-col gap-6 px-4 py-6 rounded-xl bg-[#131316] text-[#C2CDE7]">
            <div className="flex justify-between items-center">
              <DialogPrimitive.Title className="text-xl font-semibold">{title}</DialogPrimitive.Title>

              <DialogPrimitive.Close className="flex justify-center items-center h-9 w-9 rounded-full outline-none transition-all hover:bg-[#8995B1]/30">
                <X size={20} />
              </DialogPrimitive.Close>
            </div>

            <main className="flex flex-col gap-4">{children}</main>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

interface DialogAlertProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onDelete: () => void;
}

export function DialogAlert({ open, setOpen, onDelete }: DialogAlertProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm px-4 outline-none">
          <div className="flex flex-col gap-6 px-4 py-6 rounded-xl bg-[#131316] border border-red-600 text-[#C2CDE7]">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-semibold text-red-600">Warning</span>

              <p className="text-[#8995B1] text-center font-medium">
                You are about to unfavorite your favorite joke. Are you sure you want to proceed?
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <DialogPrimitive.Close className="flex justify-center items-center h-9 outline-none transition-all text-[#C2CDE7]">
                Close
              </DialogPrimitive.Close>

              <button
                onClick={onDelete}
                className="py-2 px-4 border border-red-600 rounded text-red-600 font-semibold outline-none transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
