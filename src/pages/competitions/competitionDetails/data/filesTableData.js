// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";

// ProductPage page components
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import ReviewCell from "layouts/ecommerce/products/product-page/components/ReviewCell";
import DefaultCell from "layouts/ecommerce/products/product-page/components/DefaultCell";
import FileCell from 'layouts/table/FileCell';

// Images
import blackChair from "assets/images/ecommerce/black-chair.jpeg";
import chairPink from "assets/images/ecommerce/chair-pink.jpeg";
import chairSteel from "assets/images/ecommerce/chair-steel.jpeg";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const filesTableData = {
    columns: [
        { Header: "file", accessor: "file", width: "50%" },
        { Header: "description", accessor: "description", align: "center" },
        { Header: "download", accessor: "download", align: "center" },
        { Header: "uploaded", accessor: "uploaded", align: "center" },
    ],

    rows: [
        {
            file: <FileCell image={blackChair} name="Christopher Knight Home" />,
            description: <DefaultCell>This is the description of the file.</DefaultCell>,
            download: (
                <MDBox display='flex' alignItems='center'>
                    <FileDownloadIcon fontSize='medium' />
                </MDBox>
            ),
            availability: (
                <MDBox width="8rem">
                    <MDProgress variant="gradient" value={80} color="success" />
                </MDBox>
            ),
            uploaded: <DefaultCell>2023/04/02</DefaultCell>,
        },
        {
            file: <FileCell image={chairPink} name="Bar Height Swivel Barstool" />,
            description: <DefaultCell>This is the description of the file.</DefaultCell>,
            download: (
                <MDBox display='flex' alignItems='center'>
                    <FileDownloadIcon fontSize='medium' />
                </MDBox>
            ),
            availability: (
                <MDBox width="8rem">
                    <MDProgress variant="gradient" value={90} color="success" />
                </MDBox>
            ),
            uploaded: <DefaultCell>2023/04/02</DefaultCell>,
        },
        {
            file: <FileCell image={chairSteel} name="Signature Design by Ashley" />,
            description: <DefaultCell>This is the description of the file.</DefaultCell>,
            download: (
                <MDBox display='flex' alignItems='center'>
                    <FileDownloadIcon fontSize='medium' />
                </MDBox>
            ),
            availability: (
                <MDBox width="8rem">
                    <MDProgress variant="gradient" value={60} color="warning" />
                </MDBox>
            ),
            uploaded: <DefaultCell>2023/04/02</DefaultCell>,
        },
    ],
};

export default filesTableData;