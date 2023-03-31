import React from 'react';

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function FileCell({ image, name }) {
    return (
        <MDBox display="flex" alignItems="center" pr={2}>
            <MDBox mr={2} display="flex" alignItems="center">
                <InsertDriveFileIcon fontSize='large' sx={{ bgcolor: '', height: 32 }} />
            </MDBox>
            <MDTypography variant="button" fontWeight="medium">
                {name}
            </MDTypography>
        </MDBox>
    );
}

// Typechecking props for the FileCell
FileCell.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};