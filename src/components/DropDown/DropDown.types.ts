import { ReactNode } from 'react';

export interface DropDownItem {
    label: string;
    onClick: () => void;
}

export interface DropDownProps {
    items: DropDownItem[];
    children: ReactNode;
}
