import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    selectbutton: {
        border: "1px solid rgb(23, 162, 184)",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",

        backgroundColor: props => (props.selected ? "#17a2b8" : ""),
        color: props => (props.selected ? "black" : ""),
        fontWeight: props => (props.selected ? 700 : 500),

        "&:hover": {
            backgroundColor: "#17a2b8",
            color: "black",
        },
        width: "22%",
    },
});




const SelectButton = (props) => {
    const { children, selected, onClick } = props;
    const classes = useStyles(props);
    return (
        <span
            onClick={onClick} className={classes.selectbutton}>
            {children}
        </span>
    )
}

export default SelectButton