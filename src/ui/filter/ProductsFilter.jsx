import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

export default function ProductsFilter({sortBy = '', ascending = '', onSortChange}) {
    const {t} = useTranslation();

    const handleSortChange = (field) => (event) => {
        onSortChange?.({sortBy: field, ascending: event.target.value});
    };

    const handleSelectedOptionClick = (field, value) => {
        if (sortBy === field && ascending === value) {
            onSortChange?.({sortBy: '', ascending: ''});
        }
    };

    const getGroupValue = (field) => (sortBy === field ? ascending : '');

    const sortCardSx = {display: 'flex', gap: 2, alignItems: 'start', pb: 2, border: '1px solid rgba(0,0,0,0.1)', borderRadius: '20px', padding: {md: '20px 10px 20px 15px', sm: '10px 5px 10px 10px', xs: '20px 10px 20px 15px'}};
    const optionSx = {border: '1px solid rgba(0,0,0,0.1)', borderRadius: '25px', padding: {md: '0 20px 0 10px', sm: '0 10px 0 5px', xs: '0 20px 0 10px'}, mx: 1};

    return (
        <Box sx={{display: 'flex', gap: 2, flexDirection: 'column', alignItems: {md: 'start', xs:'center'}, paddingY: {lg: 10, md: 8, sm: 6, xs: 4}, width: '100%'}}>
            <Typography component={'h2'} sx={{fontSize: {md: '35px', sm: '30px', xs: '28px'}, pb: {md: 3,sm: 2, xs: 1}}}>{t('Filter Options')}</Typography>
            <Box sx={{display: 'flex', gap: 2, flexDirection: {md: 'column', sm: 'row', xs: 'column'}, alignItems: {md: 'start', xs:'center'}, justifyContent: 'center', width: '100%'}}>
                <FormControl sx={sortCardSx}>
                    <FormLabel id={'sort-by-price'} sx={{fontSize: {md: '20px', sm: '18px', xs: '16px'}}}>{t('Sort By Price:')}</FormLabel>
                    <RadioGroup aria-labelledby={'sort-by-price'} name="sort-by-price" value={getGroupValue('price')} onChange={handleSortChange('price')} sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center'}}>
                        <FormControlLabel value='true' control={<Radio onClick={() => handleSelectedOptionClick('price', 'true')} sx={{'&.Mui-checked': {color: 'secondary.main'}}} />} label={t('Low to High')} sx={optionSx} />
                        <FormControlLabel value='false' control={<Radio onClick={() => handleSelectedOptionClick('price', 'false')} sx={{'&.Mui-checked': {color: 'secondary.main'}}} />} label={t('High to Low')} sx={optionSx} />
                    </RadioGroup>
                </FormControl>
                <FormControl sx={sortCardSx}>
                    <FormLabel id={'sort-by-rate'} sx={{fontSize: {md: '20px', sm: '18px', xs: '16px'}}}>{t('Sort By Rate:')}</FormLabel>
                    <RadioGroup aria-labelledby={'sort-by-rate'} name="sort-by-rate" value={getGroupValue('rate')} onChange={handleSortChange('rate')} sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center'}}>
                        <FormControlLabel value='true' control={<Radio onClick={() => handleSelectedOptionClick('rate', 'true')} sx={{'&.Mui-checked': {color: 'secondary.main'}}} />} label={t('Low to High')} sx={optionSx} />
                        <FormControlLabel value='false' control={<Radio onClick={() => handleSelectedOptionClick('rate', 'false')} sx={{'&.Mui-checked': {color: 'secondary.main'}}} />} label={t('High to Low')} sx={optionSx}/>
                    </RadioGroup>
                </FormControl>
                <FormControl sx={sortCardSx}>
                    <FormLabel id={'sort-by-name'} sx={{fontSize: {md: '20px', sm: '18px', xs: '16px'}}}>{t('Sort By Name:')}</FormLabel>
                    <RadioGroup aria-labelledby={'sort-by-name'} name="sort-by-name" value={getGroupValue('name')} onChange={handleSortChange('name')} sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center'}}>
                        <FormControlLabel value='true' control={<Radio onClick={() => handleSelectedOptionClick('name', 'true')} sx={{'&.Mui-checked': {color: 'secondary.main'}}} />} label={t('Low to High')} sx={optionSx} />
                        <FormControlLabel value='false' control={<Radio onClick={() => handleSelectedOptionClick('name', 'false')} sx={{'&.Mui-checked': {color: 'secondary.main'}}} />} label={t('High to Low')} sx={optionSx} />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    )
}