import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ProjectFrontmatter } from 'src/_libs/types/project-markdown';
import { useIsMounted } from 'src/hooks/use-is-mounted';

type ProjectDetailDrawerProps = ProjectFrontmatter & {
  isOpen: boolean;
  onClose: () => void;
};

export const ProjectDetailDrawer = ({
  isOpen,
  onClose,
  title,
}: ProjectDetailDrawerProps) => {
  const { isMounted } = useIsMounted();

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            onClick={onClose}
            className="bg-[black] bg-opacity-40 fixed inset-0 z-40"
            initial={'exit'}
            animate={'enter'}
            exit={'exit'}
            variants={{
              exit: { opacity: 0 },
              enter: { opacity: 1 },
            }}
          />
          <motion.section
            className="bg-bg w-full max-w-[640px] p-36 fixed right-0 top-0 bottom-0 z-50 drop-shadow-drawer"
            initial={'exit'}
            animate={'enter'}
            exit={'exit'}
            variants={{
              exit: { opacity: 0, translateX: '100%' },
              enter: { opacity: 1, translateX: '0' },
            }}
            transition={{ ease: 'easeOut', duration: 0.25 }}
          >
            <h1>{title}</h1>
            <p></p>
          </motion.section>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
