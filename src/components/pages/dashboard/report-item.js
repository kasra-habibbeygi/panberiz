import { useState } from 'react';
import { ReportItemField } from './report-item.style';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function ReportItem() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <ReportItemField open={open} onClick={handleOpen}>
            <div className='item'>
                <p>ردیف</p>
                <p>1</p>
                <p>25</p>
                <p>450</p>
                <p>450</p>
                <p>لورم ایپسوم</p>
                {open ? <ExpandLess /> : <ExpandMore />}
            </div>
            <Collapse className='collapse' in={open}>
                <div className='collapse-item'>
                    <p>ردیف</p>
                    <p>1</p>
                    <p>25</p>
                    <p>450</p>
                    <p>450</p>
                    <p>لورم ایپسوم</p>
                </div>
            </Collapse>
        </ReportItemField>
    );
}

export default ReportItem;

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { ExpandMore } from '@mui/icons-material';

// export default function ReportItem() {
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };

//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardHeader
//                 avatar={
//                     <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
//                         R
//                     </Avatar>
//                 }
//                 action={
//                     <IconButton aria-label='settings'>
//                         <MoreVertIcon />
//                     </IconButton>
//                 }
//                 title='Shrimp and Chorizo Paella'
//                 subheader='September 14, 2016'
//             />

//             <CardActions disableSpacing>
//                 <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout='auto' unmountOnExit>
//                 <CardContent>
//                     <Typography paragraph>Method:</Typography>
//                 </CardContent>
//             </Collapse>
//         </Card>
//     );
// }
