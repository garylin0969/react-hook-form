import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ColProps {
    className?: string;
    children?: ReactNode;
}

const Col: FC<ColProps> = ({ className, children }) => {
    return <div className={clsx('m-2', className)}>{children}</div>;
};

export default Col;
