import { type Theme } from '@utils/theme';
import { type DefaultTheme } from 'styled-components';

export const padding = (theme?: Theme) => theme?.padding;
export const margin = (theme?: Theme) => theme?.padding;
export const border = (theme?: Theme) => theme?.border;
export const borderRadius = (theme?: Theme) => theme?.borderRadius;
export const borderColor = (theme?: Theme) => theme?.borderColor;
export const fontSize = (theme?: Theme) => theme?.fontSize;
export const fontColor = (theme?: Theme) => theme?.fontColor;
export const fontColorActive = (theme?: Theme) => theme?.fontColorActive;
export const fontWeightLight = (theme?: Theme) => theme?.fontWeightLight;
export const fontWeightNormal = (theme?: Theme) => theme?.fontWeightNormal;
export const fontWeightSemiBold = (theme?: Theme) => theme?.fontWeightSemiBold;
export const fontWeightBold = (theme?: Theme) => theme?.fontWeightBold;
export const iconSize = (theme?: Theme) => theme?.iconSize;
export const iconColor = (theme?: Theme) => theme?.iconColor;
export const iconColorActive = (theme?: Theme) => theme?.iconColorActive;
export const backgroundColor = (theme?: Theme) => theme?.backgroundColor;
export const backgroundColorSelected = (theme?: Theme) => theme?.backgroundColorSelected;
export const backgroundColorActive = (theme?: Theme) => theme?.backgroundColorActive;
export const backgroundColorHover = (theme?: Theme) => theme?.backgroundColorHover;
export const backgroundColorFocused = (theme?: Theme) => theme?.backgroundColorFocused;
export const backgroundColorDisabled = (theme?: Theme) => theme?.backgroundColorDisabled;
export const boxShadow = (theme?: Theme) => theme?.boxShadow;
export const boxShadowHover = (theme?: Theme) => theme?.boxShadowHover;
export const blue50 = (theme?: Theme) => theme?.color?.gray50;
export const blue100 = (theme?: Theme) => theme?.color?.blue100;
export const blue200 = (theme?: Theme) => theme?.color?.blue200;
export const blue300 = (theme?: Theme) => theme?.color?.blue300;
export const blue400 = (theme?: Theme) => theme?.color?.blue400;
export const blue500 = (theme?: Theme) => theme?.color?.blue500;
export const blue600 = (theme?: Theme) => theme?.color?.blue600;
export const blue700 = (theme?: Theme) => theme?.color?.blue700;
export const blue800 = (theme?: Theme) => theme?.color?.blue800;
export const blue900 = (theme?: Theme) => theme?.color?.blue900;
export const gray50 = (theme?: Theme) => theme?.color?.gray50;
export const gray100 = (theme?: Theme) => theme?.color?.gray100;
export const gray200 = (theme?: Theme) => theme?.color?.gray200;
export const gray300 = (theme?: Theme) => theme?.color?.gray300;
export const gray400 = (theme?: Theme) => theme?.color?.gray400;
export const gray500 = (theme?: Theme) => theme?.color?.gray500;
export const gray600 = (theme?: Theme) => theme?.color?.gray600;
export const gray700 = (theme?: Theme) => theme?.color?.gray700;
export const gray800 = (theme?: Theme) => theme?.color?.gray800;
export const gray900 = (theme?: Theme) => theme?.color?.gray900;
export const teal = (theme?: Theme) => theme?.color?.teal;
export const red = (theme?: Theme) => theme?.color?.red;
export const orange = (theme?: Theme) => theme?.color?.orange;
export const amber = (theme?: Theme) => theme?.color?.amber;
export const green = (theme?: Theme) => theme?.color?.green;
export const cyan = (theme?: Theme) => theme?.color?.cyan;
export const blueLight = (theme?: Theme) => theme?.color?.blueLight;
export const blue = (theme?: Theme) => theme?.color?.blue;
export const violet = (theme?: Theme) => theme?.color?.violet;
export const magenta = (theme?: Theme) => theme?.color?.magenta;
export const pink = (theme?: Theme) => theme?.color?.pink;
export const brown = (theme?: Theme) => theme?.color?.brown;
export const gray = (theme?: Theme) => theme?.color?.gray;
export const white = (theme?: Theme) => theme?.color?.white;
export const black = (theme?: Theme) => theme?.color?.black;
export const error = (theme?: Theme) => theme?.error;
export const primaryColor = (theme?: DefaultTheme | Theme) => theme?.primary;
export const primaryColorSvg = (theme?: Theme) => {
    const newPrimaryColor = theme?.primary;
    return newPrimaryColor ? (newPrimaryColor as string).replace('#', '') : '';
};
export const successColor = (theme?: Theme) => theme?.success;
export const warningColor = (theme?: Theme) => theme?.warning;
export const errorColor = (theme?: Theme) => theme?.error;
export const infoColor = (theme?: Theme) => theme?.info;
export const componentHeight = (theme?: Theme) => theme?.heightElements;
export const alertMessageFontSize = (theme?: Theme) => theme?.alert?.messageFontSize;
export const alertDescriptionMessageFontSize = (theme?: Theme) => theme?.alert?.descriptionFontSize;
export const headingFontSize = (theme?: Theme) => theme?.heading.fontSize;
export const buttonSize = (theme?: Theme) => theme?.button?.size;
export const dataPickerHeight = (theme?: Theme) => theme?.dataPicker?.height;
export const dataPickerFontSize = (theme?: Theme) => theme?.dataPicker?.fontSize;
export const dataPickerPaddingX = (theme?: Theme) => theme?.dataPicker?.paddingX;
export const paginationHeight = (theme?: Theme) => theme?.pagination?.height;
export const paginationFontSize = (theme?: Theme) => theme?.pagination?.fontSize;
export const paginationPaddingX = (theme?: Theme) => theme?.pagination?.paddingX;
export const paragraphSize = (theme?: Theme) => theme?.paragraph?.size;
export const tableFontSize = (theme?: Theme) => theme?.table?.fontSize;
// export const tagHeight = (theme?: Theme) => theme?.tag?.height;
export const tagLineHeight = (theme?: Theme) => theme?.tag?.lineHeight;
export const tagFontSize = (theme?: Theme) => theme?.tag?.fontSize;
export const tagPaddingX = (theme?: Theme) => theme?.tag?.paddingX;
export const tagPaddingY = (theme?: Theme) => theme?.tag?.paddingY;
export const tabHeight = (theme?: Theme) => theme?.tab?.height;
export const tabFontSize = (theme?: Theme) => theme?.tab?.fontSize;
export const tabPaddingX = (theme?: Theme) => theme?.tab?.paddingX;
export const inputHeight = (theme?: Theme) => theme?.input?.height;
export const inputFontSize = (theme?: Theme) => theme?.input?.fontSize;
export const inputPaddingX = (theme?: Theme) => theme?.input?.paddingX;
export const selectHeight = (theme?: Theme) => theme?.select?.height;
export const selectFontSize = (theme?: Theme) => theme?.select?.fontSize;
export const selectPaddingX = (theme?: Theme) => theme?.select?.paddingX;
export const cardPaddingX = (theme?: Theme) => theme?.card?.paddingX;
export const cardPaddingY = (theme?: Theme) => theme?.card?.paddingY;
export const cardFontSize = (theme?: Theme) => theme?.card?.fontSize;
export const cardLineHeight = (theme?: Theme) => theme?.card?.lineHeight;
export const switchPeriodComparativeFontSize = (theme?: Theme) => theme?.switchPeriodComparative?.fontSize;
export const gridOuterPadding = (theme?: Theme) => theme?.grid?.outerPadding;
export const gridOuterMargin = (theme?: Theme) => theme?.grid?.outerMargin;
export const gridGutterWidth = (theme?: Theme) => theme?.grid?.gutterWidth;
export const gridGutterCompensation = (theme?: Theme) => theme?.grid?.gutterCompensation;
export const gridHalfGutterWidth = (theme?: Theme) => theme?.grid?.halfGutterWidth;
export const gridBreakpoints = (theme?: Theme) => theme?.grid?.breakpoints;
export const gridColumns = (theme?: Theme) => theme?.grid?.columns;
export const gridContainerSm = (theme?: Theme) => theme?.grid?.containerSm;
export const gridContainerMd = (theme?: Theme) => theme?.grid?.containerMd;
export const gridContainerLg = (theme?: Theme) => theme?.grid?.containerLg;
export const progressHeight = (theme?: Theme) => theme?.progress?.height;
export const progressFontSize = (theme?: Theme) => theme?.progress?.fontSize;
export const progressBackgroundColor = (theme?: Theme) => theme?.progress?.backgroundColor;
export const formControlMessageFontSize = (theme?: Theme) => theme?.formControl?.messageFontSize;
