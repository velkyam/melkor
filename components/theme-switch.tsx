import React, { useState, useEffect } from 'react';
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
    className?: string;
    classNames?: SwitchProps["classNames"];
    onClick?: () => void;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
    className,
    classNames,
    onClick,
}) => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const onChange = () => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    };

    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch({
        isSelected: currentTheme === 'light',
        "aria-label": `Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`,
        onChange,
    });

    const renderIcon = () => {
        if (!mounted) {
            return null;  // Or a placeholder/loading state
        }
        return currentTheme === 'dark' ? <SunFilledIcon size={24} /> : <MoonFilledIcon size={24} />;
    };

    return (
        <Component
            {...getBaseProps({
                className: clsx(
                    "px-px transition-opacity hover:opacity-80 cursor-pointer",
                    className,
                    classNames?.base
                ),
            })}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <div
                {...getWrapperProps()}
                className={slots.wrapper({
                    class: clsx(
                        [
                            "w-auto h-auto",
                            "bg-transparent",
                            "rounded-lg",
                            "flex items-center justify-center",
                            "group-data-[selected=true]:bg-transparent",
                            "!text-default-500",
                            "pt-px",
                            "px-0",
                            "mx-0",
                        ],
                        classNames?.wrapper
                    ),
                })}
                onClick={() => {
                    if (onClick) onClick();
                }}
            >
                {renderIcon()}
            </div>
        </Component>
    );
};

