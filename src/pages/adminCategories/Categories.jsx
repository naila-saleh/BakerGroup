import React from 'react'
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import PropTypes from "prop-types";
import useAdminCategories from "../../hooks/admin/useAdminCategories.jsx";
import {useTranslation} from "react-i18next";
import Loader from "../../ui/loader/Loader.jsx";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link as RouterLink} from "react-router";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Avatar from "@mui/material/Avatar";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

export default function Categories() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const {data, isLoading, isError, error} = useAdminCategories();
    const {t} = useTranslation();

    const rows = React.useMemo(() => (Array.isArray(data) ? data : []), [data]);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const displayedRows =
        rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return (
            <Box sx={{ p: 3 }}>
                <Typography color="error">{error?.message || 'Failed to load categories.'}</Typography>
            </Box>
        );
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Button variant="contained" component={RouterLink} to="/admin/" sx={{ backgroundColor: '#2D5356', '&:hover': { backgroundColor: '#1f3a3c' } }}>
                    {t('Add Category')}
                </Button>
            </Box>
            <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow sx={{ '& .MuiTableCell-root': { backgroundColor: '#2D5356', color: '#fff' } }}>
                            <TableCell sx={{textAlign: 'start'}}>{t('Image')}</TableCell>
                            <TableCell sx={{textAlign: 'start'}}>{t('Name')}</TableCell>
                            <TableCell sx={{textAlign: 'start'}}>{t('Number of Products')}</TableCell>
                            <TableCell sx={{textAlign: 'start'}}>{t('Status')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayedRows.map((row, index) => (
                            <TableRow key={row.id || `${row.name}-${index}`} component={RouterLink} to={`/admin/products/${row.id}`} sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { backgroundColor: '#f5f5f5' } }}>
                                <TableCell component="th" scope="row" sx={{textAlign: 'start'}}>
                                    <Avatar
                                        src={row.mainImage || row.image || ''}
                                        alt={row.name || 'Product image'}
                                        variant="rounded"
                                        sx={{ width: 100, height: 70, objectFit: 'contain' }}
                                    />
                                </TableCell>
                                <TableCell sx={{textAlign: 'start'}}>
                                    {row.name || '-'}
                                </TableCell>
                                <TableCell sx={{textAlign: 'start'}}>{row.products.length}</TableCell>
                                <TableCell sx={{textAlign: 'start'}}>
                                    {row.status !== undefined ? (row.status? 'Inactive' : 'Active') : '-'}
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={4} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                labelRowsPerPage={t('rows per page')}
                                rowsPerPageOptions={[5, 10, 25, { label: t('All'), value: -1 }]}
                                labelDisplayedRows={({ from, to, count }) =>
                                    `${from}–${to} ${t('of')} ${count !== -1 ? count : t('more than')}`
                                }
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                slotProps={{
                                    select: {
                                        inputProps: {
                                            'aria-label': t('rows per page'),
                                        },
                                        native: true,
                                    },
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    );
}
