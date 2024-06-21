import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { StyledSpinner } from '@styles/Spinner/StyledSpinner';

export const Spinner = ({ color = 'gray400', size = 24, ...props }: { color?: string; size?: number }) => {
    const th = useContext(ThemeContext) ?? theme;
    return <StyledSpinner data-testid='spinner' $size={size} color={color} theme={th} {...props} />;
};

StyledSpinner.displayName = 'StyledSpinner';
