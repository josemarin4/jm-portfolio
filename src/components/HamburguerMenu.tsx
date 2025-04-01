import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC, useState, MouseEvent } from "react";

const HamburguerMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        edge="start"
        aria-label="menu"
        aria-controls={open ? "menu-appbar" : undefined}
        aria-haspopup="true"
      >
        <MenuIcon sx={{ color: "background.paper" }} />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {["About", "Technologies", "Projects", "Contact"].map((item) => (
          <MenuItem key={item} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default HamburguerMenu;
