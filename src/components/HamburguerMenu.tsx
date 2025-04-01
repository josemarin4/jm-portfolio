import { Box, IconButton } from "@mui/material";
import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const HamburguerMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleScrollTo = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleClose();
    }
  };

  return (
    <Box>
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
      </Box>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {["Home", "About", "Technologies", "Projects", "Contact"].map(
          (item) => (
            <MenuItem key={item} onClick={() => handleScrollTo(item)}>
              {item}
            </MenuItem>
          )
        )}
      </Menu>
    </Box>
  );
};

export default HamburguerMenu;
