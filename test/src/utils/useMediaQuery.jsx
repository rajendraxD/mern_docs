import useMediaQuery from '@mui/material/useMediaQuery';

export default function useDevice() {
    const isDesktop = useMediaQuery('(min-width:768px)');
    const isMobile = !isDesktop;

    return { isDesktop, isMobile };
}