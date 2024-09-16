import React from 'react';
import { useTranslation } from "react-i18next";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useColorScheme } from '@mui/material/styles';
import { US, RU } from 'country-flag-icons/react/3x2';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { SelectChangeEvent } from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import {Box, Link, MenuItem, Select, Typography} from "@mui/material";

function Header() {
    const { mode, setMode } = useColorScheme();
    const {t, i18n} = useTranslation();

    const locales: Record<'en' | 'ru', { title: string; icon: JSX.Element }> = {
        en: {
            title: "English",
            icon: <US />
        },
        ru: {
            title: "Russian",
            icon: <RU />
        }
    };

    if (!mode) {
        return null;
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleLanguageChange = (event: SelectChangeEvent) => {
        i18n.changeLanguage(event.target.value).then(() => {
            console.log('Language changed successfully');
        })
        .catch((error) => {
            console.error('Error changing language:', error);
        });
    };

    console.log(i18n.language);

    return (
        <Box
            sx={{
                position: 'sticky',
                top:0,
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                bgcolor: 'background.paper',
                color: 'text.primary',
                borderRadius: 1,
                p: {xs: 1, md: 3},
                minHeight: '56px',
        }}>
            <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                displayEmpty
                renderValue={(selected) => locales[selected as keyof typeof locales]?.icon}
                sx={{ minWidth: 80 }}
                variant="outlined"
            >
                {Object.keys(locales).map((locale) => (
                    <MenuItem key={locale} value={locale}>
                        {locales[locale as keyof typeof locales].icon}
                    </MenuItem>
                ))}
            </Select>
            <Typography onClick={() => scrollToTop()}>{t('main.header')}</Typography>

            {mode !== "light" ?
                <DarkModeIcon onClick={() => setMode("light")}/> :
                <LightModeIcon onClick={() => setMode("dark")}/>
            }

            <Link sx={{color: 'text.primary'}}
                  href={"https://github.com/loqumi"}>
                <GitHubIcon  />
            </Link>
        </Box>
    );
}

export default Header;
